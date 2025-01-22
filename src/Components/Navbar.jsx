import { useState } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "FAQ", to: "/faq" },
    { label: "Contact", to: "/contact" },
    { label: "FractionalCxO", to: "/fractionalCxO" },
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const sidebarVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "tween",
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  }

  const linkVariants = {
    closed: {
      opacity: 0,
      x: 50,
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  }

  return (
    <>
      {/* Fixed Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center flex-shrink-0"
          >
            <img
              src="logo.png"
              alt="Company Logo"
              className="h-8 sm:h-10 lg:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="
                  text-gray-800 font-medium hover:text-blue-600 
                  transition-colors duration-300 
                  group relative text-base tracking-wide
                  whitespace-nowrap
                "
              >
                {item.label}
                <span
                  className="
                    absolute -bottom-1 left-0 w-0 h-0.5 
                    bg-blue-600 transition-all duration-300 
                    group-hover:w-full
                  "
                ></span>
              </Link>
            ))}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="
                px-5 py-2.5 bg-blue-600 text-white 
                rounded-lg text-base font-medium 
                hover:bg-blue-700 transition-colors duration-300
                whitespace-nowrap ml-4 shadow-lg shadow-blue-600/20
              "
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none"
          >
            <FaBars
              size={24}
              className="text-gray-800"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay and Content */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black bg-opacity-50 z-[60]"
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-white shadow-xl z-[70]"
            >
              {/* Close Button */}
              <div className="flex justify-end p-4">
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none"
                >
                  <FaTimes
                    size={24}
                    className="text-gray-800"
                  />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <div className="px-4 py-2">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={toggleMenu}
                    className="block py-3 px-4 text-lg font-medium text-gray-800 hover:bg-gray-50 rounded-lg"
                  >
                    {item.label}
                  </Link>
                ))}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="
                    w-full mt-4 py-3 bg-blue-600 text-white 
                    rounded-lg font-medium hover:bg-blue-700 
                    transition-colors duration-300
                    shadow-lg shadow-blue-600/20
                  "
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
