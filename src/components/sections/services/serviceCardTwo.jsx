import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import PropTypes from "prop-types"; // Import PropTypes
import SlideUp from "@/lib/animations/slideUp";

// Main component
const ServiceCardTwo = ({
  icon: IconComponent,
  service_name,
  service_details,
}) => {
  return (
    <SlideUp delay={2}>
      <div className="relative rounded-[10px] bg-background border-2 border-[#F2F2F2] lg:p-10 p-4 transition-all duration-500 hover:shadow-3xl hover:border-transparent group/card icon_responsive">
        <div className="md:max-w-[88px] max-w-[70px] w-full max-h-[88px] flex justify-center items-center rounded-[10px] border border-[#F2F2F2] bg-background sm:p-[14px] p-2.5 static lg:absolute -left-11 top-1/2 lg:-translate-y-1/2 transition-all duration-500 text-green-foreground group-hover/card:bg-green group-hover/card:text-cream-foreground ">
          <IconComponent size={60} /> {/* Use the passed icon component */}
        </div>
        <div className="lg:pl-11 mt-4 lg:mt-0">
          <h4>
            <Link
              to="/service-details"
              className="font-semibold lg:text-2xl text-xl group-hover/card:text-green-foreground transition-all duration-500"
            >
              {service_name}
            </Link>
          </h4>
          <p className="lg:mt-4 mt-3">{service_details}</p>
          <Link
            to="/service-details"
            className="inline-flex items-center gap-2.5 lg:mt-7.5 mt-4 group/btn"
          >
            <span className="group-hover/btn:text-green-foreground transition-all duration-500">
              Read More
            </span>
            <span className="group-hover/btn:ml-1 group-hover/btn:text-green-foreground transition-all duration-500">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </SlideUp>
  );
};

// Define PropTypes for validation
ServiceCardTwo.propTypes = {
  icon: PropTypes.elementType.isRequired, // icon should be a component (e.g., FaBook, FaChalkboard)
  service_name: PropTypes.string.isRequired, // service_name is required and should be a string
  service_details: PropTypes.string.isRequired, // service_details is required and should be a string
};

export default ServiceCardTwo;
