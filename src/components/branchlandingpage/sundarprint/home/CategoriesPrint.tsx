import React from "react";
import { categories } from "../dataproductprint/printproductsdata";
import { Link } from "react-router-dom";

const CategoriesPrint: React.FC = () => {
  return (
    <section id="categories" className="w-full">
      
      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.slug}`}
            className="relative w-full h-[420px] md:h-[600px] overflow-hidden group"
          >
            {/* IMAGE */}
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/25" />

            {/* TEXT */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-3xl md:text-4xl font-semibold tracking-wide">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>

    </section>
  );
};

export default CategoriesPrint;
