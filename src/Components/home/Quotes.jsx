import { useState, useEffect } from "react"
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"

export default function Quotes() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="flex items-center justify-center min-h-[50vh] bg-blue-50">
      <div className="w-full max-w-2xl px-6">
        <div
          className={`
            transition-all duration-1000 ease-out
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }
          `}
        >
          <div className="border-t border-gray-400 mb-4 transition-all duration-1000"></div>
          <div className="relative">
            <FaQuoteLeft className="absolute -left-8 top-0 text-gray-600 text-3xl" />
            <FaQuoteRight className="absolute -right-8 top-0 text-gray-600 text-3xl" />
            <p
              className="
                text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                italic text-center 
                text-gray-800 mb-4
                font-['Playfair_Display','Merriweather']
              "
            >
              &quot;The future belongs to those who prepare for it today.&quot;
            </p>
          </div>
          <p
            className="
              text-base sm:text-lg md:text-xl 
              text-center text-gray-700
              font-sans
            "
          >
            – Malcolm X
          </p>
          <div className="border-b border-gray-400 mt-4 transition-all duration-1000"></div>
        </div>
      </div>
    </div>
  )
}
