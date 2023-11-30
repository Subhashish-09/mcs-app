import { readUserSession } from "@/lib/supabase/user";
import { logout } from "./auth/actions";
import { Button, Link } from "@nextui-org/react";

export default async function Home() {
  const { data } = await readUserSession();

  return (
    <>
      {data.session ? (
        <form action={logout}>
          <button>SignOut</button>
        </form>
      ) : (
        <Button as={Link} href="/auth">
          Login/Register
        </Button>
      )}

      <div>
        <p>
          <Link href="/chat">Chat</Link>
        </p>
        <p>
          <Link href="/flash-card?ci=2">FlashCard</Link>
        </p>
        <p>
          <Link href="/poll?pi=2">Poll</Link>
        </p>
        <p>
          <Link href="/practise/PQZ_FfY4KEKyVsB~9">Practise</Link>
        </p>
        <p>
          <Link href="/quiz/QZ_qhorgK">Quiz</Link>
        </p>
      </div>
    </>
  );
}
