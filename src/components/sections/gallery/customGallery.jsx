import { useState } from "react";
import WordPullUp from "@/components/ui/word-pull-up";
import gallery1 from "@/assets/images/jpg/gallery2.jpg";
import sports1 from "@/assets/sports/img10.webp";
import lab1 from "@/assets/lab/lab1.jpg";
import smartclass1 from "@/assets/smartclass/smartclass1.jpg";
import arts1 from "@/assets/arts/arts1.jpg";
import gallery2 from "@/assets/images/jpg/gallery12.jpg";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const images = [gallery1, sports1, lab1, smartclass1, arts1, gallery2];
  const categories = ["infrastructure", "sports", "lab", "smartclass", "arts"];
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  const handleImageClick = (category) => {
    navigate("/glimpse", { state: { selectedCategory: category } });
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 pt-8 md:pt-16 mb-8 md:mb-16">
      <WordPullUp
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 font-roboto mb-6 md:mb-12"
        words="Gallery"
      />
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 mt-0">
        {/* Infrastructure */}
        <div
          className="aspect-square w-full"
          onMouseEnter={() => setHoveredIndex(0)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => handleImageClick("infrastructure")}
          style={{ cursor: "pointer" }}
        >
          <img
            src={images[0]}
            alt="Infrastructure Image"
            className={`w-full h-full object-cover object-top rounded-lg transition-transform duration-300 ${
              hoveredIndex !== null && hoveredIndex !== 0
                ? "blur-sm scale-95"
                : "blur-0 scale-100"
            }`}
          />
        </div>

        {/* Sports */}
        <div
          className="aspect-square w-full md:row-span-2 md:aspect-auto md:h-full"
          onMouseEnter={() => setHoveredIndex(1)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => handleImageClick("sports")}
          style={{ cursor: "pointer" }}
        >
          <img
            src={images[1]}
            alt="Sports Image"
            className={`w-full h-full object-cover object-top rounded-lg transition-transform duration-300 ${
              hoveredIndex !== null && hoveredIndex !== 1
                ? "blur-sm scale-95"
                : "blur-0 scale-100"
            }`}
          />
        </div>

        {/* Lab */}
        <div
          className="aspect-square w-full"
          onMouseEnter={() => setHoveredIndex(2)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => handleImageClick("lab")}
          style={{ cursor: "pointer" }}
        >
          <img
            src={images[2]}
            alt="Lab Image"
            className={`w-full h-full object-cover object-top rounded-lg transition-transform duration-300 ${
              hoveredIndex !== null && hoveredIndex !== 2
                ? "blur-sm scale-95"
                : "blur-0 scale-100"
            }`}
          />
        </div>

        {/* Smart Class */}
        <div
          className="aspect-square w-full"
          onMouseEnter={() => setHoveredIndex(3)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => handleImageClick("smartclass")}
          style={{ cursor: "pointer" }}
        >
          <img
            src={images[3]}
            alt="Smart Class Image"
            className={`w-full h-full object-cover object-top rounded-lg transition-transform duration-300 ${
              hoveredIndex !== null && hoveredIndex !== 3
                ? "blur-sm scale-95"
                : "blur-0 scale-100"
            }`}
          />
        </div>

        {/* Arts */}
        <div
          className="aspect-square w-full"
          onMouseEnter={() => setHoveredIndex(4)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => handleImageClick("arts")}
          style={{ cursor: "pointer" }}
        >
          <img
            src={images[4]}
            alt="Arts Image"
            className={`w-full h-full object-cover object-top rounded-lg transition-transform duration-300 ${
              hoveredIndex !== null && hoveredIndex !== 4
                ? "blur-sm scale-95"
                : "blur-0 scale-100"
            }`}
          />
        </div>

        {/* New 6th image - Mobile Only */}
        <div
          className="aspect-square w-full md:hidden"
          onMouseEnter={() => setHoveredIndex(5)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => navigate("/glimpse")}
          style={{ cursor: "pointer" }}
        >
          <img
            src={images[5]}
            alt="Gallery Image"
            className={`w-full h-full object-cover object-top rounded-lg transition-transform duration-300 ${
              hoveredIndex !== null && hoveredIndex !== 5
                ? "blur-sm scale-95"
                : "blur-0 scale-100"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
