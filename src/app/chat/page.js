import { redirect } from "next/navigation";
import ChatPanel from "./components/chat-panel";
import { readUserSession } from "@/lib/supabase/user";

const ChatPanelPage = async () => {
  const {
    data: { session },
  } = await readUserSession();

  if (session === null) {
    redirect("/auth?next=/chat");
  }

  return <ChatPanel />;
};

export default ChatPanelPage;
