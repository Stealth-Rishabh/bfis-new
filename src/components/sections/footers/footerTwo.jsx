import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaEnvelope,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import Logo from "@/components/ui/logo";
import SocalIcons from "@/components/ui/socalIcons";
import CopyRight from "./copyRight";
import apple from "@/assets/images/shapes/apple.svg";
import scissors from "@/assets/images/shapes/scissors.svg";
import ScrollUp from "./scrollUp";
import Input from "@/components/ui/input";
import SlideUp from "@/lib/animations/slideUp";

const FooterTwo = () => {
  return (
    <footer className="pt-20 bg-red-600 relative">
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
                We nurture young minds to achieve excellence. Our commitment to
                holistic education ensures that every child finds their passion
                and reaches their full potential.
              </p>
              <SocalIcons
                prentClass={
                  "gap-5 lg:pt-7.5 pt-5 justify-center sm:justify-start"
                }
                className={
                  "w-9 h-9 bg-[#FFFFFF1A] border-none hover:bg-blue-500"
                }
              />
            </div>
          </SlideUp>

          <SlideUp delay={3}>
            <div className="inline-block">
              <h3 className="text-2xl font-semibold text-white inline-block">
                Pages
              </h3>
              <span className="block w-[130%] h-[1px] mt-2 bg-background relative after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:bg-background after:h-1.5 after:w-1.5 after:rounded-full"></span>
            </div>
            <ul className="flex flex-col lg:gap-[15px] gap-2.5 lg:pt-7.5 pt-5 min-w-[203px]">
              <li>
                <Link
                  to="/about-us"
                  className="text-white transition-all duration-500 hover:ml-[5px] hover:text-blue-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white transition-all duration-500 hover:ml-[5px] hover:text-blue-300"
                >
                  Latest Service
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-white transition-all duration-500 hover:ml-[5px] hover:text-blue-300"
                >
                  Latest Blog And News
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-white transition-all duration-500 hover:ml-[5px] hover:text-blue-300"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-white transition-all duration-500 hover:ml-[5px] hover:text-blue-300"
                >
                  Our Creative Team Member
                </Link>
              </li>
            </ul>
          </SlideUp>

          <SlideUp delay={4}>
            <div className="inline-block">
              <h3 className="text-2xl font-semibold text-white">Contact</h3>
              <span className="block w-[130%] h-[1px] mt-2 bg-background relative after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:bg-background after:h-1.5 after:w-1.5 after:rounded-full"></span>
            </div>

            <ul className="flex flex-col lg:gap-[15px] gap-2.5 lg:pt-7.5 pt-5 items-center sm:items-start">
              <li className="text-white flex gap-4 justify-center sm:justify-start">
                <FaLocationDot className="mt-1.5" />{" "}
                <span className="max-w-[168px]">
                  Sheikhpura New Chandigarh, Kurali-Siswan Road, Dist. S.A.S
                  Nagar, Mohali, Pin: 140110
                </span>
              </li>
              <li className="text-white flex gap-4 justify-center sm:justify-start">
                <FaEnvelope className="mt-1.5" />{" "}
                <Link to="#">info@bfis.in</Link>
              </li>
              <li className="text-white flex gap-4 justify-center sm:justify-start">
                <FaPhone className="mt-1.5" />{" "}
                <Link to="#">+91-90667 90662</Link>
              </li>
            </ul>
          </SlideUp>

          <SlideUp delay={5}>
            <div className="inline-block">
              <h3 className="text-2xl font-semibold text-white inline-block">
                Our Newsletter
              </h3>
              <span className="block w-[120%] h-[1px] mt-2 bg-background relative after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:bg-background after:h-1.5 after:w-1.5 after:rounded-full"></span>
            </div>
            <div className="lg:pt-7.5 pt-5">
              <p className="text-white">
                Subscribe to our newsletter to get our latest updates.
              </p>
              <form action="#" className="lg:mt-7.5 mt-5">
                <div className="relative overflow-hidden">
                  <Input
                    type={"email"}
                    placeholder={"Enter Your Email"}
                    className={
                      "rounded-md bg-[#FFFFFF1A] text-white placeholder:text-white max-h-15 border-none"
                    }
                  />
                  <button
                    type="submit"
                    className="absolute z-20 h-full right-0 top-1/2 -translate-y-1/2 py-5 px-7.5 bg-blue-600 text-white rounded-tr-md rounded-br-md"
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </form>
            </div>
          </SlideUp>
        </div>
        <CopyRight color={"text-white opacity-80"} />
      </div>
      <ScrollUp />
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

export default FooterTwo;
