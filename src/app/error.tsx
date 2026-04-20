"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-[#000048] mb-4">
        Something went wrong
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={reset}
        className="px-6 py-3 bg-[#000048] text-white rounded-lg hover:bg-[#0b60a0] transition-colors duration-300"
      >
        Try Again
      </button>
    </div>
  );
}
