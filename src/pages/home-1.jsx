/* HomeOne.jsx */
/* eslint-disable react/prop-types */
import { useRef } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async"; // Updated import
// Removed unused imports: motion, useScroll, useTransform

import HeroVideo from "../components/sections/heros/heroVideo";
import SchoolSection from "../components/schoolSection";
import Gallery from "../components/sections/gallery/customGallery";
// import GalleryTwo from "../components/sections/gallery/cutomGalleryTwo";
import PicLayout from "../components/sections/picLayout/picLayout";
import FullscreenSections from "../components/sections/FullScreenSections/FullScreenSection";
import EducationalExperience from "../components/sections/SchoolComponent/EducationalExperience";
import StudentLife from "../components/studentLife";
import AchievementsSection from "../components/achievementsSection";
import BfisLife from "@/components/BfisLife";
import EnquiryPopup from "@/components/EnquiryPopup";

import world from "../assets/images/world.png";
import learn from "../assets/images/learn.png";
//import faculty from "../assets/images/faculty.png";
import art from "../assets/images/art.png";
import ethos from "../assets/images/ethos.png";

import { useNavigate } from "react-router-dom";

const HomeOne = () => {
  const ref = useRef(null);
  const navigate = useNavigate();

  const sectionsData = [
    {
      id: "section-1",
      backgroundImage: world,
      heading: "World-Class Learning",
      buttonText: "Know More",
      onButtonClick: () => navigate("/program"),
    },
    {
      id: "section-2",
      backgroundImage: learn,
      heading: "Innovative E-Learning Facilities",
      buttonText: "Know More",
      onButtonClick: () => navigate("/academics#smart-classes"),
    },
    {
      id: "section-5",
      backgroundImage: ethos,
      heading: "BFIS Values & Ethos",
      buttonText: "Know More",
      onButtonClick: () => navigate("/about/values"),
    },
    // {
    //   id: "section-3",
    //   backgroundImage: `${faculty}`,
    //   heading: "Experienced Faculty",
    //   buttonText: "Know More",
    //   onButtonClick: () => (window.location.href = "/programs"),
    // },
    {
      id: "section-4",
      backgroundImage: art,
      heading: "State-of-the-art Facilities",
      buttonText: "Know More",
      onButtonClick: () => navigate("/glimpse"),
    },
  ];

  return (
    <HelmetProvider>
      <Helmet>
        <title>Brookfield International School - New Chandigarh</title>
        <meta
          name="description"
          content="Brookfield International School (BFIS) is the top international school in Mohali, Kurali, and Chandigarh, offering excellent education and a nurturing environment."
        />
      </Helmet>
      <div ref={ref} className="relative w-full">
        <EnquiryPopup />
        <HeroVideo />
        <EducationalExperience />
        <PicLayout />
        <FullscreenSections sections={sectionsData} />
        <StudentLife />
        <AchievementsSection />

        <SchoolSection />
        <BfisLife />
        {/* <GalleryTwo /> */}
        <Gallery />
      </div>
    </HelmetProvider>
  );
};

export default HomeOne;
