import { Link } from "react-router-dom";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import Logo from "@/components/ui/logo";
import SocalIcons from "@/components/ui/socalIcons";
import CopyRight from "../components/sections/footers/copyRight";
import apple from "@/assets/images/shapes/apple.svg";
import scissors from "@/assets/images/shapes/scissors.svg";
import ScrollUp from "../components/sections/footers/scrollUp";
import SlideUp from "@/lib/animations/slideUp";
import feeStructure from "@/assets/pdf/cbseDisclosure/Fee_structure_2025-26.jpg";
import CallUsStrip from "@/components/sections/footers/CallUsStrip";
import React, { useState, useEffect } from "react";
import EnquiryPopup from "@/components/EnquiryPopup";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const location = useLocation();
  const restrictedPaths = ["/login", "/admin", "/thankyou", "/contact-us"];
  const shouldShowEnquiry = !restrictedPaths.includes(location.pathname);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasOpened && shouldShowEnquiry) {
        setIsOpen(true);
        setHasOpened(true);
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [hasOpened, shouldShowEnquiry]);

  return (
    <footer className="pt-20 bg-black relative">
      <div className="container">
        <div className="grid lg:grid-cols-[300px_auto_auto_268px] sm:grid-cols-2 grid-cols-1 gap-x-7.5 gap-y-10 justify-between text-center sm:text-left">
          <SlideUp delay={2}>
            <div className="flex justify-center sm:justify-start">
              <Logo
                className="text-white"
                style={{
                  filter: "drop-shadow(2px 2px 4px rgba(255, 255, 255, 0.5))",
                }}
              />
            </div>
            <div className="mt-10">
              <p className="text-white opacity-80">
                We cultivate the potential of young minds to excel. Our
                dedication to comprehensive education guarantees that each child
                discovers their interests and achieves their utmost
                capabilities.
              </p>
            </div>
          </SlideUp>

          <SlideUp delay={3}>
            <div className="inline-block">
              <h3 className="text-2xl font-semibold text-white inline-block">
                Quick Links
              </h3>
              <span className="block w-[130%] h-[1px] mt-2 bg-red-600 relative after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:bg-red-600 after:h-1.5 after:w-1.5 after:rounded-full"></span>
            </div>
            <ul className="flex flex-col lg:gap-[15px] gap-2.5 lg:pt-7.5 pt-5 min-w-[203px]">
              <li>
                <Link
                  to="/newsletter"
                  className="text-white transition-all duration-500 hover:ml-[5px] hover:text-red-400"
                >
                  Newsletter
                </Link>
              </li>
              <li>
                <Link
                  to="/cbse-disclosure"
                  className="text-white transition-all duration-500 hover:ml-[5px] hover:text-red-400"
                >
                  CBSE Disclosure
                </Link>
              </li>
              <li>
                <Link
                  to="/uniform"
                  className="text-white transition-all duration-500 hover:ml-[5px] hover:text-red-400"
                >
                  Uniform List
                </Link>
              </li>
              <li>
                <Link
                  to="/books"
                  className="text-white transition-all duration-500 hover:ml-[5px] hover:text-red-400"
                >
                  Book List
                </Link>
              </li>
              <li>
                <Link
                  to="/work-with-us"
                  className="text-white transition-all duration-500 hover:ml-[5px] hover:text-red-400"
                >
                  Work With Us
                </Link>
              </li>
              <li>
                <Link
                  to="/policies"
                  className="text-white transition-all duration-500 hover:ml-[5px] hover:text-red-400"
                >
                  Policies & Governance
                </Link>
              </li>
              <li>
                <a
                  href={feeStructure}
                  className="text-white transition-all duration-500 hover:ml-[5px] hover:text-red-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fee Structure
                </a>
              </li>
              {/* <li>
                <Link
                  to="/blog"
                  className="text-white transition-all duration-500 hover:ml-[5px] hover:text-red-400"
                >
                  Blog
                </Link>
              </li> */}
            </ul>
          </SlideUp>

          <SlideUp delay={4}>
            <div className="inline-block">
              <h3 className="text-2xl font-semibold text-white">Contact</h3>
              <span className="block w-[130%] h-[1px] mt-2 bg-red-600 relative after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:bg-red-600 after:h-1.5 after:w-1.5 after:rounded-full"></span>
            </div>

            <ul className="flex flex-col lg:gap-[15px] gap-2.5 lg:pt-7.5 pt-5 items-center sm:items-start">
              <li
                className="text-white flex gap-4 justify-center sm:justify-start"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3425.9442364188503!2d76.61709347467625!3d30.832228618259553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ff17915555555%3A0x742607647b86d7b9!2sBrookfield%20International%20School!5e0!3m2!1sen!2sin!4v1729859443063!5m2!1sen!2sin",
                    "_blank"
                  )
                }
              >
                <FaLocationDot className="mt-1.5" />
                <span className="max-w-[168px] cursor-pointer">
                  Sheikhpura, New Chandigarh, Kurali-Siswan Road, Dist. S.A.S
                  Nagar, Mohali, Pin: 140110
                </span>
              </li>
              <li className="text-white flex gap-4 justify-center sm:justify-start">
                <FaEnvelope className="mt-1.5" />
                <Link to="mailto:info@bfis.in" className="hover:text-red-400">
                  info@bfis.in
                </Link>
              </li>
              <li className="text-white flex gap-4 justify-center sm:justify-start">
                <FaPhone className="mt-1.5" />
                <Link to="tel:+919066790662" className="hover:text-red-400">
                  +91-9066790662
                </Link>
              </li>
            </ul>
          </SlideUp>

          <SlideUp delay={5}>
            <div className="inline-block">
              <h3 className="text-2xl font-semibold text-white inline-block">
                Share Us
              </h3>
              <span className="block w-[130%] h-[1px] mt-2 bg-background relative after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:bg-background after:h-1.5 after:w-1.5 after:rounded-full"></span>
            </div>
            <div className="flex justify-center sm:justify-start gap-4 mt-4">
              <SocalIcons
                prentClass={
                  "gap-5 lg:pt-7.5 pt-5 justify-center sm:justify-start"
                }
                className={
                  "w-9 h-9 bg-[#FFFFFF1A] border-none hover:bg-red-600"
                }
              />
            </div>
          </SlideUp>
        </div>
        <CopyRight color={"text-white opacity-80"} />
      </div>
      <ScrollUp />
      {shouldShowEnquiry && (
        <>
          <CallUsStrip setIsOpen={setIsOpen} />
          <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
            <button
              onClick={() => setIsOpen(true)}
              className="bg-red-500 text-white px-1 py-2 hover:bg-red-600 transition-colors duration-300 font-semibold rounded-r-lg shadow-lg z-50 text-base whitespace-nowrap"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                transform: "rotate(180deg)",
                minWidth: "max-content",
              }}
            >
              Enquire Now
            </button>
          </div>
          <EnquiryPopup setIsOpen={setIsOpen} isOpen={isOpen} />
        </>
      )}
      <div>
        <div className="absolute right-[68px] top-[40%] animate-up-down">
          <img src={apple} alt="img" />
        </div>
        <div className="absolute left-[45%] lg:top-1/2 top-[40%]">
          <img src={scissors} alt="img" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
