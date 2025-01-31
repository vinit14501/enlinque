import { useState } from "react"
import { motion } from "framer-motion"

const FAQItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <div
        className="py-6 cursor-pointer"
        onClick={onToggle}
      >
        <div className="flex items-start">
          <div className="flex-1">
            <div className="flex justify-between items-center group">
              <h3 className="text-lg font-medium text-gray-900 pr-4 group-hover:text-blue-600 transition-colors duration-200">
                {title}
              </h3>
              <button
                className="text-blue-500 transition-transform duration-200 w-6 h-6 flex items-center justify-center"
                aria-label={isOpen ? "Close answer" : "Show answer"}
              >
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ease-in-out ${
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
                marginTop: isOpen ? "1rem" : "0",
              }}
            >
              <div className="text-gray-600 text-base leading-relaxed">
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
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative px-4 py-12 lg:py-16 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #2563eb 0%, #60a5fa 100%)",
        }}
      >
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <svg
            className="absolute right-0 w-full h-full"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="white"
            />
            <circle
              cx="300"
              cy="300"
              r="120"
              fill="white"
            />
            <circle
              cx="350"
              cy="50"
              r="50"
              fill="white"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
            Find answers to common questions about our services, process, and
            how we can help your business grow. Can't find what you're looking
            for? Contact us directly.
          </p>
        </div>
      </motion.div>

      {/* Main content */}
      <main className="flex-grow bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
      </main>
    </div>
  )
}
