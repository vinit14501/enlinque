import { useState } from "react"

const FAQItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <div
        className="py-3 sm:py-4 cursor-pointer"
        onClick={onToggle}
      >
        <div className="flex items-start">
          <div className="flex-1">
            <div className="flex justify-between items-center group">
              <h3 className="text-base sm:text-lg font-medium font-raleway text-black pr-3 sm:pr-4 group-hover:text-[#0b60a0] transition-colors duration-200">
                {title}
              </h3>
              <button
                className="text-[#0b60a0] transition-transform duration-200 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center"
                aria-label={isOpen ? "Close answer" : "Show answer"}
              >
                <svg
                  className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ease-in-out ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out`}
              style={{
                maxHeight: isOpen ? "1000px" : "0",
                opacity: isOpen ? 1 : 0,
                marginTop: isOpen ? "0.75rem" : "0",
              }}
            >
              <div className="text-black text-sm sm:text-base leading-relaxed">
                {content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqData = [
    {
      title: "What services does Enlinque offer?",
      content:
        "Enlinque provides IT consulting, marketing consulting, e-commerce solutions, speed-to-market solutions tailored for startups and businesses in various industries to name a few.",
    },
    {
      title: "Do you only work with startups?",
      content:
        "No, while we specialize in helping startups and provide fractional CxO services, we also work with businesses of all sizes and industries to address their IT and marketing needs.",
    },
    {
      title:
        "Where are you located, and do you work with international clients?",
      content:
        "Enlinque is headquartered in Pittsburgh, PA, USA, and partners with clients worldwide, ensuring smooth communication and effective collaboration across borders.",
    },
    {
      title:
        "Can you help us choose the right technology stack for our startup?",
      content:
        "Yes, we analyze your business needs and recommend the most suitable, scalable, and cost-effective technology stack to support your growth.",
    },
    {
      title: "What marketing consulting services do you provide?",
      content:
        "We offer comprehensive marketing consulting, including growth strategy development, ROI-focused campaigns, content marketing, SEO, digital advertising, and performance analytics. Our goal is to build and execute tailored strategies that drive measurable results, such as increased traffic, conversions, and customer retention.",
    },
    {
      title: "How does your consulting process work?",
      content:
        "We follow a proven success path: Pinpoint, Prioritize, Plan, Propel, and Perfect. This ensures clarity, alignment, and tangible results at every stage.",
    },
    {
      title: "What industries do you specialize in?",
      content:
        "We have experience working with e-commerce, technology, healthcare, and various other industries, but we adapt to the needs of any business.",
    },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index)
  }

  return (
    <div className="bg-white py-8 sm:py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-3xl md:text-3xl font-bold font-raleway text-[#000048] mb-3 sm:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-lg md:text-lg text-black max-w-2xl font-raleway mx-auto">
            Find answers to common questions about our services, process, and
            how we can help your business grow.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="divide-y divide-gray-200 border-b border-gray-200">
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                title={faq.title}
                content={faq.content}
                isOpen={openIndex === index}
                onToggle={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
