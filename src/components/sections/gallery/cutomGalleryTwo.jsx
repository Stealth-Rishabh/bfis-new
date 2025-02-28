/* eslint-disable react/prop-types */
import Marquee from "../../ui/marquee";

// Images
import gallery1 from "@/assets/images/jpg/gallery1.jpg";
import gallery2 from "@/assets/images/jpg/gallery2.jpg";
import gallery3 from "@/assets/images/jpg/gallery3.jpg";
import gallery4 from "@/assets/images/jpg/gallery4.jpg";
import gallery5 from "@/assets/images/jpg/gallery5.jpg";
import gallery6 from "@/assets/images/jpg/gallery6.jpg";
import gallery7 from "@/assets/images/jpg/gallery7.jpg";
import gallery8 from "@/assets/images/jpg/gallery8.jpg";
import gallery9 from "@/assets/images/jpg/gallery9.jpg";
import gallery10 from "@/assets/images/jpg/gallery10.jpg";
import gallery11 from "@/assets/images/jpg/gallery11.jpg";
import gallery12 from "@/assets/images/jpg/gallery12.jpg";
import gallery13 from "@/assets/images/jpg/gallery13.jpg";
import gallery14 from "@/assets/images/jpg/gallery14.jpg";
import gallery15 from "@/assets/images/jpg/gallery15.jpg";
import gallery16 from "@/assets/images/jpg/gallery16.jpg";
import gallery17 from "@/assets/images/jpg/gallery17.jpg";
import gallery18 from "@/assets/images/jpg/gallery18.jpg";
import gallery19 from "@/assets/images/jpg/gallery19.jpg";
import gallery20 from "@/assets/images/jpg/gallery20.jpg";

// Use provided images for the gallery
const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
  gallery13,
  gallery14,
  gallery15,
  gallery16,
  gallery17,
  gallery18,
  gallery19,
  gallery20,
];

const firstRowImages = images.slice(0, images.length / 2);
const secondRowImages = images.slice(images.length / 2);

const ImageCard = ({ imageSrc, altText }) => {
  return (
    <div className="relative w-64 h-48 cursor-pointer overflow-hidden rounded-xl">
      <img
        src={imageSrc}
        alt={altText}
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  );
};

export function GalleryTwo() {
  return (
    <div className="relative flex h-[650px] w-full flex-col items-center justify-center overflow-hidden py-16">
      <div className="max-w-screen-xl w-full mx-auto text-center">
        <h2 className="text-red-600 text-4xl md:text-6xl font-bold mb-8 sm:mt-12 font-roboto">
          What&apos;s Happening
        </h2>
        {/* Top Marquee */}
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRowImages.map((image, index) => (
            <ImageCard
              key={`top-${index}`}
              imageSrc={image}
              altText={`Gallery Image ${index + 1}`}
            />
          ))}
        </Marquee>

        {/* Bottom Marquee with reverse */}
        <Marquee reverse pauseOnHover className="[--duration:20s] mt-8">
          {secondRowImages.map((image, index) => (
            <ImageCard
              key={`bottom-${index}`}
              imageSrc={image}
              altText={`Gallery Image ${index + 1}`}
            />
          ))}
        </Marquee>
      </div>

      {/* Fog Effect with Gradient Overlays */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[#E0F7FA] via-[#E0F7FA]/50 to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#E0F7FA] via-[#E0F7FA]/50 to-transparent"></div>
    </div>
  );
}

export default GalleryTwo;
