import QuizPanel from "@/app/quiz/components/quiz-panel";
import { supabaseServer } from "@/lib/supabase/server";
import { readUserSession } from "@/lib/supabase/user";
import { redirect } from "next/navigation";

const loadData = async (quizid) => {
  let sessionId;
  const supabase = await supabaseServer();

  const {
    data: { session },
  } = await readUserSession();

  if (session === null) {
    redirect("/auth?next=/quiz/" + quizid);
  }
  const userId = session?.user?.id;

  const { data: quiz } = await supabase
    .from("quiz")
    .select()
    .eq("quiz_id", quizid)
    .single();

  const que_buttons = await supabase
    .from("quizQBank")
    .select("question_no, question_sub_category, quiz_id")
    .eq("quiz_id", quizid)
    .order("question_no", {
      ascending: true,
    });

  const { data: quizSession } = await supabase
    .from("quizSession")
    .select()
    .eq("quiz_id", quizid)
    .eq("userId", userId)
    .eq("is_quiz_submitted", false);

  if (quizSession.length < 1) {
    const { data, error } = await supabase
      .from("quizSession")
      .insert([
        {
          quiz_id: quizid,
          userId: userId,
          is_quiz_submitted: false,
          session_questions_responses: {
            1: 0,
          },
          session_questions_response_status: { 1: "Visited" },
          last_seen_question: 1,
        },
      ])
      .select();

    sessionId = data[0]["session_id"];
  } else {
    sessionId = quizSession[0]["session_id"];
  }

  const session_data = await supabase
    .from("quizSession")
    .select()
    .eq("quiz_id", quizid)
    .eq("session_id", sessionId)
    .eq("is_quiz_submitted", false)
    .single();

  const question_no = session_data.data["last_seen_question"];

  const questionButtons = que_buttons["data"];

  const { data: quizQBank } = await supabase
    .from("quizQBank")
    .select()
    .eq("quiz_id", quizid)
    .eq("question_no", question_no)
    .single();

  const options = [];

  for (let i = 1; i <= quizQBank["options_length"]; i++) {
    options.push(quizQBank[`option_${i}`]);
  }

  const question = {
    questionNo: quizQBank["question_no"],
    question: quizQBank["question"],
    options,
    subject: quizQBank["question_sub_category"],
  };

  const quiz_subjects = quiz["quiz_subjects"];

  return { quiz, question, sessionId, questionButtons, quiz_subjects };
};

const QuizPanelPage = async ({ params: { quizid } }) => {
  const { quiz, question, sessionId, questionButtons, quiz_subjects } =
    await loadData(quizid);

  return (
    <>
      <QuizPanel
        quizQBank={question}
        quiz={quiz}
        questionButtons={questionButtons}
        quizSubjects={quiz_subjects}
      />
    </>
  );
};

export default QuizPanelPage;
