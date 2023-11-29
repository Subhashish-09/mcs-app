import { readUserSession } from "@/lib/supabase/user";
import { redirect } from "next/navigation";
import { AuthForm } from "./components/AuthForm";

const AuthPage = async ({ searchParams: { next } }) => {
  const { data } = await readUserSession();

  if (data.session) {
    return redirect(next ? next : "/");
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96">
        <AuthForm next={next} />
      </div>
    </div>
  );
};

export default AuthPage;
