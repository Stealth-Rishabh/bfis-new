import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Show button when page is scrolled up to given distance
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", toggleVisibility);

    // Clean up function
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []); // Empty dependency array

  return (
    <>
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-16 md:bottom-4 right-3 w-12.5 h-12.5 rounded-full bg-primary text-cream-foreground flex justify-center items-center border-[3px] border-white cursor-pointer z-50 hover:bg-primary/90 transition-all duration-300"
        >
          <FaArrowUp />
        </div>
      )}
    </>
  );
};

export default ScrollUp;
