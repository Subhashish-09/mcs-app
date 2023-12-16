"use server";

import { supabaseServer } from "@/lib/supabase/server";

const CreateExam = async (form) => {
  const supabase = await supabaseServer();

  const { data, error } = await supabase
    .from("exams")
    .insert([
      {
        exam_name: form["exam_name"],
        exam_slug: form["exam_name"].toLowerCase().replace(" ", "-"),
        exam_status: form["exam_status"],
        exam_is_active: form["exam_is_active"],
      },
    ])
    .select();

  return { error };
};

const EditExam = async (form) => {
  const supabase = await supabaseServer();
  const { data, error } = await supabase
    .from("exams")
    .update({
      exam_name: form["exam_name"],
      exam_slug: form["exam_name"].toLowerCase().replace(" ", "-"),
      exam_status: form["exam_status"],
      exam_is_active: form["exam_is_active"],
    })
    .eq("exam_id", form["exam_id"])
    .select();

  return { error };
};

export { CreateExam, EditExam };
