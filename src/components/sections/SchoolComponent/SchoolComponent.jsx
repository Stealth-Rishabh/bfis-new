"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import WordPullUp from "@/components/ui/word-pull-up";
import WordFadeIn from "@/components/ui/word-fade-in";

const students = [
  {
    id: 1,
    name: "Inclusive Community",
    image: "https://www.bfis.in/info/admissions/images/Twin-img1.jpg",
    description:
      "At Brookfield, we all share a passion for learning and its capacity to transform lives; we encourage and inspire our students to be the best they can be and prepare them for a happy, successful and a meaningful life. A life that will inspire the world.",
    additionalInfo: "",
  },
  {
    id: 2,
    name: "Determined",
    image: "https://www.bfis.in/info/admissions/images/Twin-img2.jpg",
    description: `We know that the attitudes, intellectual habits and work ethic one develops at school stay with them for life. That’s why our students are encouraged to question received wisdoms, to think deeply and to interrogate new ideas across a broad range of academic disciplines.`,
    additionalInfo: "",
  },
  {
    id: 3,
    name: "Creative and Passionate",
    image: "https://www.bfis.in/info/admissions/images/Twin-img3.jpg",
    description: `Performing arts is quite simply a way of life at Brookfield. For any student with a passion for music, drama, dance in any form – whether contemporary or classical – we offer boundless inspiration, opportunity and encouragement. We celebrate and support individual excellence and mass participation – catering to the ambitions and abilities of all students.`,
    additionalInfo: "",
  },
  {
    id: 4,
    name: "Courageous and Proud",
    image: "https://www.bfis.in/info/admissions/images/Twin-img4.jpg",
    description:
      "Our coaches and trainers are professional athletes and understand what it takes to perform at the highest level. They assist students at all levels to advance their abilities, as well as nurturing elite performers through focused training programmes – giving them every opportunity to excel.",
    additionalInfo: "",
  },
  {
    id: 5,
    name: "Choice of Courses",
    image: "https://www.bfis.in/info/admissions/images/Twin-img5.jpg",
    description:
      "We offer a wide range of courses including languages, sciences, arts, and sports to encourage diverse interests and passions.",
    additionalInfo: "",
  },
];

export default function StudentProfileCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % students.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + students.length) % students.length
    );
  };

  useEffect(() => {
    // Check if the screen is mobile-sized
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Trigger the animation from left for mobile
    if (isMobile) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.5 },
      });
    }
  }, [isMobile, currentIndex, controls]);

  return (
    <div className="max-w-full bg-gradient-to-br from-black via-gray-900 to-black text-white py-24 px-6">
      {/* Heading Section */}
      <div className="text-center mb-16">
        <WordPullUp
          words="Brookfield International School"
          className="text-3xl font-extrabold sm:text-4xl font-playfair"
        />
        <WordFadeIn
          words="Where Curious Minds Become Compassionate & Confident Leaders"
          className="mt-4 text-xl text-red-600"
        />
      </div>

      {/* Carousel Section */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Main Student Image */}
        <motion.div
          className="col-span-1"
          initial={isMobile ? { x: -100, opacity: 0 } : { opacity: 1 }}
          animate={isMobile ? controls : { opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={students[currentIndex].image}
            alt={students[currentIndex].name}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </motion.div>
        {/* Student Information */}
        <div className="col-span-1 md:col-span-2 space-y-4 relative">
          <div className="absolute -top-4 left-0">
            <span className="text-red-600 text-sm font-semibold border-b-2 border-red-600">
              Reason To Choose
            </span>
          </div>
          <div className="absolute -top-4 right-0 flex space-x-2">
            <button
              onClick={prevSlide}
              className="text-white hover:text-gray-300 p-2 rounded-full bg-gray-800 bg-opacity-50 shadow-lg"
              aria-label="Previous student"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="text-white hover:text-gray-300 p-2 rounded-full bg-gray-800 bg-opacity-50 shadow-lg"
              aria-label="Next student"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mt-6">
            {students[currentIndex].name}
          </h2>
          <p className="text-gray-200">{students[currentIndex].description}</p>
          <p className="text-gray-300">
            {students[currentIndex].additionalInfo}
          </p>
        </div>
        {/* Additional Images */}
        <div className="col-span-1 md:col-span-2">
          <div className="grid grid-cols-2 gap-4">
            <motion.img
              src={students[(currentIndex + 1) % students.length].image}
              alt={students[(currentIndex + 1) % students.length].name}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.img
              src={students[(currentIndex + 2) % students.length].image}
              alt={students[(currentIndex + 2) % students.length].name}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
