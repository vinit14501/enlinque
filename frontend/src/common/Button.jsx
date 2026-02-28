import { motion } from "framer-motion"
import PropTypes from "prop-types"

const VARIANTS = {
  primary: "bg-blue-600 text-white",
  secondary: "bg-white text-[#000048]",
}

export default function Button({
  children,
  variant = "primary",
  icon: Icon,
  iconPosition = "right",
  loading = false,
  loadingText,
  type = "button",
  className = "",
  disabled,
  ...rest
}) {
  const isDisabled = disabled || loading

  return (
    <motion.button
      type={type}
      disabled={isDisabled}
      whileHover={{ scale: isDisabled ? 1 : 1.05 }}
      whileTap={{ scale: isDisabled ? 1 : 0.95 }}
      className={`inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${VARIANTS[variant]} ${className}`}
      {...rest}
    >
      {iconPosition === "left" && Icon && (
        <Icon className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0${loading ? " animate-pulse" : ""}`} />
      )}
      <span>{loading && loadingText ? loadingText : children}</span>
      {iconPosition === "right" && Icon && (
        <Icon className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0${loading ? " animate-pulse" : ""}`} />
      )}
    </motion.button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  icon: PropTypes.elementType,
  iconPosition: PropTypes.oneOf(["left", "right"]),
  loading: PropTypes.bool,
  loadingText: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
}
