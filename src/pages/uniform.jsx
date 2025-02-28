"use client";

import { motion } from "framer-motion";
import WordPullUp from "@/components/ui/word-pull-up";
import { Download } from "lucide-react";
import summerUniform from "@/assets/pdf/uniform/Summer-Uniform.pdf";
import winterUniform from "@/assets/pdf/uniform/Winter-Uniform.pdf";
import vendorList from "@/assets/pdf/uniform/Vendor-List.jpg";

// Uniform Data
const uniforms = [
  {
    label: "Summer",
    url: summerUniform,
  },
  {
    label: "Winter",
    url: winterUniform,
  },
  {
    label: "Vendor List",
    url: vendorList,
  },
];

// Framer Motion Variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Uniform() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2196F3]/10 to-[#4CAF50]/10 p-8">
      <motion.div
        className="max-w-lg w-full bg-white/80 backdrop-blur-md rounded-3xl shadow-lg p-8"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        <WordPullUp
          words="Uniform" // Page heading
          className="text-4xl font-bold text-[#2196F3] mb-6 text-center"
        />

        <div className="space-y-4">
          {uniforms.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#4CAF50] hover:bg-[#388E3C] text-white text-lg font-medium py-4 rounded-lg transition-transform duration-150 hover:scale-105 flex items-center justify-between px-4"
            >
              <span>{item.label}</span>
              <Download className="h-5 w-5" />
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
