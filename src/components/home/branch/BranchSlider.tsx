import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
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
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <section className="py-6 md:py-14 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Our Divisions
            </h2>
            <p className="text-gray-600 text-sm md:text-base mt-1 max-w-md">
              Explore the diverse business verticals that shape the legacy of Sundar Group.
            </p>
          </div>

          {/* Controls (Mobile + Desktop) */}
          <div className="flex gap-2 shrink-0 ">
            <button
              onClick={scrollLeft}
              className="w-9 h-9 md:w-10 md:h-10
              flex items-center justify-center rounded-full
              bg-white shadow hover:bg-gray-100 transition"
            >
              <FiChevronLeft className="text-base md:text-xl" />
            </button>

            <button
              onClick={scrollRight}
              className="w-9 h-9 md:w-10 md:h-10
              flex items-center justify-center rounded-full
              bg-white shadow hover:bg-gray-100 transition"
            >
              <FiChevronRight className="text-base md:text-xl" />
            </button>
          </div>
        </div>

        {/* Scroll Cards */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scroll-smooth no-scrollbar px-1"
        >
          {branches.map((branch) => (
            <div
              key={branch.id}
              className="min-w-[260px] sm:min-w-[300px] md:min-w-[340px]"
            >
              <BranchCard branch={branch} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BranchSlider;
