import SectionName from "@/components/ui/sectionName";
import Title from "@/components/ui/title";
import { useState } from "react";
import CardOne from "./cardOne";
import CardTwo from "./cardTwo";
import CardThree from "./cardThree";
import CardFour from "./cardFour";
import SlideUp from "@/lib/animations/slideUp";
import pencil_rocket from "@/assets/images/shapes/pencil-rocket.png"; // Added back the image

// Updated category list for BFIS
const categoryList = [
  {
    id: 1,
    label: "Academics",
    data_target: "academics",
  },
  {
    id: 2,
    label: "Extracurricular",
    data_target: "extracurricular",
  },
  {
    id: 3,
    label: "Facilities",
    data_target: "facilities",
  },
  {
    id: 4,
    label: "Student Life",
    data_target: "student-life",
  },
  {
    id: 5,
    label: "Achievements",
    data_target: "achievements",
  },
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("academics");

  return (
    <section className="lg:pt-15 lg:pb-15 pt-10 pb-10 portfolio">
      <div className="container">
        <div className="text-center flex flex-col items-center">
          <SectionName>Our Programs</SectionName>
          <Title size={"3.5xl"} className={"lg:max-w-[630px]"}>
            Discover the Diverse Educational Experience at BFIS
          </Title>
        </div>
        <div className="pt-10">
          <ul className="flex items-center justify-center flex-wrap md:gap-7.5 gap-5">
            {categoryList.map(({ data_target, id, label }) => {
              return (
                <li
                  key={id}
                  onClick={() => setActiveTab(data_target)}
                  className={`px-5 py-2.5 text-xl font-700 border border-[#F2F2F2] rounded-[10px] font-poppins cursor-pointer hover:bg-primary hover:text-cream-foreground transition-all duration-500 ${
                    activeTab === data_target
                      ? "bg-primary text-cream-foreground"
                      : ""
                  }`}
                >
                  {label}
                </li>
              );
            })}
          </ul>
          <SlideUp>
            <div className="mt-[64px] overflow-hidden relative ">
              <CardOne data_target={activeTab} />
              <CardTwo data_target={activeTab} />
              <CardThree data_target={activeTab} />
              <CardFour data_target={activeTab} />
            </div>
          </SlideUp>
        </div>
      </div>
      {/* Added back the pencil rocket image */}
      <div className="absolute top-15 right-11 z-[-1] lg:max-w-full max-w-36 md:block hidden animate-left-right">
        <img src={pencil_rocket} alt="pencil" className="w-full h-auto" />
      </div>
    </section>
  );
};

export default Gallery;
