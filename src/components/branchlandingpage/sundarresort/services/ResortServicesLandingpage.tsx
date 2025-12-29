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
    <>
      {/* TOP IMAGE (same as card) */}
      <section className="relative h-[55vh]">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-5xl mx-auto px-6 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {service.heroTitle}
            </h1>
            <p className="text-lg md:text-xl max-w-2xl">
              {service.heroDesc}
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto space-y-6 text-gray-700 text-lg">
          <p>
            Our {service.title} service is thoughtfully designed to
            provide comfort, quality, and a memorable experience.
          </p>

          <p>
            We focus on premium hospitality, modern amenities,
            and personalized service for every guest.
          </p>
        </div>
      </section>
    </>
  );
};

export default ResortServiceLandingPage;
