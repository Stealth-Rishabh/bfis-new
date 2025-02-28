import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "@/assets/images/logo_w.png";

const Logo = ({ className }) => {
  return (
    <div className={`flex justify-center lg:justify-start ${className}`}>
      <Link to="/" className="flex justify-center items-center gap-1">
        <img src={logo} alt="BFIS Logo" className="h-auto w-[80%] sm:w-auto" />
      </Link>
    </div>
  );
};

// Add PropTypes validation
Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;
