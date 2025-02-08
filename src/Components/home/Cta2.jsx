import { motion } from "framer-motion"
import { BsArrowRight } from "react-icons/bs"

const Cta2 = () => {
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
      className="w-full py-12 sm:py-16 md:py-20 bg-[#0b60a0]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-raleway text-white mb-4 sm:mb-6"
        >
          Ready to Transform Your Ideas Into Reality?
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-white/90 font-raleway mb-6 sm:mb-8 max-w-2xl mx-auto"
        >
          Let&apos;s create something amazing together. Our team is just one
          click away from turning your vision into success.
        </motion.p>

        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-semibold font-raleway text-[#000048] bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 gap-2"
          onClick={() => {
            console.log("Navigate to contact page")
          }}
        >
          Get in Touch
          <BsArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.button>
      </div>
    </motion.section>
  )
}

export default Cta2
