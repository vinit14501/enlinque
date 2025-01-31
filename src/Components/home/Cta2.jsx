import React from "react"
import { motion } from "framer-motion"
import { BsArrowRight } from "react-icons/bs" // Using Bootstrap icons from react-icons

const Cta2 = () => {
  /* Background image version (commented out as requested)
  const styles = {
    backgroundImage: "url('/api/placeholder/1920/1080')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  */

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
      className="w-full py-20 bg-blue-600"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
        >
          Ready to Transform Your Ideas Into Reality?
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
        >
          Let's create something amazing together. Our team is just one click
          away from turning your vision into success.
        </motion.p>

        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
          onClick={() => {
            console.log("Navigate to contact page")
          }}
        >
          Get in Touch
          <BsArrowRight className="ml-2 w-5 h-5" />
        </motion.button>
      </div>
    </motion.section>
  )
}

export default Cta2
