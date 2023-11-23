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
    </>
  );
}
