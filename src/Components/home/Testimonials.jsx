import { useState } from "react"
import { FaQuoteRight } from "react-icons/fa"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    company: "TechForward Solutions",
    avatar: "/api/placeholder/80/80",
    review:
      "The enterprise solution exceeded our expectations in every metric. The robust architecture and innovative approach resulted in a 40% improvement in system performance and significant cost savings.",
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "InnovateX Systems",
    avatar: "/api/placeholder/80/80",
    review:
      "The implementation was flawless. Their expertise in scalable architecture and commitment to security standards made them the ideal partner for our digital transformation journey.",
  },
  {
    id: 3,
    name: "Emma Thompson",
    company: "DataSphere Analytics",
    avatar: "/api/placeholder/80/80",
    review:
      "Their enterprise-grade solution delivered exceptional results. The attention to compliance requirements and performance optimization has transformed our data processing capabilities.",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how our innovative solutions have transformed businesses
            across various industries
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
            <button
              onClick={handlePrevious}
              className="bg-white shadow-lg p-3 rounded-full hover:bg-gray-100 transition"
            >
              <IoIosArrowBack className="text-gray-700" />
            </button>
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
            <button
              onClick={handleNext}
              className="bg-white shadow-lg p-3 rounded-full hover:bg-gray-100 transition"
            >
              <IoIosArrowForward className="text-gray-700" />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {[0, 1, 2].map((offset) => {
              const index = (currentIndex + offset) % testimonials.length
              const testimonial = testimonials[index]
              return (
                <div
                  key={testimonial.id}
                  className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
                    offset === 1 ? "scale-105 shadow-xl" : "hover:shadow-lg"
                  }`}
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full mr-4 border-2 border-gray-100"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-500 text-sm">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    <blockquote className="text-gray-700 text-base relative pl-4 border-l-4 border-blue-500">
                      <FaQuoteRight className="absolute -top-2 left-0 text-blue-200 w-5 h-5" />
                      {testimonial.review}
                    </blockquote>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
