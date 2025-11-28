import React from "react";
import { Link } from "react-router-dom";
import type { Branch } from "../types";

interface BranchCardProps {
  branch: Branch;
}

const BranchCard: React.FC<BranchCardProps> = ({ branch }) => {
  return (
    <Link to={`/branch/${branch.slug}`}>
      <div className="relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">

        {/* Image */}
        <img
          src={branch.heroImage}
          alt={branch.name}
          className="w-full h-96 object-cover"
        />

        {/* Bottom Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/100 to-transparent z-30">

          {/* Title */}
          <h3 className="text-lg font-extrabold text-white uppercase">
            {branch.name}
          </h3>

          {/* Subtitle */}
          <p className="text-sm text-gray-200">
            {branch.description}
          </p>

        </div>
      </div>
    </Link>
  );
};

export default BranchCard;
