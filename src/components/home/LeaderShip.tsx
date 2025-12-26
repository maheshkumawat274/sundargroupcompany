import React from "react";

type Card = {
  title: string;
  image: string;
};

const cards: Card[] = [
  {
    title: "Establishing a foundation of success",
    image: "/imgs/Complete-list-of-ICC-chairman.webp", // left image
  },
  {
    title:
      "Chairman, Mr. Kumar Mangalam Birla’s speech at 78th AGM of Grasim Industries Limited",
    image: "/imgs/Agustin_Vásquez_Gómez,_chairperson_of_OPCW's_Fourth_Review_Conference,_2018.jpg", // right image
  },
];

const LegacyLeadership: React.FC = () => {
  return (
    <section className="w-full bg-white py-10 px-4 md:px-16">
      <div className="mx-auto">
        
        {/* SECTION HEADER */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Legacy & Leadership
          </h2>
          <p className="text-gray-700 mt-2 text-lg">
            Our force of success
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative h-[420px] overflow-hidden group"
            >
              {/* BACKGROUND IMAGE */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* DARK GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* CONTENT */}
              <div className="absolute bottom-0 p-6 text-white z-10">
                <h3 className="text-xl md:text-2xl font-light leading-snug max-w-md">
                  {card.title}
                </h3>

                <button className="mt-4 flex items-center gap-2 text-sm uppercase tracking-wide opacity-80 hover:opacity-100 transition">
                  Click to Read More
                  <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LegacyLeadership;
