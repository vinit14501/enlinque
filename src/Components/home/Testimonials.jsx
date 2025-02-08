import React, { useState } from "react"
import { FaExternalLinkAlt } from "react-icons/fa"

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    company: "Rubik",
    website: "https://rubik.com",
    image: "https://readymadeui.com/team-2.webp",
    quote:
      "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.",
  },
  {
    id: 2,
    name: "Mark Adair",
    company: "Alpha",
    website: "https://alpha.com",
    image: "https://readymadeui.com/team-5.webp",
    quote:
      "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.",
  },
  {
    id: 3,
    name: "Simon Konecki",
    company: "Labar",
    website: "https://labar.com",
    image: "https://readymadeui.com/team-4.webp",
    quote:
      "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.",
  },
  {
    id: 4,
    name: "Emily Johnson",
    company: "TechCorp",
    website: "https://techcorp.com",
    image: "https://readymadeui.com/team-1.webp",
    quote:
      "Exceptional service that exceeded my expectations. The team was professional and the results were outstanding.",
  },
]

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0)

  const getVisibleCount = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) return 1 // Mobile
      if (window.innerWidth < 1024) return 2 // Tablet
      return 3 // Desktop
    }
    return 3 // Default for SSR
  }

  const [visibleCount, setVisibleCount] = useState(getVisibleCount())

  React.useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextTestimonials = () => {
    setStartIndex(
      (prevIndex) =>
        (prevIndex + 1) % (testimonials.length - (visibleCount - 1))
    )
  }

  const prevTestimonials = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - visibleCount : prevIndex - 1
    )
  }

  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + visibleCount
  )

  return (
    <div className="py-8 md:py-16 px-4 md:px-8 font-[sans-serif]">
      <div className="max-w-6xl mx-auto">
        {/* Centered title and description */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
          <h2 className="text-[#000048] text-xl md:text-2xl font-bold">
            What our happy client say
          </h2>
          <p className="text-sm text-black mt-3 md:mt-4 leading-relaxed px-4 md:px-0">
            Veniam proident aute magna anim excepteur et ex consectetur velit
            ullamco veniam minim aute sit. Elit occaecat officia et laboris
            Lorem minim. Officia do aliqua adipisicing ullamco in.
          </p>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-center md:justify-end space-x-4 mb-6 md:mb-8">
          <div
            onClick={prevTestimonials}
            className="bg-[#000048] w-8 md:w-10 h-8 md:h-10 grid items-center justify-center rounded-full rotate-90 shrink-0 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-2 md:w-3 fill-[#ffffff] inline"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                clipRule="evenodd"
                data-original="#000000"
              ></path>
            </svg>
          </div>
          <div
            onClick={nextTestimonials}
            className="bg-[#0b60a0] w-8 md:w-10 h-8 md:h-10 grid items-center justify-center rounded-full -rotate-90 shrink-0 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-2 md:w-3 fill-[#ffffff] inline"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                clipRule="evenodd"
                data-original="#000000"
              ></path>
            </svg>
          </div>
        </div>

        {/* Testimonials */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="px-4 md:px-10 py-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
              {visibleTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="relative bg-white border-black border-2 rounded-lg max-w-xl mx-auto"
                >
                  <div className="py-5 pl-14 md:pl-14 pr-4">
                    <img
                      src={testimonial.image}
                      className="w-16 md:w-20 h-16 md:h-20 rounded-full absolute -left-8 md:-left-10 top-0 bottom-0 my-auto border-2 border-black"
                      alt={testimonial.name}
                    />

                    <div className="flex justify-between items-start">
                      <div>
                        <h6 className="text-black text-sm md:text-[15px] font-bold">
                          {testimonial.name}
                        </h6>
                        <p className="mt-1 text-xs text-black">
                          Founder of {testimonial.company}
                        </p>
                      </div>
                      <a
                        href={testimonial.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0b60a0] hover:text-[#000048]"
                      >
                        <FaExternalLinkAlt className="w-3 md:w-4 h-3 md:h-4" />
                      </a>
                    </div>

                    <div className="mt-4">
                      <p className="text-black text-xs md:text-sm leading-relaxed">
                        {testimonial.quote}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
