import { supabaseServer } from "@/lib/supabase/server";
import AdminClassNew from "../components/admin-class-new";
import AdminClassEdit from "../components/admin-class-edit";

const AdminClassView = async ({ searchParams }) => {
  const supabase = await supabaseServer();

  if (searchParams["type"] === "create") {
    return <AdminClassNew />;
  } else if (searchParams["type"] === "edit") {
    const { data: classes_standards, error } = await supabase
      .from("classes_standards")
      .select("*")
      .eq("class_id", searchParams["id"])
      .single();

    return <AdminClassEdit classData={classes_standards} />;
  }
};

export default AdminClassView;
