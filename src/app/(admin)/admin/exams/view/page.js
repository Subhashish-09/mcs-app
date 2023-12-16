import { supabaseServer } from "@/lib/supabase/server";
import AdminExamNew from "../components/admin-exam-new";
import AdminExamEdit from "../components/admin-exam-edit";

const AdminExamsView = async ({ searchParams }) => {
  const supabase = await supabaseServer();

  if (searchParams["type"] === "create") {
    return <AdminExamNew />;
  } else if (searchParams["type"] === "edit") {
    let { data: exams, error } = await supabase
      .from("exams")
      .select()
      .eq("exam_id", searchParams["id"])
      .single();

    return <AdminExamEdit examData={exams} />;
  }
};

export default AdminExamsView;
