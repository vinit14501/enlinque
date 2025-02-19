import { motion } from "framer-motion"
import { FaCheckCircle, FaSync, FaLightbulb, FaHandshake } from "react-icons/fa"
import hero1 from "../../assets/hero1.jpg"

const ValuesSection = () => {
  const valueDetails = [
    {
      icon: FaCheckCircle,
      title: "Reliability",
      description:
        "Consistent and dependable delivery of high-quality services with accuracy and timely completion.",
    },
    {
      icon: FaSync,
      title: "Flexibility",
      description:
        "Adapting seamlessly to changing business needs and market demands with scalable solutions.",
    },
    {
      icon: FaLightbulb,
      title: "Expertise",
      description:
        "Bringing specialized skills and industry knowledge to tackle complex tasks efficiently.",
    },
    {
      icon: FaHandshake,
      title: "Collaboration",
      description:
        "Promoting open communication, transparency, and teamwork for shared goals and success.",
    },
  ]

  return (
    <div className="bg-green-50 min-h-screen flex flex-col items-center py-12">
      <h2 className="text-4xl font-bold text-green-800 mb-12">Our Values</h2>

      <div className="flex flex-col lg:flex-row w-full max-w-5xl px-4 space-y-6 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:w-1/2 overflow-hidden rounded-2xl shadow-xl">
          <img
            src={hero1}
            alt="Company Values"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-6">
          {valueDetails.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md border border-green-100 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
            >
              <value.icon className="text-green-700 h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                {value.title}
              </h3>
              <p className="text-green-900 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ValuesSection
