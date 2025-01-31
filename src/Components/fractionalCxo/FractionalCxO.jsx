import { motion } from "framer-motion"
import hero1 from "../../assets/hero1.jpg"

const services = [
  {
    title: "Chief Technology Officer (CTO)",
    description:
      "Drive technological innovation and digital transformation with our experienced CTOs. We help align technology strategy with business goals, manage tech teams, and implement cutting-edge solutions.",
    image: hero1,
  },
  {
    title: "Chief Marketing Officer (CMO)",
    description:
      "Enhance your market presence and drive growth with strategic marketing leadership. Our CMOs develop comprehensive marketing strategies, build strong brands, and optimize customer acquisition.",
    image: hero1,
  },
  {
    title: "Chief Financial Officer (CFO)",
    description:
      "Optimize your financial strategy and operations with expert CFO guidance. We provide financial planning, risk management, and strategic decision-making support to drive business success.",
    image: hero1,
  },
  {
    title: "Chief Operating Officer (COO)",
    description:
      "Streamline your operations and improve organizational efficiency with seasoned COO leadership. Our COOs optimize business processes, manage resource allocation, and drive operational excellence.",
    image: hero1,
  },
  {
    title: "Chief Product Officer (CPO)",
    description:
      "Transform your product strategy and innovation pipeline with expert product leadership. Our CPOs drive product vision, manage development roadmaps, and ensure market-product fit.",
    image: hero1,
  },
]

export default function FractionalCxO() {
  return (
    <div className="font-sans bg-white">
      {/* Hero section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative px-4 py-12 lg:py-16 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
        }}
      >
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <svg
            className="absolute w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 560"
          >
            <path
              fill="rgba(255, 255, 255, 0.05)"
              d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
            <path
              fill="rgba(255, 255, 255, 0.1)"
              d="M0,64L48,85.3C96,107,192,149,288,160C384,171,480,149,576,149.3C672,149,768,171,864,186.7C960,203,1056,213,1152,192C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* Content */}
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Fractional CxO Services
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
            Access world-class executive leadership without the full-time
            commitment. Our fractional CxOs bring decades of experience to
            elevate your business.
          </p>
        </div>
      </motion.div>

      {/* Services Sections */}
      <div className="px-4 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="mb-16 last:mb-0 lg:mb-24"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {index % 2 === 0 ? (
                  <>
                    <motion.div
                      className="h-64 w-full rounded-lg overflow-hidden shadow-lg"
                      whileHover={{ scale: 1.02 }}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="object-cover w-full h-full"
                      />
                    </motion.div>
                    <div className="text-left">
                      <h2 className="text-gray-900 text-2xl font-bold mb-4">
                        {service.title}
                      </h2>
                      <p className="text-base text-gray-600">
                        {service.description}
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="button"
                        className="mt-6 px-6 py-2.5 rounded-full text-white text-sm font-medium bg-blue-600 hover:bg-blue-700 transition-colors duration-200 shadow-md"
                      >
                        Learn More
                      </motion.button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-left">
                      <h2 className="text-gray-900 text-2xl font-bold mb-4">
                        {service.title}
                      </h2>
                      <p className="text-base text-gray-600">
                        {service.description}
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="button"
                        className="mt-6 px-6 py-2.5 rounded-full text-white text-sm font-medium bg-blue-600 hover:bg-blue-700 transition-colors duration-200 shadow-md"
                      >
                        Learn More
                      </motion.button>
                    </div>
                    <motion.div
                      className="h-64 w-full rounded-lg overflow-hidden shadow-lg"
                      whileHover={{ scale: 1.02 }}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="object-cover w-full h-full"
                      />
                    </motion.div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
