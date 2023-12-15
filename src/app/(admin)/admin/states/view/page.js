import { supabaseServer } from "@/lib/supabase/server";

const AdminStatesView = async ({ searchParams }) => {
  const supabase = await supabaseServer();

  if (searchParams["type"] === "create") {
  } else if (searchParams["type"] === "edit") {
  }
};

export default AdminStatesView;
