"use client";

import { Button } from "@nextui-org/react";
import supabaseClient from "@/lib/supabase/client";

const OAuth = () => {
  const supabase = supabaseClient();

  const loginWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };

  return (
    <div className="space-y-5">
      <Button className="w-full" onClick={loginWithGoogle}>
        Continue with Google
      </Button>
    </div>
  );
};

export default OAuth;
