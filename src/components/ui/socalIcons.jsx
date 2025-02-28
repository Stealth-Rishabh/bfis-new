import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import PropTypes from "prop-types"; // Import PropTypes

const icons = [
  {
    id: 1,
    link: "https://www.facebook.com/brookfieldintschool/",
    icon: <FaFacebookF />,
  },
  {
    id: 2,
    link: "https://www.instagram.com/brookfieldschool_chandigarh/",
    icon: <FaInstagram />,
  },
];

const SocalIcons = ({ className, prentClass }) => {
  return (
    <ul className={cn("flex items-center gap-[14px]", prentClass)}>
      {icons.map(({ icon, id, link }) => {
        return (
          <li key={id}>
            <Link
              to={link}
              className={cn(
                "rounded-md w-6 h-6 flex items-center justify-center border border-white border-opacity-20 text-cream-foreground hover:bg-primary transition-all duration-500",
                className
              )}
            >
              {icon}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

// Add PropTypes validation
SocalIcons.propTypes = {
  className: PropTypes.string, // Validate className as a string
  prentClass: PropTypes.string, // Validate prentClass as a string
};

export default SocalIcons;
