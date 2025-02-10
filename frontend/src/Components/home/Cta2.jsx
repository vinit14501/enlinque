import { motion } from "framer-motion"
import { BsArrowRight } from "react-icons/bs"
import { useNavigate } from "react-router-dom"

const Cta2 = () => {
  const navigate = useNavigate()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full py-8 sm:py-10 md:py-12 bg-[#0b60a0] sticky top-0 z-50"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-raleway text-white mb-3 sm:mb-4"
        >
          Ready to Transform Your Ideas Into Reality?
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base md:text-lg text-white/90 font-raleway mb-4 sm:mb-5 max-w-2xl mx-auto"
        >
          Let&apos;s create something amazing together. Our team is just one
          click away from turning your vision into success.
        </motion.p>

        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-semibold font-raleway text-[#000048] bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 gap-2"
          onClick={() => navigate("/contact")}
        >
          Get in Touch
          <BsArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.button>
      </div>
    </motion.section>
  )
}

export default Cta2
