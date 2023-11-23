"use server";

import { supabaseServer } from "@/lib/supabase/server";

const signUpWithEmailAndPassword = async (email, password) => {
  const supabase = await supabaseServer();

  const result = await supabase.auth.signUp({ email, password });

  return JSON.stringify(result);
};

const signInWithEmailAndPassword = async (email, password) => {
  const supabase = await supabaseServer();

  const result = await supabase.auth.signInWithPassword({ email, password });

  return JSON.stringify(result);
};

export { signInWithEmailAndPassword, signUpWithEmailAndPassword };
