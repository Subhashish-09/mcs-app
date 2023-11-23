"use client";

import supabaseClient from "@/lib/supabase/client";

const OAuth = () => {
  const supabase = supabaseClient();

  const loginWithGithub = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/oauth/callback`,
      },
    });
  };

  return (
    <div className="space-y-5">
      <h1>Login with oAuth</h1>
      <button className="w-full" onClick={loginWithGithub}>
        Login with Google
      </button>
    </div>
  );
};

export default OAuth;
