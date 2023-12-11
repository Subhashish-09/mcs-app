import { supabaseServer } from "@/lib/supabase/server";
import AdminStatesPanel from "./components/admin-states-panel";

const AdminStatesPage = async () => {
  const supabase = await supabaseServer();
  const { data: states, error } = await supabase.from("states").select("*");

  return <AdminStatesPanel states={states} />;
};

export default AdminStatesPage;
