import { supabaseServer } from "@/lib/supabase/server";
import InstructorCategoryPanel from "./components/instructor-category-panel";

const CategoryPage = async () => {
  const supabase = await supabaseServer();

  const { data: category } = await supabase.from("category").select();

  return <InstructorCategoryPanel category={category} />;
};

export default CategoryPage;
