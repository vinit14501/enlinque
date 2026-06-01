"use client";

import { useEffect, type ReactNode } from "react";

/**
 * Patches window.open so that Payload's live-preview "popout" button
 * opens a new TAB instead of a popup WINDOW.
 *
 * Payload calls window.open(url, '_blank', 'width=X,height=Y') using the
 * active breakpoint dimensions.  Browsers interpret a call with size/position
 * features as a popup window request rather than a tab.  Stripping those
 * features forces the browser to open a new tab — matching the behaviour of
 * the standard "Preview" link at the top of the admin toolbar.
 */
export function WindowOpenPatch({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Guard: window.open may not be writable in every environment (sandboxed
    // iframes, test runners, etc.).  Swallow failures so React never receives
    // an undefined thrown value — which would crash its error recovery with
    // "Cannot read properties of undefined (reading 'digest')".
    let original: typeof window.open | undefined;

    try {
      original = window.open.bind(window);

      window.open = function (
        url?: string | URL,
        target?: string,
        features?: string,
      ): WindowProxy | null {
        // Drop size/position specs so the browser opens a tab, not a popup.
        if (features && /width|height|left|top/i.test(features)) {
          return original!(url, "_blank");
        }
        return original!(url, target, features);
      };
    } catch {
      // Patching not possible in this environment — fall back silently.
      original = undefined;
    }

    return () => {
      if (original !== undefined) {
        try {
          window.open = original;
        } catch {
          // Cleanup failure is non-critical — ignore.
        }
      }
    };
  }, []);

  return <>{children}</>;
}
