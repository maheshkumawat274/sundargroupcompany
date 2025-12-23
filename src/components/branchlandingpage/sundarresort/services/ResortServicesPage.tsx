import { Link } from "react-router-dom";
import { servicesresort } from "./ResortServicesData";

const ResortServicesPage = () => {
  return (
    <section className="py-24 px-6 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesresort.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.shortDesc}
                </p>
              </div>

              <Link
                to={`/services-resort/${service.slug}`}
                className="mt-6 inline-block text-emerald-600 font-semibold border-b border-emerald-600 w-fit"
              >
                View More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResortServicesPage;
