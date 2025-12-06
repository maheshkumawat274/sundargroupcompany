// import React from "react";
// import Slider from "react-slick";
// import BranchCard from "./BranchCard";
// import type { Branch } from "../types";

// interface BranchSliderProps {
//   branches: Branch[];
// }

// const BranchSlider: React.FC<BranchSliderProps> = ({ branches }) => {
//   const settings = {
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 2200,
//     speed: 900,
//     arrows: false,
//     pauseOnHover: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: { slidesToShow: 2 },
//       },
//       {
//         breakpoint: 640,
//         settings: { slidesToShow: 1 },
//       },
//     ],
//   };

//   return (
//     <section className="py-6 md:py-14 bg-gray-50">
//       <div className="container max-w-6xl mx-auto ">

//         {/* Heading */}
//         <h2 className="text-3xl font-bold text-center text-gray-800">
//           Our Divisions
//         </h2>
         
//           {/* ⭐ Professional Description */}
//         <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8 text-sm md:text-base">
//           Explore the diverse business verticals that shape the legacy of Sundar Group.
//         </p>

//         {/* Slider Container */}
//         <Slider {...settings}>
//           {branches.map((branch) => (
//             <div key={branch.id} className="px-4">
//               <BranchCard branch={branch} />
//             </div>
//           ))}
//         </Slider>

//       </div>
//     </section>
//   );
// };

// export default BranchSlider;

import React from "react";
import BranchCard from "./BranchCard";
import type { Branch } from "../types";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";


interface BranchSliderProps {
  branches: Branch[];
}

const BranchSlider: React.FC<BranchSliderProps> = ({ branches }) => {
  return (
    <section className="py-6 md:py-14 bg-gray-50">
      <div className="container max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Our Divisions
        </h2>

        {/* Description */}
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8 text-sm md:text-base">
          Explore the diverse business verticals that shape the legacy of Sundar Group.
        </p>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2200, disableOnInteraction: false }}
          speed={900}
          loop={true}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
        >
          {branches.map((branch) => (
            <SwiperSlide key={branch.id}>
              <div className="px-4">
                <BranchCard branch={branch} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default BranchSlider;
