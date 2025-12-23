import { useParams } from "react-router-dom";
import { servicesresort } from "./ResortServicesData";

const ResortServiceLandingPage = () => {
  const { slug } = useParams();

  const service = servicesresort.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="py-24 text-center text-2xl">
        Service not found
      </div>
    );
  }

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {service.heroTitle}
        </h1>

        <p className="text-xl text-gray-600 mb-10">
          {service.heroDesc}
        </p>

        {/* Extra sections (same layout, dynamic content) */}
        <div className="space-y-6 text-gray-700 text-lg">
          <p>
            Our {service.title} solutions are designed to help
            businesses grow, scale, and succeed in today’s digital world.
          </p>

          <p>
            We focus on quality, performance, and long-term value
            while ensuring a smooth and transparent process.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResortServiceLandingPage;
