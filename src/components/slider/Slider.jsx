/* eslint-disable react/prop-types */
import { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../index.css"; // Make sure to import any additional Tailwind or custom styles
import WordFadeIn from "@/components/ui/word-fade-in"; // Import WordFadeIn component
import WordPullUp from "../ui/word-pull-up";

const TiltedSlider = () => {
  const sliderRef = useRef(null); // Reference to the slider
  const [isAnimated, setIsAnimated] = useState(false); // Track animation trigger
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    arrows: false, // Disable the default arrows
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 3,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: false, // Disable center mode for single slide
        },
      },
    ],
  };

  const slides = [
    {
      id: 1,
      title: "Machu Picchu → Peru",
      description: "Adventure is never far away",
      image: "https://www.bfis.in/info/admissions/images/gallery/2.jpg",
    },
    {
      id: 2,
      title: "Grand Canyon → USA",
      description: "Nature at its best",
      image: "https://www.bfis.in/info/admissions/images/gallery/6.jpg",
    },
    {
      id: 3,
      title: "Alps → Switzerland",
      description: "Breathtaking views",
      image: "https://www.bfis.in/info/admissions/images/gallery/2.jpg",
    },
    {
      id: 4,
      title: "Santorini → Greece",
      description: "Island beauty",
      image: "https://www.bfis.in/info/admissions/images/gallery/6.jpg",
    },
    {
      id: 5,
      title: "Bali → Indonesia",
      description: "Tropical paradise",
      image: "https://www.bfis.in/info/admissions/images/gallery/2.jpg",
    },
    {
      id: 6,
      title: "Bali → Indonesia",
      description: "Tropical paradise",
      image: "https://www.bfis.in/info/admissions/images/gallery/6.jpg",
    },
  ];

  useEffect(() => {
    const currentSliderRef = sliderRef.current; // Copy the ref to a variable

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAnimated(true);
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    if (currentSliderRef) {
      observer.observe(currentSliderRef);
    }

    return () => {
      if (currentSliderRef) {
        observer.unobserve(currentSliderRef);
      }
    };
  }, []);

  return (
    <div
      ref={sliderRef}
      className="bg-transparent max-w-full py-8 pb-20 relative"
    >
      <div className="max-w-screen-xl mx-auto overflow-hidden">
        {isAnimated && (
          <>
            <WordPullUp
              className="text-4xl font-bold text-center mb-2 sm:mt-12 text-red-600 font-playfair"
              words="THE RESULTS SPEAK FOR THEMSELVES"
            />
            <WordFadeIn
              className="text-gray-700 text-center mb-8 text-xl"
              words="The secret to our students success lies in our passion and determination."
            />
          </>
        )}
        <Slider ref={sliderRef} {...settings}>
          {slides.map((slide, index) => {
            const isActive = index === activeSlide;
            const isPrev =
              index === (activeSlide - 1 + slides.length) % slides.length;
            const isNext = index === (activeSlide + 1) % slides.length;

            return (
              <div key={slide.id} className="p-4">
                <div
                  className="relative transition-transform duration-500"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${slide.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "400px",
                    borderRadius: "15px",
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
                    transformStyle: "preserve-3d",
                    transform: isActive
                      ? "scale(1) rotateY(0deg)"
                      : isPrev
                      ? "scale(0.85) rotateY(-25deg) translateX(-40px)"
                      : isNext
                      ? "scale(0.85) rotateY(25deg) translateX(40px)"
                      : "scale(0.7)",
                    opacity: isActive ? 1 : 0.5,
                  }}
                >
                  <div className="flex flex-col justify-end h-full p-6 text-white backdrop-brightness-50 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-2">
                      {slide.title}
                    </h2>
                    <p className="text-sm">{slide.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
        <CustomPrevArrow onClick={() => sliderRef.current.slickPrev()} />
        <CustomNextArrow onClick={() => sliderRef.current.slickNext()} />
      </div>
    </div>
  );
};

// Custom Next Arrow Component
const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      style={{
        position: "absolute",
        top: "60%",
        right: "20px",
        zIndex: 2,
        fontSize: "24px",
        background: "linear-gradient(135deg, #ff7e5f, #DC2626)",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        lineHeight: "50px",
        textAlign: "center",
        cursor: "pointer",
        color: "#fff",
        transform: "translateY(-50%)",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
      }}
      onClick={onClick}
    >
      →
    </div>
  );
};

// Custom Prev Arrow Component
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      style={{
        position: "absolute",
        top: "60%",
        left: "20px",
        zIndex: 2,
        fontSize: "24px",
        background: "linear-gradient(135deg, #ff7e5f, #DC2626)",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        lineHeight: "50px",
        textAlign: "center",
        cursor: "pointer",
        color: "#fff",
        transform: "translateY(-50%)",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
      }}
      onClick={onClick}
    >
      ←
    </div>
  );
};

export default TiltedSlider;
