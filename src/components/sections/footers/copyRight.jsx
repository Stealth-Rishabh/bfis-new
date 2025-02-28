/* eslint-disable react/prop-types */
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const CopyRight = ({ color }) => {
  return (
    <div className="lg:pt-[75px] overflow-x-hidden">
      <div className="flex lg:flex-row flex-col justify-between items-center lg:items-center text-center lg:text-left pt-7.5 pb-8 border-t border-t-white border-opacity-20">
        <p className={cn("wow fadeInLeft", color)} data-wow-delay=".3s">
          © <Link to="#">BFIS</Link> 2024 | All Rights Reserved
        </p>
        {/* Uncomment this section if you want to add the additional links */}
        {/* <ul
          className="flex items-center gap-7.5 wow fadeInRight mt-4 lg:mt-0"
          data-wow-delay=".3s"
        >
          <li>
            <Link to="#" className={cn(``, color)}>
              Terms & Condition
            </Link>
          </li>
          <li>
            <Link to="#" className={cn(``, color)}>
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="#" className={cn(``, color)}>
              Contact Us
            </Link>
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default CopyRight;
