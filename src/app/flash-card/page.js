import { supabaseServer } from "@/lib/supabase/server";
import FlashCard from "./components/flash-card-panel";

const FlashCardPage = async ({ searchParams: { ci } }) => {
  const supabase = await supabaseServer();
  const { data: flash_cards } = await supabase.from("flash_cards").select();
  return <FlashCard ci={ci} FlashCards={flash_cards} />;
};

export default FlashCardPage;
