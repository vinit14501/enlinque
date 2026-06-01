/**
 * Preview Disable Route Handler
 *
 * Disables Next.js Draft Mode and redirects to the home page.
 * The admin panel includes a "Exit Preview" link that calls this endpoint.
 */

import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(): Promise<Response> {
  const draft = await draftMode();
  draft.disable();
  redirect("/");
}
