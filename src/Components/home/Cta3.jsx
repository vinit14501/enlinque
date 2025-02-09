import { motion } from "framer-motion"
import { FaArrowRight } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import cta from "../../assets/cta3.jpg"

const Cta3 = () => {
  const navigate = useNavigate()

  return (
    <div
      className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] bg-cover bg-center"
      style={{ backgroundImage: `url(${cta})` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute bottom-0 left-0 right-0 flex justify-center"
      >
        <div className="w-[80%] sm:w-[92%] md:w-[85%] bg-[#000048]/80 backdrop-blur-md p-4 sm:p-6 md:p-8 shadow-lg">
          <div className="text-left text-white">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-raleway mb-2 sm:mb-3">
              Building Websites with Purpose and Performance
            </h2>
            <p className="text-sm sm:text-base md:text-lg font-raleway mb-3 sm:mb-4 opacity-80">
              That Elevate Brands and Engage Audiences
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white font-semibold font-raleway py-2 px-4 sm:px-5 rounded-lg inline-flex items-center gap-1 sm:gap-2 text-sm sm:text-base transition-all duration-300"
              onClick={() => navigate("/websitedevelopment")}
            >
              Get Started <FaArrowRight className="text-base sm:text-base" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Cta3
