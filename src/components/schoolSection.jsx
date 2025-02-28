import { motion } from "framer-motion";
import WordPullUp from "../components/ui/word-pull-up";
import WordFadeIn from "../components/ui/word-fade-in";
import { useNavigate } from "react-router-dom";
import prePrimary from "@/assets/bfis_images/pre-primary.webp";
import primary from "@/assets/bfis_images/primary.webp";
import middle from "@/assets/bfis_images/middle.webp";
import highschool from "@/assets/bfis_images/high.webp";
import seniorSecondarySchool from "@/assets/bfis_images/senior.webp";
import smart from "../assets/images/jpg/gallery10.jpg";

const sections = [
  {
    id: "pre-primary",
    title: "PRE-PRIMARY",
    subtitle: "Ages 3-5",
    image: prePrimary,
    description:
      "Our pre-primary program focuses on early childhood development through play-based learning, fostering curiosity and social skills in a nurturing environment.",
  },
  {
    id: "primary",
    title: "PRIMARY",
    subtitle: "Grades 1-5",
    image: primary,
    description:
      "The primary section builds a strong foundation in core subjects while encouraging creativity and critical thinking through interactive and engaging lessons.",
  },
  {
    id: "middle",
    title: "MIDDLE SCHOOL",
    subtitle: "Grades 6-8",
    image: middle,
    description:
      "Middle school prepares students for higher academic challenges, focusing on developing independent learning skills and exploring diverse subjects and extracurricular activities.",
  },
  {
    id: "high-school",
    title: "HIGH SCHOOL",
    subtitle: "Grades 9-10",
    image: highschool,
    description:
      "Our high school program offers a comprehensive curriculum that prepares students for advanced studies, with a focus on academic excellence and personal growth.",
  },
  {
    id: "senior-secondary",
    title: "SENIOR SECONDARY",
    subtitle: "Grades 11-12",
    image: seniorSecondarySchool,
    description:
      "The senior secondary program provides specialized streams and career guidance, equipping students with the knowledge and skills needed for higher education and future careers.",
  },
  {
    id: "smart-classes",
    title: "SMART CLASSES",
    subtitle: "Pre-Nursery to Class 12th",
    image: smart,
    description:
      "Our smart classes integrate cutting-edge technology across all grades, enhancing learning experiences with interactive digital content, virtual labs, and personalized learning tools.",
  },
];

export default function SchoolSection() {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-10">
        <WordPullUp
          words="Academic Excellence"
          className="text-4xl md:text-5xl lg:text-6xl font-roboto font-bold text-red-600 text-center"
        />

        <WordFadeIn words="Inspiring a Love of Learning from Pre-Primary to Senior Secondary" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-30" />
                <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  {section.subtitle}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-red-600 mb-3">
                  {section.title}
                </h2>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {section.description}
                </p>

                {/* Button Container */}
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => navigate(`/academics#${section.id}`)}
                    className="inline-flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-red-600 transition-colors duration-300 group"
                  >
                    <span>Learn More</span>
                    <svg
                      className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
