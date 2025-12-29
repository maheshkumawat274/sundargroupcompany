import React from "react";
import {
  FaHiking,
  FaFire,
  FaTree,
  FaMapMarkedAlt,
  FaGamepad,
} from "react-icons/fa";

type Activity = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const activities: Activity[] = [
  {
    id: 1,
    title: "Trekking",
    description:
      "Explore scenic trails and experience breathtaking views with guided trekking adventures.",
    icon: <FaHiking />,
  },
  {
    id: 2,
    title: "Campfire Nights",
    description:
      "Relax under the stars with cozy campfire evenings, music, and memorable conversations.",
    icon: <FaFire />,
  },
  {
    id: 3,
    title: "Nature Walks",
    description:
      "Reconnect with nature through peaceful walks surrounded by greenery and fresh air.",
    icon: <FaTree />,
  },
  {
    id: 4,
    title: "Local Sightseeing",
    description:
      "Discover nearby attractions, culture, and landmarks with curated sightseeing tours.",
    icon: <FaMapMarkedAlt />,
  },
  {
    id: 5,
    title: "Indoor Games",
    description:
      "Enjoy a range of indoor games designed for families, kids, and group entertainment.",
    icon: <FaGamepad />,
  },
];

const ActivitiesExperienceResort: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Activities & Experiences
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Indulge in thoughtfully curated experiences designed to relax,
            refresh, and inspire unforgettable memories.
          </p>
        </div>

        {/* ACTIVITIES GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* ICON */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-2xl mb-6 group-hover:scale-110 transition-transform">
                {activity.icon}
              </div>

              {/* CONTENT */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {activity.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesExperienceResort;
