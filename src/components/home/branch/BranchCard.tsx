// import React from "react";
// import { Link } from "react-router-dom";

// /* =====================
//    TYPE
// ===================== */
// export interface Branch {
//   id: number;
//   name: string;
//   description: string;
//   heroImage: string;
//   path: string; // 👈 manual route
// }

// /* =====================
//    CARD COMPONENT
// ===================== */
// interface BranchCardProps {
//   branch: Branch;
// }

// const BranchCard: React.FC<BranchCardProps> = ({ branch }) => {
//   return (
//     <Link to={branch.path}>
//       <div
//         className="
//           relative rounded-2xl overflow-hidden
//           shadow-lg hover:shadow-2xl
//           transition-all duration-500
//           cursor-pointer group
//           hover:-translate-y-2
//         "
//       >
//         {/* Image */}
//         <img
//           src={branch.heroImage}
//           alt={branch.name}
//           className="
//             w-full h-96 object-cover
//             transition-transform duration-700
//             group-hover:scale-110
//           "
//         />

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/50 z-10" />

//         {/* Content */}
//         <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white">
//           <h3 className="text-xl font-bold uppercase tracking-wide">
//             {branch.name}
//           </h3>

//           <p className="text-sm text-gray-200 mt-2 line-clamp-2">
//             {branch.description}
//           </p>

//           <span
//             className="
//               mt-4 w-fit px-5 py-2
//               bg-white/90 text-black font-semibold text-sm
//               rounded-full shadow-md
//               hover:bg-white transition
//             "
//           >
//             Explore Now
//           </span>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default BranchCard;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Instagram, Facebook, Youtube } from "lucide-react";
import type { Branch } from "./branchdummydata/branchesdata";

interface BranchCardProps {
  branch: Branch;
  index: number;
}

export const BranchCard: React.FC<BranchCardProps> = ({
  branch,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link to={`/branch/${branch.slug}`}>
        <motion.div
          whileHover={{ y: -8 }}
          className="group h-full bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
        >
          {/* Image */}
          <div className="relative h-64 overflow-hidden bg-gray-200">
            <motion.img
              src={branch.heroImage}
              alt={branch.name}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all" />
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Badge */}
            <span
              className="inline-block mb-3 px-3 py-1 text-xs font-semibold rounded-full text-white"
              style={{ backgroundColor: branch.colors.primary }}
            >
              {branch.category}
            </span>

            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {branch.name}
            </h3>

            <p
              className="text-sm font-semibold mb-3"
              style={{ color: branch.colors.secondary }}
            >
              {branch.tagline}
            </p>

            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              {branch.shortDescription}
            </p>

            {/* CTA */}
            <div className="flex items-center gap-2 font-semibold text-sm mb-4">
              <span style={{ color: branch.colors.primary }}>
                Explore Branch
              </span>
              <motion.div whileHover={{ x: 4 }}>
                <ArrowRight
                  size={18}
                  style={{ color: branch.colors.secondary }}
                />
              </motion.div>
            </div>

            {/* SOCIALS */}
            {branch.socials && (
              <div className="pt-3 border-t flex justify-between border-gray-100">
                <p className="text-xs text-gray-500 mb-2">
                  Follow us on
                </p>

                <div className="flex items-center gap-4">
                  {branch.socials.instagram && (
                    <motion.a
                      href={branch.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      className="text-gray-500 hover:text-pink-500 transition"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Instagram size={18} />
                    </motion.a>
                  )}

                  {branch.socials.facebook && (
                    <motion.a
                      href={branch.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      className="text-gray-500 hover:text-blue-600 transition"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Facebook size={18} />
                    </motion.a>
                  )}

                  {branch.socials.youtube && (
                    <motion.a
                      href={branch.socials.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      className="text-gray-500 hover:text-red-600 transition"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Youtube size={18} />
                    </motion.a>
                  )}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};
