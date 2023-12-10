import { supabaseServer } from "@/lib/supabase/server";
import AdminPractisePanel from "./components/admin-practise-panel";

const AdminPractisePage = async () => {
  const supabase = await supabaseServer();

  const { data: practise } = await supabase.from("practise").select("*");

  return <AdminPractisePanel practise={practise} />;
};

export default AdminPractisePage;
