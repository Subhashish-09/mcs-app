import { supabaseServer } from "@/lib/supabase/server";
import PollComponent from "../components/poll-component";

const PollPage = async ({ params: { pollId } }) => {
  const supabase = await supabaseServer();
  const { data: polls, error } = await supabase
    .from("polls")
    .select("*")
    .eq("id", pollId)
    .single();

  return <PollComponent pollId={pollId} polls={polls} />;
};

export default PollPage;
