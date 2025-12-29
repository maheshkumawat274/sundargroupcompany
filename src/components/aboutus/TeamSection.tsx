

import React from "react";
import { Linkedin, Instagram, Mail } from "lucide-react";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";


const teamMembers = [
  { name: "Rahul Sharma", role: "Founder & Chairman", img: "/images/team1.jpg" },
  { name: "Pooja Verma", role: "Managing Director", img: "/images/team2.jpg" },
  { name: "Arjun Mehta", role: "Operations Head", img: "/images/team3.jpg" },
  { name: "Karan Thakur", role: "Project Lead", img: "/images/team4.jpg" },
  { name: "Sneha Kapoor", role: "Marketing Head", img: "/images/team5.jpg" },
  { name: "Vikas Rao", role: "Finance Manager", img: "/images/team6.jpg" },
];

const TeamSection: React.FC = () => {
  return (
    <section className="w-full py-8 px-4 md:px-16 bg-white">
      <div className="mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Meet Our Team
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          The people who drive innovation, lead with vision, and strengthen our legacy.
        </p>

        {/* Swiper Slider */}
        <div className="mt-14">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            speed={700}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            spaceBetween={25}
          >
            {teamMembers.map((member, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white rounded-2xl p-8 mx-3 shadow-lg border border-gray-100 
                                hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

                  {/* Profile Pic */}
                  <div className="mx-auto w-32 h-32 rounded-full p-[3px] bg-gradient-to-br from-blue-600 to-indigo-600">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>

                  {/* Name */}
                  <h3 className="mt-5 text-xl font-semibold text-gray-900">
                    {member.name}
                  </h3>

                  {/* Role */}
                  <p className="text-gray-600 text-sm md:text-base">{member.role}</p>

                  {/* Social Icons */}
                  <div className="flex items-center justify-center gap-4 mt-5">
                    <a className="p-2 rounded-full bg-blue-600/10 hover:bg-blue-600/20 transition">
                      <Linkedin className="w-5 h-5 text-blue-600" />
                    </a>

                    <a className="p-2 rounded-full bg-pink-600/10 hover:bg-pink-600/20 transition">
                      <Instagram className="w-5 h-5 text-pink-600" />
                    </a>

                    <a className="p-2 rounded-full bg-indigo-600/10 hover:bg-indigo-600/20 transition">
                      <Mail className="w-5 h-5 text-indigo-600" />
                    </a>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
