"use server";

import { supabaseServer } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

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

const logout = async () => {
  const supabse = await supabaseServer();
  await supabse.auth.signOut();
  return redirect("/");
};

export { signInWithEmailAndPassword, signUpWithEmailAndPassword, logout };
