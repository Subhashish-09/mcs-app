import { supabaseServer } from "@/lib/supabase/server";
import PollComponent from "./components/poll-component";

const PollPage = async ({ searchParams: { pi } }) => {
  const supabase = await supabaseServer();
  const { data: polls, error } = await supabase
    .from("polls")
    .select("*")
    .eq("id", pi)
    .single();

  return <PollComponent pollId={pi} polls={polls} />;
};

export default PollPage;
