
import Slider from "react-slick";
import BranchCard, { type Branch } from "./BranchCard";

const branches: Branch[] = [
  {
    id: 1,
    name: "Sundar Resort",
    description: "Luxury stay surrounded by nature and mountains.",
    heroImage: "/imgs/JSD09255.webp",
    path: "/branch/sundar-resort",
  },
  {
    id: 2,
    name: "Sundar Print",
    description: "Peaceful environment with premium facilities.",
    heroImage: "/imgs/3JX7uE466ZoNjDth2Y5TFR.jpg",
    path: "/branch/sundar-print",
  },
  {
    id: 3,
    name: "Sundar Developer",
    description: "Peaceful environment with premium facilities.",
    heroImage: "/imgs/1721200680663.png",
    path: "/branch/sundar-developer",
  },
];


const BranchSlider = () => {

  /*
  🔮 FUTURE API CALL (commented)
  useEffect(() => {
    fetch("/api/branches")
      .then(res => res.json())
      .then(data => setBranches(data));
  }, []);
  */

  const settings = {
    infinite: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2200,
    speed: 900,
    arrows: false,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2,slidesToScroll: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1,slidesToScroll: 1, centerMode: false },
      },
    ],
  };

  return (
    <section className="py-6 md:py-14 bg-gray-50">
      <div className="container max-w-6xl mx-auto ">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Our Divisions
        </h2>
         
          {/* ⭐ Professional Description */}
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8 text-sm md:text-base">
          Explore the diverse business verticals that shape the legacy of Sundar Group.
        </p>

        {/* Slider Container */}
        <Slider {...settings}>
          {branches.map((branch) => (
            <div key={branch.id} className="px-4">
              <BranchCard branch={branch} />
            </div>
          ))}
        </Slider>
        
      </div>
    </section>
  );
};

export default BranchSlider;
