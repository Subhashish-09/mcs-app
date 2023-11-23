import { readUserSession } from "@/lib/supabase/user";
import { redirect } from "next/navigation";
import { AuthForm } from "./components/AuthForm";

const AuthPage = async () => {
  const { data } = await readUserSession();

  if (data.session) {
    return redirect("/");
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96">
        <AuthForm />
      </div>
    </div>
  );
};

export default AuthPage;
