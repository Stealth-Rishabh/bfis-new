"use client";

import { motion } from "framer-motion";
import WordPullUp from "@/components/ui/word-pull-up"; // Adjust import path as per your setup
import {
  User,
  ShieldAlert,
  Clock,
  IndianRupee,
  FileText,
  Briefcase,
  AlertCircle,
  Info,
  BookOpen,
  AlertTriangle,
  Star,
} from "lucide-react";

const policies = [
  {
    text: "It is compulsory for each student to come in proper school uniform, failing which they will be fined",
    icon: <User className="icon" />,
  },
  {
    text: "If any child or parent misbehaves with any teaching or non-teaching staff, the management has full rights to take action",
    icon: <ShieldAlert className="icon" />,
  },
  {
    text: "Any kind of cheating, irregular attendance, and misconduct even outside the school premises by the child is liable for dismissal",
    icon: <AlertCircle className="icon" />,
  },
  {
    text: "Tuition fee and transport fee should be submitted on time",
    icon: <IndianRupee className="icon" />,
  },
  {
    text: "If the dues of any child are not cleared, he/she will not be allowed to sit in the exam",
    icon: <FileText className="icon" />,
  },
  {
    text: "A student should attend the school regularly and must reach on time",
    icon: <Clock className="icon" />,
  },
  {
    text: "Students must keep their books and bags neat and clean labeled with the name",
    icon: <Briefcase className="icon" />,
  },
  {
    text: "If any student continues to be absent for a week without any intimation, his/her name will be struck off from the school. In case of rejoining, admission fee will be charged",
    icon: <AlertTriangle className="icon" />,
  },
  {
    text: "The leave applications should be sent in advance",
    icon: <Info className="icon" />,
  },
  {
    text: "Bullying or ragging is completely prohibited in the school",
    icon: <Star className="icon" />,
  },
  {
    text: "Any kind of damage done to the school property must be compensated by the parents in the form of fine",
    icon: <BookOpen className="icon" />,
  },
  {
    text: "Students are not allowed to carry cash or any kind of gold/silver ornaments",
    icon: <IndianRupee className="icon" />,
  },
];

const cardColors = [
  "#E91E63", // Pink
  "#4CAF50", // Green
  "#FF9800", // Orange
  "#2196F3", // Blue
  "#9C27B0", // Purple
];

const cardAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function PoliciesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <style jsx>
        {`
          .policy-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            display: flex;
            flex-direction: column;
            justify-content: flex-start; /* Default to top alignment */
            align-items: center; /* Center alignment on mobile */
            padding: 1.5rem;
            border-radius: 0.5rem;
            min-height: 250px;
            text-align: center; /* Center text on mobile */
          }
          @media (min-width: 768px) {
            /* Apply top alignment for larger screens */
            .policy-card {
              align-items: flex-start;
              text-align: left;
            }
          }
          .policy-card:hover {
            transform: scale(1.05) !important;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          }
          .icon {
            width: 3rem;
            height: 3rem;
            margin-bottom: 1rem;
            color: white;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Heading with WordPullUp Animation */}
          <WordPullUp
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-600"
            words="Policies & Governance"
          />
        </motion.div>

        {/* Policies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {policies.map((policy, index) => (
            <motion.div
              key={index}
              className="policy-card"
              style={{
                backgroundColor: cardColors[index % cardColors.length],
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-50px" }}
              variants={cardAnimation}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Icon */}
              {policy.icon}
              {/* Policy Text */}
              <p className="text-white text-sm font-medium leading-6">
                {policy.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
