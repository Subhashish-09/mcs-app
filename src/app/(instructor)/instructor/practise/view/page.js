import { supabaseServer } from "@/lib/supabase/server";
import InstructorPractiseCreate from "../components/instructor-practise-new";

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
  }
};

export default InstructorPractiseViewPage;
