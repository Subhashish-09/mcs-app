import { readUserSession } from "@/lib/supabase/user";
import { redirect } from "next/navigation";
import OAuth from "./components/OAuth";

const OAuthPage = async () => {
  const { data } = await readUserSession();

  if (data.session) {
    return redirect("/");
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96">
        <OAuth />
      </div>
    </div>
  );
};

export default OAuthPage;
