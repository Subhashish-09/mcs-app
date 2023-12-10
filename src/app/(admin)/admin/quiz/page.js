import { supabaseServer } from "@/lib/supabase/server";
import AdminQuizPanel from "./components/admin-quiz-panel";

const AdminQuizIndexPage = async () => {
  const supabase = await supabaseServer();

  const { data: quiz } = await supabase.from("quiz").select();

  return <AdminQuizPanel quiz={quiz} />;
};

export default AdminQuizIndexPage;
