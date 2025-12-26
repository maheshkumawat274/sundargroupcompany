import { useParams } from "react-router-dom";
import { strategyData } from "./strategyData";

const StrategyDetail = () => {
  
  const { id } = useParams();

  const data = strategyData.find((item) => item.id === id);

  if (!data) {
    return <div className="p-20 text-center">Content not found</div>;
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">

        {/* Hero Image */}
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-[420px] object-cover mb-10"
        />

        {/* Title */}
        <h1 className="text-4xl font-light mb-6">
          {data.title}
        </h1>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed text-lg">
          {data.fullDesc}
        </p>

      </div>
    </section>
  );
};

export default StrategyDetail;
