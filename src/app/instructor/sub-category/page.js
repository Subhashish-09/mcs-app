import { supabaseServer } from "@/lib/supabase/server";
import InstructorSubCategoryPanel from "./components/instructor-sub-category-panel";

const SubCategoryPage = async () => {
  const supabase = await supabaseServer();

  const { data: subcategory } = await supabase.from("subcategory").select();

  return <InstructorSubCategoryPanel subcategory={subcategory} />;
};

export default SubCategoryPage;
