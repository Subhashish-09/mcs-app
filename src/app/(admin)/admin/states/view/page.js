import { supabaseServer } from "@/lib/supabase/server";
import AdminStateNew from "../components/admin-state-new";
import AdminStateEdit from "../components/admin-state-edit";

const AdminStatesView = async ({ searchParams }) => {
  const supabase = await supabaseServer();

  if (searchParams["type"] === "create") {
    return <AdminStateNew />;
  } else if (searchParams["type"] === "edit") {
    const { data: states, error } = await supabase
      .from("states")
      .select("*")
      .eq("state_id", searchParams["id"])
      .single();

    return <AdminStateEdit stateData={states} />;
  }
};

export default AdminStatesView;
