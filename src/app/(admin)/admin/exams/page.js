import { supabaseServer } from "@/lib/supabase/server";
import AdminExamPanel from "./components/admin-exam-panel";

const AdminExamPage = async () => {
  const supabase = await supabaseServer();
  const { data: exams, error } = await supabase.from("exams").select("*");
  return <AdminExamPanel exams={exams} />;
};

export default AdminExamPage;
