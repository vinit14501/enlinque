import { useState } from "react"
import { FaStar } from "react-icons/fa"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    position: "Founder of Rubik",
    avatar: "https://readymadeui.com/profile_2.webp",
    review:
      "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.",
    rating: 3,
  },
  {
    id: 2,
    name: "Mark Adair",
    position: "Founder of Alpha",
    avatar: "https://readymadeui.com/profile_3.webp",
    review:
      "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.",
    rating: 5,
  },
  {
    id: 3,
    name: "Simon Konecki",
    position: "Founder of Labar",
    avatar: "https://readymadeui.com/profile_4.webp",
    review:
      "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.",
    rating: 4,
  },
]

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="p-4 sm:p-6 rounded-lg bg-white border border-gray-200">
      <div className="flex items-center">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="ml-4">
          <h4 className="text-gray-800 text-sm sm:text-base font-bold">
            {testimonial.name}
          </h4>
          <p className="mt-0.5 text-xs sm:text-sm text-gray-600">
            {testimonial.position}
          </p>
        </div>
      </div>

      <div className="mt-4 sm:mt-6">
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          {testimonial.review}
        </p>
      </div>

      <div className="flex space-x-1 mt-4">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={`w-4 h-4 ${
              index < testimonial.rating ? "text-yellow-500" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
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
    <div className="p-4 sm:p-6 lg:p-12 font-sans bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-4 items-center">
          <div className="col-span-2">
            <h2 className="text-gray-800 text-xl sm:text-2xl font-bold">
              What our happy clients say
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed">
              Discover the experiences of our satisfied customers and their
              journey with us.
            </p>
          </div>

          <div className="flex space-x-4 items-center justify-end">
            <button
              onClick={handlePrevious}
              className="bg-white w-10 h-10 grid place-items-center rounded-full border border-gray-200 hover:bg-gray-100 transition-colors duration-200"
            >
              <IoIosArrowBack className="text-gray-700 w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="bg-gray-800 w-10 h-10 grid place-items-center rounded-full hover:bg-gray-700 transition-colors duration-200"
            >
              <IoIosArrowForward className="text-white w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
          <TestimonialCard testimonial={testimonials[currentIndex]} />
          <TestimonialCard
            testimonial={testimonials[(currentIndex + 1) % testimonials.length]}
          />
          <TestimonialCard
            testimonial={testimonials[(currentIndex + 2) % testimonials.length]}
          />
        </div>
      </div>
    </div>
  )
}
