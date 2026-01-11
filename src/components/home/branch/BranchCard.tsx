import React from "react";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

/* =====================
   TYPE
===================== */
interface Branch {
  id: number;
  category: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  path: string;
}

/* =====================
   DATA
===================== */
const branchData: Branch[] = [
  {
    id: 1,
    category: "Hospitality",
    name: "Sundar Resort",
    tagline: "Nature's Haven, Luxury Redefined",
    description:
      "A premium resort experience surrounded by nature, offering luxury stays, events, and unforgettable hospitality.",
    heroImage:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800",
    path: "/branch/sundar-resort",
  },
  {
    id: 2,
    category: "Textile Printing",
    name: "Sundar Print",
    tagline: "Crafting Elegance in Every Thread",
    description:
      "Specializing in high-quality saree and textile printing with precision craftsmanship, vibrant colors, and modern techniques.",
    heroImage:
      "https://tiimg.tistatic.com/fp/1/008/297/ladies-machine-embroidery-silk-saree-for-party-wear-069.jpg",
    path: "/branch/sundar-print",
  },
  {
    id: 3,
    category: "Construction & Development",
    name: "Sundar Developer",
    tagline: "Building Trust, Shaping Tomorrow",
    description:
      "A trusted name in construction and real estate development, delivering residential and commercial projects with quality and integrity.",
    heroImage:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    path: "/branch/sundar-developer",
  },
];

/* =====================
   COMPONENT
===================== */
const BranchCard: React.FC = () => {
  return (
    <div className="flex gap-5">
      {branchData.map((branch) => (
        <div
          key={branch.id}
          className="min-w-[270px] sm:min-w-[300px] md:min-w-[360px]"
        >
          {/* CARD CLICK → NEW TAB */}
          <Link
            to={branch.path}
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 group cursor-pointer">

              {/* IMAGE */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={branch.heroImage}
                  alt={branch.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* CONTENT */}
              <div className="p-3 space-y-4">
                <span className="inline-block px-4 py-1 text-sm font-semibold rounded-full bg-emerald-600 text-white">
                  {branch.category}
                </span>

                <h3 className="text-2xl font-bold text-gray-900">
                  {branch.name}
                </h3>

                <p className="text-emerald-600 font-medium">
                  {branch.tagline}
                </p>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {branch.description}
                </p>

                <div className="flex items-center gap-2 text-emerald-600 font-semibold pt-2">
                  <span>Explore Branch</span>
                  <span className="text-xl">→</span>
                </div>

                <hr />

                {/* SOCIAL ICONS */}
                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm text-gray-500">Follow us on</span>

                  <div className="flex gap-4">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram
                        size={18}
                        className="text-pink-600 hover:scale-110 transition"
                      />
                    </a>

                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook
                        size={18}
                        className="text-blue-600 hover:scale-110 transition"
                      />
                    </a>

                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Youtube
                        size={18}
                        className="text-red-600 hover:scale-110 transition"
                      />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BranchCard;
