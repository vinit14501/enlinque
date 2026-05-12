"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Circle } from "lucide-react";

// hasMounted pattern: on the first server-render and initial hydration pass
// initial={false} is used so Framer Motion does NOT set opacity:0 in the
// server-side HTML. Without JS the text remains fully visible.
// After mount, hasMounted=true restores the carousel slide-in animation.

const carouselContent = [
  {
    header: "Startup IT Solutions",
    title: "Startup IT Consulting",
    subtext:
      "Accelerating startups with innovative IT solutions for rapid growth where speed meets strategy",
    image: "/images/1.webp",
    navWord: "Startup",
  },
  {
    header: "Digital Marketing",
    title: "Digital Marketing",
    subtext:
      "Scaling startups with data-driven strategies, ROI-focused solutions and flawless execution",
    image: "/images/2.webp",
    navWord: "Digital Marketing",
  },
  {
    header: "E-commerce Solutions",
    title: "E-commerce Solutions",
    subtext:
      "Empowering e-commerce startups to launch, scale, and dominate the market",
    image: "/images/3.webp",
    navWord: "E-commerce",
  },
  {
    header: "App Development",
    title: "App Development",
    subtext:
      "Transforming ideas into high-performance apps, designed for speed and scalability—from concept to MVP in just 4 months",
    image: "/images/4.webp",
    navWord: "App Development",
  },
];

const SWIPE_OFFSET_THRESHOLD = 50;
const SWIPE_VELOCITY_THRESHOLD = 300;

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % carouselContent.length);
      }, 10000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleSectionClick = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleDragEnd = (
    _: unknown,
    info: { offset: { x: number }; velocity: { x: number } },
  ) => {
    const { x: offsetX } = info.offset;
    const { x: velocityX } = info.velocity;

    const swipedLeft =
      offsetX < -SWIPE_OFFSET_THRESHOLD ||
      velocityX < -SWIPE_VELOCITY_THRESHOLD;
    const swipedRight =
      offsetX > SWIPE_OFFSET_THRESHOLD || velocityX > SWIPE_VELOCITY_THRESHOLD;

    if (swipedLeft) {
      handleSectionClick((activeIndex + 1) % carouselContent.length);
    } else if (swipedRight) {
      handleSectionClick(
        (activeIndex - 1 + carouselContent.length) % carouselContent.length,
      );
    }
  };

  return (
    <motion.div
      className="relative w-full min-h-100 md:min-h-125 lg:h-screen lg:max-h-125 flex overflow-hidden cursor-grab active:cursor-grabbing"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0}
      dragMomentum={false}
      onDragEnd={handleDragEnd}
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={carouselContent[activeIndex].image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="w-full h-full absolute inset-0"
          >
            <Image
              src={carouselContent[activeIndex].image}
              alt={carouselContent[activeIndex].title}
              fill
              className="object-cover"
              fetchPriority={activeIndex === 0 ? "high" : "auto"}
              loading={activeIndex === 0 ? "eager" : "lazy"}
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center lg:items-start justify-center px-4 sm:px-6 lg:px-8">
        {/*
         * Single H1 for the page — describes Enlinque's primary service offering.
         * Visually hidden so it does not disrupt the hero design, but fully
         * readable by search-engine crawlers and screen readers.
         * The carousel headings below are demoted to H2 (multiple slide titles
         * would create duplicate H1s, violating on-page SEO best practice).
         */}
        <h1 className="sr-only">
          Fractional CxO &amp; Business Consulting Services
        </h1>

        <div className="w-full lg:w-1/2 mb-16 text-center lg:text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={false}
              animate="animate"
              exit="exit"
              className="space-y-4"
            >
              <motion.h2
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -20 },
                }}
                transition={{ duration: 0.6 }}
                className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight font-raleway tracking-tight"
              >
                {carouselContent[activeIndex].header}
              </motion.h2>

              <motion.p
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -20 },
                }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-200 text-sm sm:text-base lg:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                {carouselContent[activeIndex].subtext}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="absolute bottom-8 left-0 right-0 flex flex-wrap justify-center lg:justify-start lg:left-8 gap-6 px-4">
          {carouselContent.map((section, index) => (
            <button
              key={section.navWord}
              onClick={() => handleSectionClick(index)}
              className="relative group"
            >
              {/* Desktop Navigation */}
              <span className="hidden lg:block text-sm sm:text-base font-bold font-raleway tracking-wider py-12 text-white">
                {section.navWord}
                {activeIndex === index && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-10 left-0 right-0 h-0.5 bg-[#0b60a0]"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}
              </span>

              {/* Mobile/Tablet Navigation */}
              <div className="lg:hidden relative">
                <motion.div
                  className={`transition-all duration-300 ${
                    activeIndex === index ? "scale-100" : "scale-90"
                  }`}
                >
                  {activeIndex === index ? (
                    <div className="relative">
                      <Circle className="text-[#0b60a0] w-3 h-3 fill-[#0b60a0]" />
                      <motion.div
                        layoutId="activeIndicatorMobile"
                        className="absolute -inset-2 border border-[#0b60a0] rounded-full"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    </div>
                  ) : (
                    <Circle
                      className={`w-3 h-3 text-white transition-all duration-300 ${
                        index === activeIndex
                          ? "opacity-100"
                          : "opacity-60 hover:opacity-80"
                      }`}
                    />
                  )}
                </motion.div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
