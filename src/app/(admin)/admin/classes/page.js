import { supabaseServer } from "@/lib/supabase/server";
import AdminClassPanel from "./components/admin-class-panel";

const AdminClassPage = async () => {
  const supabase = await supabaseServer();
  const { data: classes_standards, error } = await supabase
    .from("classes_standards")
    .select("*");

  return <AdminClassPanel classes={classes_standards} />;
};

export default AdminClassPage;
