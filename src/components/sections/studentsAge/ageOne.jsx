import PropTypes from "prop-types";
import SectionName from "../../ui/sectionName";
import Title from "../../ui/title";
import shap_1 from "@/assets/images/shapes/knowledge-lshpe.png";
import shap_2 from "@/assets/images/shapes/knowledge-animal.png";
import { Button } from "../../ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import SectionDescription from "@/components/ui/sectionDescription";

const AgeOne = () => {
  return (
    <section className="lg:pt-15 lg:pb-15 pb-10 pt-10">
      <div className="bg-warm lg:py-[120px] py-20 relative z-[1]">
        <div className="container">
          {/* Adjusted grid structure to balance the gap */}
          <div className="grid lg:grid-cols-[40%_1fr] grid-cols-1 items-center xl:gap-10 gap-5">
            <div>
              <div className="lg:max-w-[460px]">
                <SectionName>BFIS Students&apos; Age Groups</SectionName>
                <Title size={"3.5xl"}>
                  Nurturing Knowledge Across All Age Groups
                </Title>
              </div>
              <SectionDescription className={"pt-5 pb-7.5"}>
                At BFIS, we offer tailored learning experiences for students
                across all age groups, ensuring each child receives the support
                and knowledge they need to succeed.
              </SectionDescription>
              <Button asChild variant="pill">
                <Link to={"/about-us"}>Learn More</Link>
              </Button>
            </div>

            {/* Adjusted layout to reduce the gap */}
            <div className="relative flex justify-center flex-wrap sm:flex-nowrap lg:justify-evenly md:gap-5 sm:gap-3 gap-2">
              <div className="flex flex-col md:gap-5 sm:gap-3 gap-2">
                <SmallCard className={"bg-secondary"} age={"3-5"} />
                <SmallCard className={"bg-destructive"} age={"6-8"} />
                <SmallCard className={"bg-green"} age={"16-18"} />
              </div>
              <div className="self-center flex flex-col gap-5">
                <SmallCard className={"bg-primary"} age={"12-15"} />
                <SmallCard className={"bg-primary"} age={"9-11"} />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute 2xl:left-15 left-0 bottom-0 z-[-1] xl:block hidden">
          <img src={shap_1} alt="tree" />
        </div>
        <div className="absolute 2xl:top-[120px] lg:top-16 top-5 right-[67px] 2xl:w-auto lg:w-48 w-32 animate-left-right">
          <img src={shap_2} alt="animal" />
        </div>
      </div>
    </section>
  );
};

export default AgeOne;

// SmallCard Component
const SmallCard = ({ age, className }) => {
  return (
    <div
      className={cn(
        "bg-secondary rounded-[10px] xl:py-[53px] lg:py-9 py-7 xl:px-10 lg:px-8 md:px-6 px-5 max-w-[190px] max-h-[190px]",
        className
      )}
    >
      <h5 className="font-montserrat text-cream-foreground lg:text-[32px] md:text-2xl text-xl font-bold leading-[130%] text-center lg:max-w-[111px] md:max-w-25 max-w-20">
        <span>{age}</span> <span>Years</span>
      </h5>
    </div>
  );
};

SmallCard.propTypes = {
  age: PropTypes.string.isRequired,
  className: PropTypes.string,
};
