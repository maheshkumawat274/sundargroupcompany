import React from "react";
import { Link } from "react-router-dom";

/* =====================
   TYPE
===================== */
export interface Branch {
  id: number;
  name: string;
  description: string;
  heroImage: string;
  path: string; // 👈 manual route
}

/* =====================
   CARD COMPONENT
===================== */
interface BranchCardProps {
  branch: Branch;
}

const BranchCard: React.FC<BranchCardProps> = ({ branch }) => {
  return (
    <Link to={branch.path}>
      <div
        className="
          relative rounded-2xl overflow-hidden
          shadow-lg hover:shadow-2xl
          transition-all duration-500
          cursor-pointer group
          hover:-translate-y-2
        "
      >
        {/* Image */}
        <img
          src={branch.heroImage}
          alt={branch.name}
          className="
            w-full h-96 object-cover
            transition-transform duration-700
            group-hover:scale-110
          "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white">
          <h3 className="text-xl font-bold uppercase tracking-wide">
            {branch.name}
          </h3>

          <p className="text-sm text-gray-200 mt-2 line-clamp-2">
            {branch.description}
          </p>

          <span
            className="
              mt-4 w-fit px-5 py-2
              bg-white/90 text-black font-semibold text-sm
              rounded-full shadow-md
              hover:bg-white transition
            "
          >
            Explore Now
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BranchCard;
