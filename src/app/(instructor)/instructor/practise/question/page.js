import { supabaseServer } from "@/lib/supabase/server";
import InstructorPractiseEditQuestion from "../components/questions/instructor-practise-edit-question";
import PractiseAllQuestions from "@/components/practise-all-questions";

const InstructorPractiseQuestionViews = async ({ searchParams }) => {
  const supabase = await supabaseServer();
  if (searchParams["type"] === "all") {
    const { data: practiseQBank } = await supabase
      .from("practiseQBank")
      .select()
      .eq("practise_id", searchParams["pid"])
      .order("question_no", { ascending: true });
    return (
      <PractiseAllQuestions user={"instructor"} questions={practiseQBank} />
    );
  } else if (searchParams["type"] === "single-edit") {
    const { data: practiseQBank } = await supabase
      .from("practiseQBank")
      .select()
      .eq("practise_id", searchParams["pid"])
      .eq("question_id", searchParams["qid"])
      .single();

    return <InstructorPractiseEditQuestion question={practiseQBank} />;
  }
};

export default InstructorPractiseQuestionViews;
