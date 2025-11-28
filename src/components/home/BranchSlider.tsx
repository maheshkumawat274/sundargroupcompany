import React from "react";
import BranchCard from "./BranchCard";
import type { Branch } from "../types";

interface BranchSliderProps {
  branches: Branch[];
}

const BranchSlider: React.FC<BranchSliderProps> = ({ branches }) => {
  return (
    <section className="py-14  bg-gray-50">
      <div className="container max-w-5xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Branches
        </h2>

        {/* Responsive Grid — 1 / 2 / 3 Cards */}
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-8 
            place-items-center
          "
        >
          {branches.map((branch) => (
            <div key={branch.id} className="w-full max-w-sm">
              <BranchCard branch={branch} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BranchSlider;
