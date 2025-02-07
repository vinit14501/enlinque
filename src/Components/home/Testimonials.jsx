import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa"
// import { BsDot } from "react-icons/bs"
import hero1 from "../../assets/hero1.jpg"

const testimonialData = [
  {
    id: 1,
    name: "Michael",
    role: "MD's Manufacturing",
    company: "ABC Rentals",
    image: "/api/placeholder/400/400",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.",
  },
  {
    id: 2,
    name: "Diane",
    role: "Marketing Director",
    company: "XYZ Corp",
    image: "/api/placeholder/400/400",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
  },
  {
    id: 3,
    name: "Allison",
    role: "Grand Party Rental",
    company: "Event Solutions",
    image: "/api/placeholder/400/400",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.",
  },
  {
    id: 4,
    name: "Allison",
    role: "Grand Party Rental",
    company: "Event Solutions",
    image: "/api/placeholder/400/400",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.",
  },
]

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Changed from 640 to 768 for better breakpoint
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    setDirection(1)
    setStartIndex((prev) => (prev + 1) % testimonialData.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setStartIndex(
      (prev) => (prev - 1 + testimonialData.length) % testimonialData.length
    )
  }

  const getVisibleTestimonials = () => {
    const visibleItems = []
    for (let i = 0; i < itemsPerView; i++) {
      const index = (startIndex + i) % testimonialData.length
      visibleItems.push(testimonialData[index])
    }
    return visibleItems
  }

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
    }),
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${hero1})` }}
    >
      <div className="max-w-7xl mx-auto w-full bg-[#0b60a0] rounded-xl p-4 md:p-6 lg:p-8 relative">
        <div className="absolute -top-8 left-8">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-[#000048] rounded-full flex items-center justify-center">
            <FaQuoteLeft className="text-white text-2xl md:text-3xl" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start pt-6">
          {/* Left Content */}
          <div className="lg:col-span-4 space-y-4 text-center lg:text-left mb-6 lg:mb-0">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">
              Connect with other members
            </h2>
            <p className="text-white/80 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
          </div>

          {/* Right Testimonials */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <AnimatePresence
                mode="wait"
                custom={direction}
              >
                {getVisibleTestimonials().map((testimonial, index) => (
                  <motion.div
                    key={`${testimonial.id}-${startIndex}-${index}`}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                    className={`bg-white rounded-lg p-4 h-full ${
                      itemsPerView === 1 ? "mx-auto w-full max-w-md" : ""
                    }`}
                  >
                    <div className="flex flex-col items-center mb-4">
                      <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden mb-3">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <h3 className="font-semibold text-[#000048] text-lg md:text-xl">
                          {testimonial.name}
                        </h3>
                        <p className="text-[#0b60a0] text-sm">
                          {testimonial.role}
                        </p>
                        <p className="text-[#000048] text-sm">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <div className="mb-3">
                      <FaQuoteLeft className="text-[#0b60a0] text-xl" />
                    </div>
                    <p className="text-[#000048]/80 text-sm md:text-base leading-relaxed">
                      {testimonial.text}
                    </p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="flex justify-between items-center mt-6">
              <div className="flex gap-3">
                <button
                  onClick={prevSlide}
                  className="bg-[#000048] p-2 w-10 h-10 flex items-center justify-center text-white hover:opacity-90 transition-opacity rounded-lg"
                >
                  <FaChevronLeft className="text-lg" />
                </button>
                <button
                  onClick={nextSlide}
                  className="bg-[#000048] p-2 w-10 h-10 flex items-center justify-center text-white hover:opacity-90 transition-opacity rounded-lg"
                >
                  <FaChevronRight className="text-lg" />
                </button>
              </div>

              {/* <div className="flex items-center gap-1">
                {testimonialData.map((_, index) => (
                  <BsDot
                    key={index}
                    className={`text-3xl cursor-pointer ${
                      startIndex === index ? "text-white" : "text-white/50"
                    }`}
                    onClick={() => {
                      setDirection(index > startIndex ? 1 : -1)
                      setStartIndex(index)
                    }}
                  />
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
