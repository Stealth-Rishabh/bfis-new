import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import background from "@/assets/images/webp/bg.webp";

// Importing all student images
import air1 from "@/assets/images/webp/air1.webp";
import air2 from "@/assets/images/webp/air2.webp";
import air6 from "@/assets/images/webp/air6.webp";
import air8 from "@/assets/images/webp/air8.webp";

const StudentResults = () => {
  const students = [
    {
      rank: 1,
      name: "Ved Lahoji",
      course: "Two Year Live Interactive Online Classroom Program (XI - XII)",
      image: air1,
    },
    {
      rank: 1,
      name: "Ved Lahoji",
      course: "Two Year Live Interactive Online Classroom Program (XI - XII)",
      image: air2,
    },
    {
      rank: 2,
      name: "Aditya",
      course: "Four Year Classroom Program (IX - XII)",
      image: air6,
    },
    {
      rank: 6,
      name: "Rajdeep Mishra",
      course: "Two Year Live Interactive Online Classroom Program (XI - XII)",
      image: air8,
    },
    {
      rank: 8,
      name: "Rohan Gupta",
      course: "One Year Classroom Program (XII)",
      image: air1,
    },
    {
      rank: 5,
      name: "Amit Sharma",
      course: "Three Year Classroom Program (X - XII)",
      image: air2,
    },
    {
      rank: 3,
      name: "Sanjay Verma",
      course: "Four Year Classroom Program (IX - XII)",
      image: air6,
    },
    {
      rank: 4,
      name: "Karan Thakur",
      course: "Two Year Live Interactive Online Classroom Program (XI - XII)",
      image: air8,
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-navy-900 p-8 min-h-screen bg-newBlue">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-yellow-400 text-4xl font-bold text-center mb-2 sm:mt-12">
          THE RESULTS SPEAK FOR THEMSELVES
        </h2>
        <p className="text-white text-center mb-8">
          The secret to our students success lies in our passion, determination,
        </p>
        <div className="bg-white rounded-lg p-6">
          <Slider {...sliderSettings}>
            {students.map((student, index) => (
              <div key={index} className="p-4">
                <div
                  className="relative rounded-lg overflow-hidden bg-yellow-400 flex flex-col items-center"
                  style={{ height: "350px" }} // Set fixed height for the card
                >
                  {/* Background image */}
                  <img
                    src={background}
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ zIndex: 0 }}
                  />
                  {/* All India Rank and Rank Number */}
                  <div className="absolute top-2 left-2 z-20 text-left">
                    <p className="text-xs font-semibold">All India Rank</p>
                    <p className="text-5xl font-bold text-red-600">
                      {student.rank}
                    </p>
                  </div>
                  {/* Student image */}
                  <img
                    src={student.image}
                    alt={student.name}
                    className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full mt-16 z-10"
                  />
                  {/* Student Information */}
                  <div className="relative z-20 text-center mt-4 p-4">
                    <p className="font-semibold text-lg">{student.name}</p>
                    <p className="text-sm">{student.course}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default StudentResults;
