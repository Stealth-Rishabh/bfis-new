import BFIS_Banner from "@/assets/video.mp4";
import BFIS_Banner_Mobile from "@/assets/bfis_mobile.mp4";

const HeroVideo = () => {
  return (
    <section className="relative w-full">
      {/* Video for mobile */}
      <div className="block md:hidden h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={BFIS_Banner_Mobile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Video for desktop */}
      <div className="hidden md:block h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
        >
          <source src={BFIS_Banner} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default HeroVideo;
