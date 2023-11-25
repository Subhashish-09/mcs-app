import { supabaseServer } from "@/lib/supabase/server";

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

  return (
    <div className="m-5">
      {practiseQBank.map((question) => (
        <ul>
          <li>Question No: {question["question_no"]}</li>
          <li dangerouslySetInnerHTML={{ __html: question["question"] }} />
        </ul>
      ))}
    </div>
  );
};

export default PractisePanelPage;
