import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import hero1 from "../../assets/1.png"
import hero2 from "../../assets/2.png"
import hero3 from "../../assets/3.png"
import hero4 from "../../assets/4.png"

const carouselContent = [
  {
    header: "Startup IT Solutions",
    title: "Startup IT Consulting",
    subtext:
      "Accelerating startups with innovative IT solutions for rapid growth where speed meets strategy",
    image: hero1,
    navWord: "Startup",
  },
  {
    header: "Digital Marketing",
    title: "Digital Marketing",
    subtext:
      "Scaling startups with data-driven strategies, ROI-focused solutions and flawless execution",
    image: hero2,
    navWord: "Digital Marketing",
  },
  {
    header: "E-commerce Solutions",
    title: "E-commerce Solutions",
    subtext:
      "Empowering e-commerce startups to launch, scale, and dominate the market",
    image: hero3,
    navWord: "E-commerce",
  },
  {
    header: "App Development",
    title: "App Development",
    subtext:
      "Transforming ideas into high-performance apps, designed for speed and scalability—from concept to MVP in just 4 months",
    image: hero4,
    navWord: "App Development",
  },
]

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    let interval
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % carouselContent.length)
      }, 5000) // Change slide every 5 seconds
    }
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handleSectionClick = (index) => {
    setActiveIndex(index)
    setIsAutoPlaying(false) // Pause auto-play when manually clicking
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <div className="relative w-full h-[100vh] sm:h-[85vh] md:h-[75vh] lg:h-[500px] flex overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={carouselContent[activeIndex].image}
            src={carouselContent[activeIndex].image}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full object-cover absolute inset-0"
            alt={carouselContent[activeIndex].title}
          />
        </AnimatePresence>
        <div className="absolute inset-0"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-start justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full lg:w-1/2 space-y-4">
          <AnimatePresence mode="wait">
            <motion.h1
              key={carouselContent[activeIndex].header}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight font-raleway tracking-tight"
            >
              {carouselContent[activeIndex].header}
            </motion.h1>

            <motion.p
              key={carouselContent[activeIndex].subtext}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-200 text-base sm:text-lg max-w-xl leading-relaxed"
            >
              {carouselContent[activeIndex].subtext}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="absolute bottom-12 left-8 right-0 flex justify-start gap-6 px-4">
          {carouselContent.map((section, index) => (
            <button
              key={section.navWord}
              onClick={() => handleSectionClick(index)}
              className={`
                relative whitespace-nowrap text-sm sm:text-base font-bold font-raleway tracking-wider transition-all duration-300
                ${activeIndex === index ? "text-white scale-105" : "text-white"}
              `}
            >
              {section.navWord}
              {activeIndex === index && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#0b60a0]"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero
