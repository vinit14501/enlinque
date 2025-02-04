import React from "react"
import { motion } from "framer-motion"
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

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
    // "Partners",
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

  const socialIcons = [{ icon: FaLinkedin, link: "#", label: "LinkedIn" }]

  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={animations.container}
      className="bg-[#000048] text-white"
    >
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {/* Company Overview */}
          <motion.div
            variants={animations.item}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Enlinque Consulting
            </h2>
            <p className="text-white leading-relaxed">
              {/* Empowering enterprises with cutting-edge technology solutions and
              strategic consulting services. We transform challenges into
              opportunities for growth and innovation. */}
              Where speed meets strategy
            </p>
            <div className="flex items-center space-x-4 pt-2">
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            variants={animations.item}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  variants={animations.item}
                  className="text-white hover:text-blue-400 cursor-pointer 
                           transition-colors duration-200 flex items-center space-x-2"
                >
                  <div className="w-1 h-1 bg-blue-500 rounded-full" />
                  <span>{service}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            variants={animations.item}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <motion.li
                  key={index}
                  variants={animations.item}
                  className="text-white hover:text-blue-400 cursor-pointer 
                           transition-colors duration-200 flex items-center space-x-2"
                >
                  <div className="w-1 h-1 bg-blue-500 rounded-full" />
                  <span>{resource}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={animations.item}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <ul className="space-y-4">
              {/* <motion.li
                variants={animations.item}
                className="flex items-center space-x-3"
              >
                <MdPhone className="text-blue-400 text-xl flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-white hover:text-blue-400 transition-colors duration-200"
                >
                  +1 (234) 567-890
                </a>
              </motion.li> */}
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
              {/* <motion.li
                variants={animations.item}
                className="flex items-start space-x-3"
              >
                <MdLocationOn className="text-blue-400 text-xl mt-1 flex-shrink-0" />
                <address className="not-italic text-white leading-relaxed">
                  One World Trade Center
                  <br />
                  285 Fulton Street
                  <br />
                  New York, NY 10007
                </address>
              </motion.li> */}
            </ul>
          </motion.div>
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
            {/* <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </div> */}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
