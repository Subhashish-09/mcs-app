import { supabaseServer } from "@/lib/supabase/server";
import InstructorQuizPanel from "./components/instructor-quiz-panel";

const InstructorQuizIndexPage = async () => {
  const supabase = await supabaseServer();

  const { data: quiz } = await supabase.from("quiz").select();

  return <InstructorQuizPanel quiz={quiz} />;
};

export default InstructorQuizIndexPage;
