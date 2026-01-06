import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import BranchCard from "./BranchCard";

const BranchSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -360, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 360, behavior: "smooth" });
  };

  return (
    <section className="py-6 md:py-14 bg-white px-4 md:px-16">
      <div className="mx-auto">

        {/* HEADER */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Our Divisions
            </h2>
            <p className="text-gray-600 text-sm md:text-base mt-1 max-w-md">
              Explore the diverse business verticals that shape the legacy of Sundar Group.
            </p>
          </div>

          {/* CONTROLS */}
          <div className="flex gap-2 shrink-0">
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

        {/* SLIDER */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scroll-smooth no-scrollbar px-1"
        >
          {/* 👇 BranchCard khud hi 3 cards render karega */}
          <BranchCard />
        </div>

      </div>
    </section>
  );
};

export default BranchSlider;
