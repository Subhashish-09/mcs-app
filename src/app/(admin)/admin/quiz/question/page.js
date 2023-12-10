import QuizAllQuestions from "@/components/quiz-all-questions";
import { supabaseServer } from "@/lib/supabase/server";

const AdminQuizQuestionViews = async ({ searchParams }) => {
  const supabase = await supabaseServer();

  if (searchParams["type"] === "all") {
    const { data: quizQBank } = await supabase
      .from("quizQBank")
      .select()
      .eq("quiz_id", searchParams["qid"])
      .order("question_no", { ascending: true });
    return <QuizAllQuestions user={"admin"} questions={quizQBank} />;
  }
};

export default AdminQuizQuestionViews;
