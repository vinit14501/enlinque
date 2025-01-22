import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaArrowRight } from "react-icons/fa"

const carouselContent = [
  {
    header: "Startup IT Solutions",
    title: "Startup IT Consulting",
    subtext:
      "Accelerating startups with innovative IT solutions for rapid growth where speed meets strategy",
    image: "hero26.jpg",
    navWord: "Startup",
  },
  {
    header: "Digital Marketing",
    title: "Digital Marketing",
    subtext:
      "Scaling startups with data-driven strategies, ROI-focused solutions and flawless execution",
    image: "hero12.jpg",
    navWord: "Digital",
  },
  {
    header: "E-commerce Solutions",
    title: "E-commerce Solutions",
    subtext:
      "Empowering e-commerce startups to launch, scale, and dominate the market",
    image: "hero3.jpg",
    navWord: "E-commerce",
  },
  {
    header: "App Development",
    title: "App Development",
    subtext:
      "Transforming ideas into high-performance apps, designed for speed and scalability—from concept to MVP in just 4 months",
    image: "hero4.jpg",
    navWord: "App",
  },
]

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleSectionClick = (index) => {
    setActiveIndex(index)
  }

  return (
    <div className="relative w-full min-h-[90vh] flex overflow-hidden bg-gray-900">
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={carouselContent[activeIndex].image}
            src={carouselContent[activeIndex].image}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.7, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full object-cover absolute inset-0"
            alt={carouselContent[activeIndex].title}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-start justify-center px-4 sm:px-6 lg:px-8 py-12 mt-16">
        <div className="w-full lg:w-1/2 space-y-8">
          <AnimatePresence mode="wait">
            <motion.h1
              key={carouselContent[activeIndex].header}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight font-raleway tracking-tight"
            >
              {carouselContent[activeIndex].header}
            </motion.h1>

            <motion.p
              key={carouselContent[activeIndex].subtext}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-200 text-lg sm:text-xl max-w-xl leading-relaxed"
            >
              {carouselContent[activeIndex].subtext}
            </motion.p>
          </AnimatePresence>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            href="#"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 group text-lg shadow-lg shadow-blue-600/20"
          >
            <span>Learn More</span>
            <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </div>

        <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-8 px-4">
          {carouselContent.map((section, index) => (
            <button
              key={section.navWord}
              onClick={() => handleSectionClick(index)}
              className={`
                relative whitespace-nowrap text-lg sm:text-xl font-bold font-raleway tracking-wider transition-all duration-300
                ${
                  activeIndex === index
                    ? "text-white scale-105"
                    : "text-gray-400 hover:text-white"
                }
              `}
            >
              {section.navWord}
              {activeIndex === index && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-blue-600"
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
