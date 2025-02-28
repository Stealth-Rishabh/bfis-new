import SectionName from "../../ui/sectionName";
import Title from "../../ui/title";
import { Button } from "../../ui/button";
import { Link } from "react-router-dom";
import Kindergarden from "@/assets/icons/kindergarden";
import Book from "@/assets/icons/book";
import Blocks from "@/assets/icons/blocks";
import Chalkboard from "@/assets/icons/chalkboard";
import CardOne from "./cardOne";
import SectionDescription from "@/components/ui/sectionDescription";

const SuccessProjectOne = () => {
  return (
    <section
      className="lg:pt-15 pt-10 lg:pb-15 pb-10"
      style={{ backgroundColor: "#ededed" }}
    >
      <div className="container">
        <div className="grid xl:grid-cols-2 lg:grid-cols-[40%_auto] grid-cols-1 gap-7.5">
          <div className="lg:max-w-[600px]">
            <SectionName className={"text-primary-foreground"}>
              Our Achievements
            </SectionName>
            <Title size={"3.5xl"} className={"lg:max-w-[410px] pb-5"}>
              Invest in quality education for a brighter future
            </Title>
            <SectionDescription>
              {" "}
              At BFIS, we are committed to nurturing young minds from Nursery to
              12th grade, helping them excel in academics and life. Our
              dedicated staff ensures each student receives the support they
              need to thrive in today’s fast-changing world.
            </SectionDescription>
            <Button
              asChild
              variant="outline"
              className="mt-10 text-foreground border-secondary"
            >
              <Link to={"/contact-us"}>Contact Us</Link>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5">
            <CardOne
              icon={<Kindergarden />}
              color={"bg-primary"}
              number={"1800+"}
              title={"Students"}
            />
            <CardOne
              icon={<Book />}
              color={"bg-destructive"}
              number={"150+"}
              title={"Faculties"}
            />
            <CardOne
              icon={<Blocks />}
              color={"bg-green"}
              number={"7+"}
              title={"Acres Campus"}
            />
            <CardOne
              icon={<Chalkboard />}
              color={"bg-secondary"}
              number={"No. 1"}
              title={"School in Tricity"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessProjectOne;
