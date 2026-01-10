import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube } from "lucide-react";

/* =====================
   TYPE (Future API Ready)
===================== */
interface Branch {
  id: number;
  category: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  path: string; // 🔑 dynamic route
}

/* =====================
   DUMMY DATA (ARRAY)
   🔮 Future me API se aayega
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
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/647022199.jpg?k=2f17f47f10cd017d2a0b77172ff1855bb8ffec14d67e280dbb563c96d52fe9d2&o=",
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
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
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
          <Link to={branch.path}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 group">

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

                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm text-gray-500">Follow us on</span>
                  <div className="flex gap-4 text-gray-500">
                    <Instagram size={18} className="hover:text-emerald-600 transition" />
                    <Facebook size={18} className="hover:text-emerald-600 transition" />
                    <Youtube size={18} className="hover:text-emerald-600 transition" />
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
