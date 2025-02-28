import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import {
  Twitter,
  Facebook,
  Instagram,
  Phone,
  MessageCircle,
  Linkedin,
} from "lucide-react";
import boyImage from "@/assets/images/boy_cutout.png";

export default function FooterTop() {
  return (
    <section className="w-full bg-white pt-12 lg:pt-20 relative hidden md:visible">
      {/* Border line below the image */}
      <div className="absolute left-0 right-0 top-[70%] lg:top-[30%] h-0.5 bg-gray-300" />

      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16 relative z-10 px-4">
        {/* Left Side: Image (hidden on screens smaller than 1024px) */}
        <div className="lg:w-1/2 justify-center lg:justify-start relative z-20 lg:mb-2 hidden lg:flex">
          <img
            src={boyImage}
            alt="Student portrait"
            className="object-cover h-[350px] max-w-full"
            loading="lazy"
            style={{ marginBottom: "-20px" }}
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center md:items-start space-y-6 text-center md:text-left mt-8">
          {/* Heading */}
          <h1 className="text-[#0A2B7B] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Come Here. Go Places.
          </h1>
          {/* Subheading with underline */}
          <div className="relative">
            <h2 className="text-gray-700 text-base md:text-lg tracking-wide">
              FROM BROOKFIELD TO THE WORLD
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 md:left-0 md:translate-x-0 h-0.5 w-16 bg-[#E6007E]" />
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4 justify-center md:justify-start mt-4">
            <Link
              to="#"
              className="bg-[#0A2B7B] p-2 rounded-full text-white hover:bg-[#0A2B7B]/90"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              to="#"
              className="bg-[#0A2B7B] p-2 rounded-full text-white hover:bg-[#0A2B7B]/90"
            >
              <Facebook className="w-5 h-5" />
            </Link>
            <Link
              to="#"
              className="bg-[#0A2B7B] p-2 rounded-full text-white hover:bg-[#0A2B7B]/90"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              to="#"
              className="bg-[#0A2B7B] p-2 rounded-full text-white hover:bg-[#0A2B7B]/90"
            >
              <Phone className="w-5 h-5" />
            </Link>
            <Link
              to="#"
              className="bg-[#0A2B7B] p-2 rounded-full text-white hover:bg-[#0A2B7B]/90"
            >
              <MessageCircle className="w-5 h-5" />
            </Link>
            <Link
              to="#"
              className="bg-[#0A2B7B] p-2 rounded-full text-white hover:bg-[#0A2B7B]/90"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>

          {/* Download Button */}
          <Button className="bg-[#E6007E] text-white hover:bg-[#E6007E]/90 px-6 py-2 mt-4 lg:mt-6">
            Download Prospectus
          </Button>
        </div>
      </div>
    </section>
  );
}
