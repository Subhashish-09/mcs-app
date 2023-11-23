"use server";

import { unstable_noStore as noStore } from "next/cache";
import { supabaseServer } from "./server";

export async function readUserSession() {
  noStore();
  const supabsae = await supabaseServer();
  return await supabsae.auth.getSession();
}
