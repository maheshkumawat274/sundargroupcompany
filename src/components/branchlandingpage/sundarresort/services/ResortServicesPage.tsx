import { Link } from "react-router-dom";
import { servicesresort } from "./ResortServicesData";

const ResortServicesPage = () => {
  return (
    <section className="py-12 px-4 md:px-16 bg-[#f9fafb]">
      <div className="mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
  Amenities & Facilities
</h2>

<p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
  <span className="block font-medium text-gray-800 mb-1">
    Everyday comforts, quietly taken care of.
  </span>
  Facilities at Sundar Resort are intentionally understated – focused on what
  guests genuinely use and appreciate, maintained with consistency and care.
</p>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesresort.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden
              hover:shadow-2xl transition flex flex-col"
            >
              {/* Card Image */}
              <img
                src={service.image}
                alt={service.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-8 flex flex-col justify-between flex-1">
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
                  className="mt-6 inline-block text-emerald-600 font-semibold
                  border-b border-emerald-600 w-fit"
                >
                  View More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResortServicesPage;
