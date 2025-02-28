import { useState } from "react";
/* eslint-disable react/prop-types */

const FullScreenCard = ({
  backgroundImage,
  heading,
  buttonText,
  onButtonClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="fullscreen-card flex flex-col justify-center items-center text-white bg-cover bg-center relative"
      style={{
        width: "1280px",
        height: "90vh",
        padding:
          "clamp(1.5rem, 2.380952381vw + 0.6904761905rem, 4.5rem) clamp(3rem, 5.5555555556vw + 1.1111111111rem, 10rem)",
        backgroundImage: `url(${backgroundImage})`,
        margin: "0 auto", // Centers the card horizontally
      }}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
        {heading}
      </h1>

      <button
        className="group relative inline-flex items-center bg-red-600 text-white font-bold py-4 pl-6 pr-24 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onButtonClick}
      >
        <span className="relative z-10 mr-2 text-2xl">{buttonText}</span>

        {/* Background animation on hover */}
        <span
          className="absolute inset-0 bg-[#343434] transition-transform duration-300 ease-in-out origin-right"
          style={{ transform: isHovered ? "scaleX(1)" : "scaleX(0)" }}
        ></span>

        {/* Border Polygon */}
        <span
          className="absolute right-0 top-0 h-full w-[86px] transition-all duration-300"
          style={{
            clipPath: "polygon(36% 0, 100% 0, 100% 100%, 36% 100%, 0 50%)",
            backgroundColor: isHovered ? "#343434" : "yellow", // Changes color on hover
            zIndex: 1,
          }}
        ></span>

        {/* Main Polygon */}
        <span
          className="absolute right-0 top-0 h-full w-20 bg-[#343434] transition-all duration-300"
          style={{
            clipPath: "polygon(39% 0, 100% 0, 100% 100%, 39% 100%, 0 50%)",
            zIndex: 2,
          }}
        ></span>

        {/* Plus icon */}
        <svg
          className="absolute right-8 top-1/2 -translate-y-1/2 w-6 h-6 text-white z-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
    </div>
  );
};

export default FullScreenCard;
