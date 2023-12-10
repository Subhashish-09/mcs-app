import PractiseAllQuestions from "@/components/practise-all-questions";
import { supabaseServer } from "@/lib/supabase/server";

const AdminPractiseQuestionViews = async ({ searchParams }) => {
  const supabase = await supabaseServer();

  if (searchParams["type"] === "all") {
    const { data: practiseQBank } = await supabase
      .from("practiseQBank")
      .select()
      .eq("practise_id", searchParams["pid"])
      .order("question_no", { ascending: true });
    return <PractiseAllQuestions user={"admin"} questions={practiseQBank} />;
  }
};

export default AdminPractiseQuestionViews;
