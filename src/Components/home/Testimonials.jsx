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

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <div
      className={`p-8 bg-white rounded-xl transition-all duration-300 ${
        isActive
          ? "ring-1 ring-indigo-100 shadow-xl"
          : "shadow-sm hover:shadow-md border border-gray-100"
      }`}
    >
      <div className="space-y-8">
        <div className="flex items-center space-x-4">
          <img
            src={testimonial.avatar}
            alt={`${testimonial.name}`}
            className="w-16 h-16 rounded-full object-cover border-2 border-indigo-50"
          />
          <div>
            <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
            <p className="text-indigo-600 text-sm">{testimonial.company}</p>
          </div>
        </div>

        <blockquote className="relative">
          <FaQuoteRight className="absolute -top-4 -left-3 w-8 h-8 text-indigo-50" />
          <p className="text-gray-700 leading-relaxed pl-4 text-lg">
            {testimonial.review}
          </p>
        </blockquote>
      </div>
    </div>
  )
}

const NavigationButton = ({ onClick, children, isNext }) => {
  return (
    <button
      onClick={onClick}
      className={`group w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 
        ${
          isNext
            ? "bg-indigo-600 hover:bg-indigo-700 text-white"
            : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200"
        }
        focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          isNext ? "focus:ring-indigo-500" : "focus:ring-gray-500"
        }`}
      aria-label={`Show ${isNext ? "next" : "previous"} testimonial`}
    >
      {children}
    </button>
  )
}

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
    <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end space-y-8 lg:space-y-0 mb-16">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-2 bg-indigo-50 rounded-full mb-6">
              <span className="text-indigo-600 font-medium text-sm">
                Client Success Stories
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-gray-600">
              See how our solutions have transformed businesses worldwide
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <NavigationButton onClick={handlePrevious}>
              <IoIosArrowBack className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            </NavigationButton>
            <NavigationButton
              onClick={handleNext}
              isNext
            >
              <IoIosArrowForward className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </NavigationButton>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {[0, 1, 2].map((offset) => {
            const index = (currentIndex + offset) % testimonials.length
            return (
              <TestimonialCard
                key={testimonials[index].id}
                testimonial={testimonials[index]}
                isActive={offset === 0}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
