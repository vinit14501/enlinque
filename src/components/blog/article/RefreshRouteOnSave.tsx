"use client";

/**
 * RefreshRouteOnSave
 *
 * Client component that listens for postMessage events from the Payload CMS
 * admin panel (same-origin). When the admin saves a draft, Payload posts a
 * message to all open iframes; this component calls router.refresh() so the
 * Next.js App Router re-fetches the server component tree and re-renders with
 * the latest draft content — without a full page reload.
 *
 * This component is a no-op for regular site visitors: it only reacts to
 * postMessage events that originate from the Payload admin panel.
 */

import { RefreshRouteOnSave as PayloadRefreshRouteOnSave } from "@payloadcms/live-preview-react";
import { useRouter } from "next/navigation";
import React from "react";

export const RefreshRouteOnSave: React.FC = () => {
  const router = useRouter();
  return (
    <PayloadRefreshRouteOnSave
      refresh={() => router.refresh()}
      serverURL={process.env.NEXT_PUBLIC_SERVER_URL ?? ""}
    />
  );
};
