"use server";

import { supabaseServer } from "@/lib/supabase/server";

const CreateClass = async (form) => {
  const supabase = await supabaseServer();

  const { data, error } = await supabase
    .from("classes_standards")
    .insert([
      {
        class_name: form["class_name"],
        class_slug: form["class_name"].toLowerCase().replace(" ", "-"),
        class_status: form["class_status"],
        class_is_active: form["class_is_active"],
      },
    ])
    .select();

  return { error };
};

const EditClass = async (form) => {
  const supabase = await supabaseServer();

  const { data, error } = await supabase
    .from("classes_standards")
    .update({
      class_name: form["class_name"],
      class_slug: form["class_name"].toLowerCase().replace(" ", "-"),
      class_status: form["class_status"],
      class_is_active: form["class_is_active"],
    })
    .eq("class_id", form["class_id"])
    .select();

  return { error };
};

export { CreateClass, EditClass };
