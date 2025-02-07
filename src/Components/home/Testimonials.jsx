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

  const nextTestimonials = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % (testimonials.length - 2))
  }

  const prevTestimonials = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    )
  }

  const visibleTestimonials = testimonials.slice(startIndex, startIndex + 3)

  return (
    <div className="py-16 px-8 font-[sans-serif]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-6 max-lg:max-w-2xl">
          <div className="col-span-2">
            <h2 className="text-black text-2xl font-bold">
              What our happy client say
            </h2>
            <p className="text-sm text-black mt-4 leading-relaxed">
              Veniam proident aute magna anim excepteur et ex consectetur velit
              ullamco veniam minim aute sit. Elit occaecat officia et laboris
              Lorem minim. Officia do aliqua adipisicing ullamco in.
            </p>
          </div>

          <div className="flex space-x-4 items-end justify-end">
            <div
              onClick={prevTestimonials}
              className="bg-gray-200 w-10 h-10 grid items-center justify-center rounded-full rotate-90 shrink-0 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 fill-gray-800 inline"
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
              className="bg-[#0b60a0] w-10 h-10 grid items-center justify-center rounded-full -rotate-90 shrink-0 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 fill-[#fff] inline"
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
        </div>

        <div className="overflow-auto px-10 pr-2 py-2 mt-12">
          <div className="min-w-[1052px] grid grid-cols-3 gap-12">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="max-w-[360px] h-auto py-5 pl-14 pr-4 bg-white border-black border-2 rounded-3xl relative"
              >
                <img
                  src={testimonial.image}
                  className="w-20 h-20 rounded-full absolute -left-10 top-0 bottom-0 my-auto border-2 border-black"
                />

                <div className="flex justify-between items-start">
                  <div>
                    <h6 className="text-black text-[15px] font-bold">
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
                    <FaExternalLinkAlt />
                  </a>
                </div>

                <div className="mt-4">
                  <p className="text-black text-sm leading-relaxed">
                    {testimonial.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
