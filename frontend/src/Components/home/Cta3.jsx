import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Button from "../../common/Button";
import cta from "../../assets/cta3.webp";

const Cta3 = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative w-full h-75 sm:h-87.5 md:h-100 bg-cover bg-center"
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
            <Button icon={BsArrowRight} onClick={() => navigate("/websitedevelopment")}>
              Get Started
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Cta3;
