import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { useState, useEffect } from "react"
import hero1 from "../../assets/hero1.jpg"

const testimonials = [
  {
    id: 1,
    name: "Leslie Alexander",
    role: "Medical Assistant",
    avatar: hero1,
    review: "This proved to be impossible using concepts of space and time.",
    rating: 4,
    website: "https://example1.com",
  },
  {
    id: 2,
    name: "Savannah Nguyen",
    role: "Nursing Assistant",
    avatar: hero1,
    review: "This proved to be impossible using concepts of space and time.",
    rating: 4,
    website: "https://example2.com",
  },
  {
    id: 3,
    name: "Savannah Nguyen",
    role: "Nursing Assistant",
    avatar: hero1,
    review: "This proved to be impossible using concepts of space and time.",
    rating: 4,
    website: "https://example2.com",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsToShow = 2

  const totalSlides = Math.ceil(testimonials.length / itemsToShow)

  useEffect(() => {
    if (currentIndex >= totalSlides) {
      setCurrentIndex(Math.max(0, totalSlides - 1))
    }
  }, [testimonials.length])

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const getCurrentTestimonials = () => {
    const start = currentIndex * itemsToShow
    const items = testimonials.slice(start, start + itemsToShow)

    if (items.length === 1 && start + itemsToShow > testimonials.length) {
      return { items, isSingle: true }
    }
    return { items, isSingle: false }
  }

  const { items, isSingle } = getCurrentTestimonials()

  return (
    <section className="py-16 px-4 relative">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Clients Say
          </h2>
          <p className="text-gray-600">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics.
          </p>
        </div>

        <div className="relative">
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-400 hover:text-gray-600 transition-all duration-300"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-400 hover:text-gray-600 transition-all duration-300"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>

          <div
            className={`grid ${
              isSingle
                ? "grid-cols-1 max-w-md mx-auto"
                : "grid-cols-1 md:grid-cols-2"
            } gap-8`}
          >
            {items.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex"
              >
                <div className="flex-shrink-0 mr-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-[160px] h-[250px] object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center h-[250px]">
                  <div>
                    <h3 className="font-medium text-gray-900 text-lg">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-500 text-sm mb-2">
                      {testimonial.role}
                    </p>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, index) => (
                        <FaStar
                          key={index}
                          className={`w-4 h-4 ${
                            index < testimonial.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm mb-2">
                      {testimonial.review}
                    </p>
                    <a
                      href={testimonial.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {totalSlides > 1 && (
          <div className="flex justify-center mt-8 gap-2">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-gray-900" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
