"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

// Safe threshold: any text likely to overflow 4 lines at normal font size.
// Victoria's review is 199 chars — the old threshold of 200 excluded her.
const CLAMP_THRESHOLD = 150;

const testimonials = [
  {
    id: 1,
    name: "Nicole McGuire",
    title: "Founder & CEO, Trail Guide CRM",
    paragraphs: [
      "I highly recommend Enlinque for their exceptional marketing expertise and strategic approach. As the Founder and CEO of Trail Guide CRM, I needed a marketing partner who could effectively communicate our unique value proposition and help expand our reach in the Salesforce ecosystem.",
      "Enlinque took the time to understand our brand, audience, and business goals. So far, they have provided insightful strategies, compelling content, website redesign, SEO improvements, and we are getting ready to launch our first campaign! I am very hopeful that their expertise and guidance will improve our visibility and engagement. The team is not only knowledgeable but also responsive, creative, and results-driven.",
      "If you're looking for a marketing partner who will go the extra mile to bring your vision to life, I wholeheartedly recommend Enlinque.",
    ],
  },
  {
    id: 2,
    name: "Susan Goldsmith",
    title: "Business Owner",
    paragraphs: [
      "I had an exceptional working experience with Enlinque in the design and development of my website. Not only did they bring creativity and technical expertise, but also provided invaluable guidance that saved me time, money, and frustration. This was invaluable to me and something I wish I had found before I ever started down the domain search process.",
      "At the start, I made some missteps with my domain service and didn't fully understand the technical setup required to launch my site efficiently and economically. They helped me navigate the best solutions, ensuring everything was set up correctly. Their ability to simplify complex technical aspects made all the difference, and I felt supported every step of the way.",
      "Additionally, their creative and strategic approach to design and functionality ensured my website reflects my brand and business goals. They were responsive, detail-oriented, and committed to delivering a site that exceeded my expectations.",
      "I highly recommend Enlinque to anyone looking for not just a web designer, but a true partner who ensures your website is built the right way from the ground up. I truly appreciated Enlinque, for their expertise, patience, and support!",
    ],
  },
  {
    id: 3,
    name: "Victoria Sanders",
    title: "Client",
    paragraphs: [
      "From planning to execution, Smita's team was always one step ahead of the game! They listened, saw my vision clearly, and always solving issues I hadn't predicted. Plus, we had a blast collaborating!",
    ],
  },
];

type Testimonial = (typeof testimonials)[number];

function getVisibleCount(): number {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 768) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
}

// ─── Modal ───────────────────────────────────────────────────────────────────
// Uses createPortal so the overlay renders directly on document.body, fully
// outside the card grid. This is the architecture used by Radix UI, Headless UI
// (Tailwind Labs), and Shadcn/ui — it avoids every native <dialog> positioning
// quirk that Tailwind v4's CSS reset introduces.
//
// Framer Motion (already a project dependency) provides the enter/exit animation
// without any extra packages. backdrop-filter: blur() is intentionally omitted —
// it forces GPU compositing layers on the entire page and is the primary cause of
// the "heavy/laggy" feel reported. A plain semi-transparent overlay is what
// Linear, Vercel, and Stripe use on their marketing pages.

interface ModalProps {
  testimonial: Testimonial;
  onClose: () => void;
}

function TestimonialModal({ testimonial, onClose }: ModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  // Lock background scroll while open — prevents the page from scrolling
  // underneath the overlay (standard pattern from every major modal library).
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // Close on Escape — WCAG 2.1 requirement for modal dialogs.
  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [onClose]);

  // Move focus to the close button immediately on open so keyboard and screen
  // reader users have a clear starting point inside the dialog.
  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  return createPortal(
    // Outer wrapper: flexbox centers the card both horizontally and vertically.
    // This is immune to Tailwind v4's CSS reset because it relies on flexbox
    // layout, not on the browser UA stylesheet's `margin: auto` for <dialog>.
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop: plain dark overlay, no backdrop-filter */}
      <motion.div
        className="absolute inset-0 bg-black/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18 }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal card — sits above the backdrop via z-10 */}
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="testimonial-modal-name"
        className="relative z-10 flex flex-col w-full max-w-lg max-h-[85vh] bg-white rounded-xl shadow-2xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
        // Stop clicks inside the card from bubbling to the backdrop.
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Header (never scrolls) ── */}
        <div className="flex items-start justify-between px-6 pt-6 pb-0 shrink-0">
          <div>
            <h3
              id="testimonial-modal-name"
              className="text-black text-base font-bold"
            >
              {testimonial.name}
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">{testimonial.title}</p>
          </div>
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close review"
            className="ml-4 -mt-0.5 shrink-0 rounded p-1 text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* ── Stars (never scrolls) ── */}
        <div
          className="flex items-center px-6 mt-3 gap-0.5 shrink-0"
          aria-label="5 out of 5 stars"
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 fill-yellow-400"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>

        {/* ── Scrollable content ──
            overflow-y-auto only activates when the review text genuinely exceeds
            the available space (85 vh minus the header + stars height).
            Short reviews (Victoria) show with no scrollbar at all. */}
        <div className="px-6 pt-4 pb-6 overflow-y-auto space-y-3">
          {testimonial.paragraphs.map((para, i) => (
            <p key={i} className="text-black text-sm leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      </motion.div>
    </div>,
    document.body,
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────
export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [activeModalId, setActiveModalId] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextTestimonials = () => {
    setStartIndex(
      (prev) => (prev + 1) % (testimonials.length - (visibleCount - 1)),
    );
  };

  const prevTestimonials = () => {
    setStartIndex((prev) =>
      prev === 0 ? testimonials.length - visibleCount : prev - 1,
    );
  };

  // Stable reference so TestimonialModal's useEffect deps don't re-fire.
  const handleClose = useCallback(() => setActiveModalId(null), []);

  const activeTestimonial =
    testimonials.find((t) => t.id === activeModalId) ?? null;

  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + visibleCount,
  );

  return (
    <div className="py-8 md:py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
          <h2 className="text-[#000048] text-3xl md:text-3xl font-bold">
            What our happy clients say
          </h2>
          <p className="text-lg text-black mt-3 md:mt-4 leading-relaxed px-4 md:px-0">
            Don&apos;t just take our word for it—our clients say it best! Hear
            how we&apos;ve helped them achieve their goals with ease
          </p>
        </div>

        {testimonials.length > visibleCount && (
          <div className="flex justify-center md:justify-end space-x-4 mb-6 md:mb-8">
            <div
              onClick={prevTestimonials}
              role="button"
              aria-label="Previous testimonials"
              className="bg-[#000048] w-8 md:w-10 h-8 md:h-10 grid items-center justify-center rounded-full rotate-90 shrink-0 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-2 md:w-3 fill-[#ffffff] inline"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div
              onClick={nextTestimonials}
              role="button"
              aria-label="Next testimonials"
              className="bg-blue-600 w-8 md:w-10 h-8 md:h-10 grid items-center justify-center rounded-full -rotate-90 shrink-0 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-2 md:w-3 fill-[#ffffff] inline"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        )}

        {/* items-stretch: all cards in a row share the same height */}
        <div className="px-4 md:px-10 py-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 items-stretch">
            {visibleTestimonials.map((testimonial) => {
              const fullText = testimonial.paragraphs.join(" ");
              const isLong = fullText.length > CLAMP_THRESHOLD;

              return (
                <div
                  key={testimonial.id}
                  className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow max-w-xl mx-auto w-full"
                >
                  <div className="flex flex-col flex-1 p-4">
                    <div>
                      <h6 className="text-black text-sm md:text-[15px] font-bold">
                        {testimonial.name}
                      </h6>
                      <p className="mt-1 text-xs text-black">
                        {testimonial.title}
                      </p>
                    </div>

                    <div
                      className="flex items-center mt-3 gap-0.5"
                      aria-label="5 out of 5 stars"
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 fill-yellow-400"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>

                    {/* Preview text — always clamped so card height never changes */}
                    <p className="mt-3 flex-1 text-black text-sm md:text-base leading-relaxed line-clamp-4">
                      {testimonial.paragraphs[0]}
                    </p>

                    {isLong && (
                      <button
                        onClick={() => setActiveModalId(testimonial.id)}
                        className="mt-3 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors focus:outline-none focus-visible:underline self-start"
                      >
                        Read more
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/*
        AnimatePresence detects when TestimonialModal leaves the React tree and
        lets Framer Motion play its exit animation before unmounting.
        createPortal inside TestimonialModal renders the DOM nodes on document.body
        but keeps the component in the React tree, so AnimatePresence context
        flows through correctly — this is the Radix UI / Shadcn/ui pattern.
      */}
      <AnimatePresence>
        {activeTestimonial && (
          <TestimonialModal
            key={activeTestimonial.id}
            testimonial={activeTestimonial}
            onClose={handleClose}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
