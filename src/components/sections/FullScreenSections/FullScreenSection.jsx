/* FullScreenSection.jsx */
/* eslint-disable react/prop-types */
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FullScreenCard from "./FullScreenCard";

const FullScreenSection = ({ sections }) => {
  // References to the text sections
  const textBeforeRef = useRef(null);
  const textAfterRef = useRef(null);

  /**
   * useScroll Hook for Text Before Images:
   * - Tracks the scroll progress of the text before the image sections.
   */
  const { scrollYProgress: scrollBefore } = useScroll({
    target: textBeforeRef,
    offset: ["start center", "end center"],
  });

  /**
   * useTransform Hook for Text Before Images:
   * - Maps the scroll progress to opacity values.
   */
  const opacityBefore = useTransform(scrollBefore, [0, 0.5, 1], [0, 1, 0]);

  /**
   * useScroll Hook for Text After Images:
   * - Tracks the scroll progress of the text after the image sections.
   */
  const { scrollYProgress: scrollAfter } = useScroll({
    target: textAfterRef,
    offset: ["start center", "end center"],
  });

  /**
   * useTransform Hook for Text After Images:
   * - Maps the scroll progress to opacity values.
   */
  const opacityAfter = useTransform(scrollAfter, [0, 0.5, 1], [0, 1, 0]);

  return (
    <div className="relative w-full">
      {/* Text Before Images */}
      <div ref={textBeforeRef} className="relative h-[50vh]">
        {/* Fixed Text Overlay */}
        <motion.div
          className="fixed inset-0 flex items-center justify-center pointer-events-none"
          style={{ opacity: opacityBefore, zIndex: 20 }}
        >
          <h1 className="text-red-600 text-3xl md:text-5xl font-bold text-center max-w-[90vw]">
            Shaping Young Minds for a Brighter Tomorrow
          </h1>
        </motion.div>
      </div>

      {/* Sticky Image Sections Container */}
      <div
        className="relative"
        style={{ height: `${sections.length * 100}vh` }}
      >
        {sections.map((section, index) => (
          <section
            key={section.id}
            className="sticky top-0 h-screen flex justify-center items-center"
            style={{
              zIndex: index + 1, // Increment z-index for stacking
            }}
          >
            <FullScreenCard
              backgroundImage={section.backgroundImage}
              heading={section.heading}
              buttonText={section.buttonText}
              onButtonClick={section.onButtonClick}
            />
          </section>
        ))}
      </div>

      {/* Text After Images */}
      <div ref={textAfterRef} className="relative  h-[50vh]">
        {/* Fixed Text Overlay */}
        <motion.div
          className="fixed inset-0 flex items-center justify-center pointer-events-none"
          style={{ opacity: opacityAfter, zIndex: 20 }}
        >
          <h1 className="text-red-600 text-3xl md:text-5xl font-bold text-center  max-w-[90vw]">
            Continuing the Legacy of Academic Excellence
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default FullScreenSection;
