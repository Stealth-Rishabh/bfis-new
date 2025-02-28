import { Button } from "@/components/ui/button";
import boy_img_1 from "@/assets/images/banner/girl_jumping.png";
import boy_img_2 from "@/assets/images/banner/boy_jumping.png";
import painting from "@/assets/images/banner/kids_banner.png";
import left_circle_1 from "@/assets/images/banner/left-circle-1.png";
import left_circle_2 from "@/assets/images/banner/left-circle-2.png";
import right_circle from "@/assets/images/banner/right-circle.png";
import shap from "@/assets/images/shapes/shap.png";
import { Link } from "react-router-dom";
import ThreeLine from "@/assets/icons/threeLine";
import Title from "@/components/ui/title";

const HeroOne = () => {
  return (
    <section className="bg-warm pt-[78px] lg:mb-15 mb-10 relative">
      <div className="container relative">
        <div className="flex flex-col items-center text-center relative z-10">
          <Title size={"7.5xl"} className={"font-normal max-w-[776px]"}>
            <span className="relative">
              Leading School{" "}
              <span className="absolute -left-6 top-1 text-3xl text-[#0A6375]">
                <ThreeLine />
              </span>
            </span>
            <span className="font-bold">From Nursery to</span>{" "}
            <span className="font-bold text-destructive-foreground">
              12th Class
            </span>
          </Title>

          <div className="flex absolute right-[87px] top-14 animate-skw">
            <img
              src={shap}
              alt="shap-2"
              className="w-7.5 h-12.5 relative top-9"
            />
            <img src={shap} alt="shap-1" />
            <img src={shap} alt="shap-2" className="w-5 h-8 -mt-7" />
          </div>

          <p className="pt-5 max-w-[431px]">
            BFIS offers a nurturing and comprehensive learning environment for
            students from Nursery to 12th grade, preparing them for the future
            with quality education and holistic development.
          </p>
          <div className="mt-6">
            <Button asChild variant={"secondary"}>
              <Link to="/about-us">Learn More</Link>
            </Button>
          </div>
        </div>
        <div className="absolute left-2.5 lg:top-0 top-10 lg:max-w-full max-w-[200px] sm:block hidden animate-up-down">
          <img src={boy_img_1} alt="banner-img-1" />
        </div>

        <div className="absolute right-0 bottom-0 pb-[71px] lg:block hidden animate-up-down">
          <img src={boy_img_2} alt="banner-img-2" />
          {/* <span className="absolute -left-2.5 top-[9px] border-2 border-secondary rounded-[125px] max-h-[369px] w-full h-full"></span> */}
        </div>

        <div className="lg:pt-[72px]">
          <img src={painting} alt="painting" />
        </div>
      </div>

      {/* <!-- circle shapes --> */}
      <div className="lg:block hidden">
        <div className="absolute left-0 top-[60px] animate-left-right-2">
          <img src={left_circle_1} alt="img" />
        </div>
        <div className="absolute left-[37px] top-[186px] animate-left-right-2">
          <img src={left_circle_2} alt="img" />
        </div>
        <div className="absolute right-0 bottom-[165px] animate-up-down">
          <img src={right_circle} alt="img" />
        </div>
      </div>
    </section>
  );
};

export default HeroOne;
