"use client";

import { useState, type FormEvent } from "react";
import { Mail, ArrowRight } from "lucide-react";

export default function BlogNewsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;

    // Mock subscribe — replace with real API call when newsletter service is integrated
    setStatus("success");
    setEmail("");
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Background gradient — matches site CTA banner style */}
      <div className="absolute inset-0 bg-linear-to-br from-[#000048] via-blue-700 to-[#0b60a0]" />
      <div className="absolute inset-0 bg-linear-to-t from-[#000048]/60 to-transparent" />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mb-5">
          <Mail className="w-6 h-6 text-white" />
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
          Get insights delivered to you
        </h2>
        <p className="text-base sm:text-lg text-white/80 mb-8 max-w-md mx-auto">
          Join executives and founders who read the Enlinque newsletter — no
          noise, just actionable strategy.
        </p>

        {status === "success" ? (
          <div className="inline-flex items-center gap-2 bg-white/15 text-white text-sm sm:text-base font-medium px-6 py-3 rounded-xl">
            <span>You&apos;re subscribed — welcome aboard! 🎉</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              autoComplete="email"
              className="flex-1 px-4 py-3 rounded-lg text-sm text-gray-900 bg-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-white/60 transition"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-[#000048] text-sm font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shrink-0"
            >
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <p className="text-xs text-white/50 mt-4">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
