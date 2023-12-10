import QuizAllQuestions from "@/components/quiz-all-questions";
import { supabaseServer } from "@/lib/supabase/server";
import InstructorQuizEditQuestion from "../components/questions/instructor-quiz-edit-question";

const InstructorQuizQuestionViews = async ({ searchParams }) => {
  const supabase = await supabaseServer();
  if (searchParams["type"] === "all") {
    const { data: quizQBank } = await supabase
      .from("quizQBank")
      .select()
      .eq("quiz_id", searchParams["qid"])
      .order("question_no", { ascending: true });
    return <QuizAllQuestions user={"instructor"} questions={quizQBank} />;
  } else if (searchParams["type"] === "single-edit") {
    const { data: quizQBank } = await supabase
      .from("quizQBank")
      .select()
      .eq("quiz_id", searchParams["qid"])
      .eq("question_id", searchParams["eqid"])
      .single();

    return <InstructorQuizEditQuestion question={quizQBank} />;
  }
};

export default InstructorQuizQuestionViews;
