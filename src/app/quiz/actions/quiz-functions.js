"use server";

import { supabaseServer } from "@/lib/supabase/server";

const loadQuestion = async (question_no, quizid) => {
  const supabase = await supabaseServer();
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

  return question;
};

export { loadQuestion };
