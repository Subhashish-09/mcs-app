import { supabaseServer } from "@/lib/supabase/server";
import AdminTopicPanel from "./components/admin-topic-panel";

const AdminTopicPage = async () => {
  const supabase = await supabaseServer();

  const { data: topic } = await supabase.from("topic").select();

  return <AdminTopicPanel topic={topic} />;
};

export default AdminTopicPage;
