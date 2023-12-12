import { supabaseServer } from "@/lib/supabase/server";
import InstructorPractiseCreate from "../components/instructor-practise-new";
import InstructorPractiseEdit from "../components/instructor-practise-edit";

const InstructorPractiseViewPage = async ({ searchParams }) => {
  const supabase = await supabaseServer();
  const { data: category } = await supabase.from("category").select();
  const { data: subcategory } = await supabase.from("subcategory").select();
  const { data: topic } = await supabase.from("topic").select();

  if (searchParams["type"] === "create") {
    return (
      <InstructorPractiseCreate
        categories={category}
        subCategories={subcategory}
        topics={topic}
      />
    );
  } else if (searchParams["type"] === "edit") {
    const { data: practise } = await supabase
      .from("practise")
      .select()
      .eq("practise_id", searchParams["id"])
      .single();
    return (
      <InstructorPractiseEdit
        practise_data={practise}
        categories={category}
        subCategories={subcategory}
        topics={topic}
      />
    );
  }
};

export default InstructorPractiseViewPage;
