import { redirect } from "next/navigation";
import ChatPanel from "./components/chat-panel";
import { readUserSession } from "@/lib/supabase/user";

const ChatPanelPage = async () => {
  const {
    data: { session },
  } = await readUserSession();

  if (session === null) {
    redirect("/auth");
  }
  const userId = session?.user?.id;
  return <ChatPanel userId={userId} />;
};

export default ChatPanelPage;
