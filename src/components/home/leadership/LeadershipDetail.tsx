import { useParams } from "react-router-dom";
import { leadershipData } from "./Leadership";

const LeaderShipDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const leadership = leadershipData.find(
    (item) => item.slug === slug
  );

  if (!leadership) {
    return (
      <div className="py-20 text-center text-xl">
        Content not found
      </div>
    );
  }

  return (
    <section className="w-full bg-white py-16 px-4 md:px-20">
      <div className="max-w-5xl mx-auto">

        {/* IMAGE */}
        <div className="mb-10">
          <img
            src={leadership.image}
            alt={leadership.title}
            className="w-full h-[420px] object-cover rounded-xl"
          />
        </div>

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          {leadership.title}
        </h1>

        {/* DESCRIPTION */}
        <p className="text-gray-700 leading-relaxed text-lg">
          {leadership.description}
        </p>

      </div>
    </section>
  );
};

export default LeaderShipDetail;
