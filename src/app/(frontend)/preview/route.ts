/**
 * Preview Route Handler
 *
 * Enables Next.js Draft Mode so the blog page can fetch and render
 * unpublished draft content from Payload CMS.
 *
 * Flow:
 *  1. Admin clicks "Preview" on a post in Payload admin panel
 *  2. Payload generates this URL with previewSecret + path params
 *  3. Browser navigates here (carrying the Payload session cookie)
 *  4. This handler validates the secret AND the Payload auth session
 *  5. On success: enables Next.js draftMode → redirects to /blog/[slug]
 *  6. Blog page reads draftMode().isEnabled and fetches with draft: true
 *
 * Security: Double-guarded by PREVIEW_SECRET (SSRF prevention) AND
 * Payload session authentication (requires admin login).
 */

import type { PayloadRequest } from "payload";
import type { NextRequest } from "next/server";
import { getPayload } from "payload";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import configPromise from "@payload-config";

export async function GET(req: NextRequest): Promise<Response> {
  const payload = await getPayload({ config: configPromise });

  const { searchParams } = new URL(req.url);
  const path = searchParams.get("path");
  const previewSecret = searchParams.get("previewSecret");

  // ── 1. Validate preview secret ────────────────────────────────────────────
  if (
    !process.env.PREVIEW_SECRET ||
    previewSecret !== process.env.PREVIEW_SECRET
  ) {
    return new Response("Invalid preview secret", { status: 403 });
  }

  // ── 2. Validate the target path ───────────────────────────────────────────
  if (!path) {
    return new Response("Missing path parameter", { status: 400 });
  }
  // Only allow root-relative paths to prevent open redirect attacks
  if (!path.startsWith("/") || path.startsWith("//")) {
    return new Response("Path must be a root-relative URL (e.g. /blog/slug)", {
      status: 400,
    });
  }

  // ── 3. Authenticate the Payload CMS session ───────────────────────────────
  // The admin user's payload-token cookie is forwarded with this request.
  // payload.auth() reads and verifies it, returning the authenticated user.
  let user;
  try {
    user = await payload.auth({
      req: req as unknown as PayloadRequest,
      headers: req.headers,
    });
  } catch (error) {
    payload.logger.error(
      { err: error },
      "-- Error authenticating user for preview --",
    );
    return new Response("Authentication failed", { status: 403 });
  }

  const draft = await draftMode();

  if (!user) {
    draft.disable();
    return new Response("You must be logged into the CMS to preview content", {
      status: 403,
    });
  }

  // ── 4. Enable Next.js draft mode and redirect to the target page ──────────
  // draftMode().enable() sets the __prerender_bypass cookie. The blog page
  // reads draftMode().isEnabled and fetches with { draft: true } when active.
  draft.enable();
  redirect(path);
}
