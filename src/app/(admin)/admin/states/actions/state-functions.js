"use server";

import { supabaseServer } from "@/lib/supabase/server";

const CreateState = async (form) => {
  const supabase = await supabaseServer();

  const { data, error } = await supabase
    .from("states")
    .insert([
      {
        state_name: form["state_name"],
        state_code: form["state_code"],
        state_status: form["state_status"],
        state_is_active: form["state_is_active"],
      },
    ])
    .select();

  return { error };
};

const EditState = async (form) => {
  const supabase = await supabaseServer();

  const { data, error } = await supabase
    .from("states")
    .update({
      state_name: form["state_name"],
      state_code: form["state_code"],
      state_status: form["state_status"],
      state_is_active: form["state_is_active"],
    })
    .eq("state_id", form["state_id"])
    .select();

  return { error };
};

export { CreateState, EditState };
