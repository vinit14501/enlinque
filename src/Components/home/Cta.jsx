import { motion } from "framer-motion"
import { FaUserTie } from "react-icons/fa"

export default function Cta() {
  return (
    <>
      {/* Option 1: With Background Image */}
      <section
        className="px-4 py-16 md:py-24 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('cta.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Explore Our Fractional CxO Services
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-3 mx-auto"
            >
              <FaUserTie className="text-xl" />
              <span>Get Started Today</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Option 2: With Solid Blue Background */}
      {/* <section className="px-4 py-16 md:py-24 bg-blue-600">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Explore Our Fractional CxO Services
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-3 mx-auto"
            >
              <FaUserTie className="text-xl" />
              <span>Get Started Today</span>
            </motion.button>
          </motion.div>
        </div>
      </section> */}
    </>
  )
}
