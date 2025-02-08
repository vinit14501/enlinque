import { useState, useEffect } from "react"
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"

export default function Quotes() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="flex items-center justify-center min-h-[40vh] sm:min-h-[45vh] md:min-h-[50vh] bg-[#000048] font-['lora']">
      <div className="w-full max-w-xl sm:max-w-2xl px-4 sm:px-6 py-8 sm:py-10 md:py-12">
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
          <div className="border-t border-white mb-3 sm:mb-4 transition-all duration-1000"></div>
          <div className="relative px-8 sm:px-10 md:px-12">
            <FaQuoteLeft className="absolute -left-2 sm:-left-4 md:-left-8 top-0 text-white text-xl sm:text-2xl md:text-3xl" />
            <FaQuoteRight className="absolute -right-2 sm:-right-4 md:-right-8 top-0 text-white text-xl sm:text-2xl md:text-3xl" />
            <p
              className="
                text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
                text-center italic
                text-white mb-3 sm:mb-4
              "
            >
              &quot;The way to get started is to quit talking and begin
              doing.&quot;
            </p>
          </div>
          <p
            className="
              text-sm sm:text-base md:text-lg lg:text-xl
              text-center text-white italic
            "
          >
            – Walt Disney
          </p>
          <div className="border-b border-gray-400 mt-3 sm:mt-4 transition-all duration-1000"></div>
        </div>
      </div>
    </div>
  )
}
