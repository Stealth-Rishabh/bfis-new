import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaLeaf, FaBook, FaChalkboardTeacher } from "react-icons/fa"; // Import icons
// import heroImage from "@/assets/images/webp/class.webp"; // Updated image path
import heroImage from "@/assets/images/class_t.jpg"; // Updated image path

export default function PicLayout() {
  // References for the image and content container to observe when they come into view
  const contentRef = useRef(null);
  const navigate = useNavigate();

  // Detect when the elements are in view
  const isContentInView = useInView(contentRef, { triggerOnce: true });

  return (
    <div className="flex justify-center items-center container max-w-screen-2xl">
      <div className="bg-red-600 p-6 md:p-12 flex flex-col md:flex-row items-center text-center md:text-left rounded-lg shadow-xl py-6 md:py-16 max-w-screen-xl">
        {/* Hero Image Section - Fade In */}
        <motion.div
          className="md:w-1/2 mb-6 md:mb-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isContentInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={heroImage}
            alt="Inspiring learning environment"
            className="w-full h-auto object-cover rounded-lg shadow-2xl"
          />
        </motion.div>

        {/* Content Section */}
        <div
          ref={contentRef}
          className="md:w-1/2 md:pl-12 text-white space-y-6"
        >
          {/* Heading */}
          <motion.h2
            className="text-3xl md:text-5xl font-bold font-roboto"
            initial={{ opacity: 0, y: 20 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          ></motion.h2>

          {/* Key Points with Icons */}
          <motion.div
            className="space-y-4 text-sm md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center space-x-3">
              <FaLeaf className="text-white text-2xl" />
              <span>Personalized Education for Every Child</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaBook className="text-white text-2xl" />
              <span>Comprehensive Curriculum & Beyond</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaChalkboardTeacher className="text-white text-2xl" />
              <span>Guidance from Experienced Educators</span>
            </div>
          </motion.div>

          {/* Call to Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <button
              onClick={() => navigate("/program")}
              className="inline-block bg-blue-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-blue-500 transition-colors duration-200"
            >
              Learn More About Our Programs
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
