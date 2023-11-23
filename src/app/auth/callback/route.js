import { supabaseServer } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const requestUrl = new URL(request.url);

  const isAuth = cookies().get("supabase-auth-token");

  if (isAuth) {
    return NextResponse.redirect(requestUrl.origin);
  }

  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/";

  if (code) {
    const supabase = await supabaseServer();

    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(requestUrl.origin);
    }
  }
  return NextResponse.redirect("/auth/auth-code-error");
};
