import { supabaseServer } from "@/lib/supabase/server";
import InstructorPractisePanel from "./components/instructor-practise-panel";

const InstructorPractisePage = async () => {
  const supabase = await supabaseServer();

  const { data: practise } = await supabase.from("practise").select("*");

  return <InstructorPractisePanel practise={practise} />;
};

export default InstructorPractisePage;
