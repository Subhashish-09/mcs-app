import { supabaseServer } from "@/lib/supabase/server";
import AdminTopicPanel from "./components/instructor-topic-panel";

const TopicPage = async () => {
  const supabase = await supabaseServer();

  const { data: topic } = await supabase.from("topic").select();

  return <AdminTopicPanel topic={topic} />;
};

export default TopicPage;
