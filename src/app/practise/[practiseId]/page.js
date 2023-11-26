import { supabaseServer } from "@/lib/supabase/server";
import PractisePanel from "../components/practise-panel";

const loadPractiseData = async (practiseId) => {
  const supabase = await supabaseServer();
  const { data: practise } = await supabase
    .from("practise")
    .select(
      "practise_id, practise_seo_title, practise_seo_description, practise_category, practise_sub_category, practise_topic"
    )
    .eq("practise_id", practiseId)
    .eq("practise_is_active", true)
    .eq("practise_status", "PUBLIC")
    .single();

  const { data: practiseQBank } = await supabase
    .from("practiseQBank")
    .select("*")
    .eq("practise_id", practiseId)
    .order("question_no", {
      ascending: true,
    });

  return { practise, practiseQBank };
};

const PractisePanelPage = async ({ params: { practiseId } }) => {
  const { practise, practiseQBank } = await loadPractiseData(practiseId);

  return <PractisePanel practise={practise} questions={practiseQBank} />;
};

export default PractisePanelPage;
