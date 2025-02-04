import React from "react"
import { motion } from "framer-motion"
import { FaArrowRight } from "react-icons/fa"
import cta from "../../assets/cta.jpg"

const Cta3 = () => {
  return (
    <div
      className="relative w-full h-[400px] bg-cover bg-center"
      style={{ backgroundImage: `url(${cta})` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute bottom-0 left-0 right-0 flex justify-center"
      >
        <div className="w-11/12 md:w-3/4 bg-[#000048]/80 backdrop-blur-md p-5 shadow-lg">
          <div className="text-left text-white">
            <h2 className="text-xl md:text-3xl font-bold mb-2">
              Transform Your Experience
            </h2>
            <p className="text-sm md:text-md mb-3 opacity-80">
              Discover innovative solutions that drive success.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full inline-flex items-center transition-all duration-300 ease-in-out">
              Get Started <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Cta3
