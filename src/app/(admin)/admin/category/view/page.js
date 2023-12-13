import { supabaseServer } from "@/lib/supabase/server";
import AdminCategoryNew from "../components/admin-create-new";
import AdminCategoryEdit from "../components/admin-category-edit";

const AdminCategoryViewPage = async ({ searchParams }) => {
  const supabase = await supabaseServer();
  if (searchParams["type"] === "create") {
    return <AdminCategoryNew />;
  } else if (searchParams["type"] === "edit") {
    const { data: category } = await supabase
      .from("category")
      .select()
      .eq("category_id", searchParams["id"])
      .single();
    console.log(category);
    return <AdminCategoryEdit categoryData={category} />;
  }
};

export default AdminCategoryViewPage;
