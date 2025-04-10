"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactFormModal from "./ContactFormModal";
import { X } from "lucide-react";
import { useLocation } from "react-router-dom";

const EnquiryPopup = ({ setIsOpen, isOpen }) => {
  const location = useLocation();
  const restrictedPaths = ["/login", "/admin", "/thankyou", "/contact-us"];

  // If current path is in restricted paths or popup is not open, don't render anything
  if (restrictedPaths.includes(location.pathname) || !isOpen) {
    return null;
  }

  return (
    <AnimatePresence>
      <div className="block">
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "tween", duration: 0.3 }}
          className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95%] sm:w-[450px] md:w-[300px] bg-gray-900 shadow-xl z-50 rounded-lg"
        >
          <div className="relative p-3 sm:p-6">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-2 top-2 p-1.5 hover:bg-gray-800 rounded-full text-white"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <h2 className="text-lg sm:text-xl mb-3 sm:mb-4 font-bold text-white pr-8">
              Enquire Now
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <ContactFormModal setIsOpen={setIsOpen} />
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default EnquiryPopup;
