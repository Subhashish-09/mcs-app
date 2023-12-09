import { supabaseServer } from "@/lib/supabase/server";
import AdminCategoryPanel from "./components/admin-category-panel";

const CategoryPage = async () => {
  const supabase = await supabaseServer();

  const { data: category } = await supabase.from("category").select();

  return <AdminCategoryPanel category={category} />;
};

export default CategoryPage;
