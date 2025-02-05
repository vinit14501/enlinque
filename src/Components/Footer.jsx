import { motion } from "framer-motion"
import { FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
// import logo2 from "../assets/logo2.png"

const Footer = () => {
  const services = [
    "Fractional CxO",
    "IT Consulting",
    "Digital Marketing",
    "E-Commerce",
    "Digital Transformation",
    "Agile Implementation",
  ]

  const resources = [
    "About",
    "Privacy Policy",
    "terms of service",
    "Cookie Policy",
  ]

  const animations = {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: 0.6,
          ease: "easeOut",
          staggerChildren: 0.15,
        },
      },
    },
    item: {
      hidden: { opacity: 0, y: 15 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.4,
          ease: "easeOut",
        },
      },
    },
  }

  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={animations.container}
      className="bg-[#000048] text-white"
    >
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-8">
          {/* Logo and Tagline Section */}
          <motion.div
            variants={animations.item}
            className="lg:col-span-4 space-y-2"
          >
            <div className="w-48">
              {/* <img
                src={logo2}
                alt="Enlinque Logo"
                className="h-12 object-contain"
              /> */}<h2 className="">Enlinque Consulting LLC</h2>
            </div>
            <p className="text-white text-lg">Where speed meets strategy</p>
          </motion.div>

          {/* Right side sections */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8">
            {/* Services */}
            <motion.div
              variants={animations.item}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white">Services</h3>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <motion.li
                    key={index}
                    variants={animations.item}
                    className="text-white hover:text-blue-400 cursor-pointer 
                             transition-colors duration-200"
                  >
                    {service}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              variants={animations.item}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white">Company</h3>
              <ul className="space-y-2">
                {resources.map((resource, index) => (
                  <motion.li
                    key={index}
                    variants={animations.item}
                    className="text-white hover:text-blue-400 cursor-pointer 
                             transition-colors duration-200"
                  >
                    {resource}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              variants={animations.item}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white">Contact</h3>
              <ul className="space-y-3">
                <motion.li
                  variants={animations.item}
                  className="flex items-center space-x-3"
                >
                  <MdEmail className="text-white text-xl flex-shrink-0" />
                  <a
                    href="mailto:contact@enlinque.com"
                    className="text-white hover:text-blue-400 transition-colors duration-200"
                  >
                    contact@enlinque.com
                  </a>
                </motion.li>
                <motion.li
                  variants={animations.item}
                  className="flex items-center space-x-3"
                >
                  <FaLinkedin className="text-white text-xl flex-shrink-0" />
                  <a
                    href="#"
                    className="text-white hover:text-blue-400 transition-colors duration-200"
                  >
                    LinkedIn
                  </a>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          variants={animations.item}
          className="mt-16 pt-8 border-t border-slate-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Enlinque. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
