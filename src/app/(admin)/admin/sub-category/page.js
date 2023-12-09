import { supabaseServer } from "@/lib/supabase/server";
import AdminSubCategoryPanel from "./components/admin-sub-category-panel";

const SubCategoryPage = async () => {
  const supabase = await supabaseServer();

  const { data: subcategory } = await supabase.from("subcategory").select();

  return <AdminSubCategoryPanel subcategory={subcategory} />;
};

export default SubCategoryPage;
