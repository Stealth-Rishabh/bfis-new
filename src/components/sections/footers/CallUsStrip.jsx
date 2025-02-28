import React from "react";
import { FaPhone } from "react-icons/fa6";

const CallUsStrip = ({ setIsOpen }) => {
  return (
    // Only show on mobile screens
    <div className="fixed bottom-0 left-0 right-0 z-50 block md:hidden">
      <div className="flex">
        {/* Enquire Now Half */}
        <div
          onClick={() => setIsOpen(true)}
          className="flex-1 bg-gradient-to-r from-blue-600 to-blue-500 p-4 text-center text-white font-semibold cursor-pointer hover:bg-blue-700 transition-colors duration-300"
        >
          Enquire Now
        </div>

        {/* Call Us Half */}
        <a
          href="tel:+91-9066790662"
          className="flex-1 bg-red-600 p-4 text-center text-white font-semibold hover:bg-red-700 transition-colors duration-300 flex justify-center items-center gap-2"
        >
          <FaPhone className="text-xl" />
          Call Us
        </a>
      </div>
    </div>
  );
};

export default CallUsStrip;
