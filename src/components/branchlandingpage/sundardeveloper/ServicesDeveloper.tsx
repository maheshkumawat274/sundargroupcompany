import { services } from "./data/mockdata";


const ServicesDeveloper = () => {
  return (
    <section id="services" className="py-20 px-4 md:px-16 bg-white">
      <div className="container mx-auto ">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-900 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Comprehensive Construction
            <span className="text-blue-900"> Solutions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From concept to completion, we offer end-to-end construction services 
            tailored to meet your specific needs and exceed expectations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white border border-slate-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:border-blue-900"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <div className="mt-6 pt-6 border-t border-slate-100">
                <a
                  href="#contact"
                  className="inline-flex items-center text-blue-900 font-medium hover:text-yellow-500 transition-colors"
                >
                  Get Started
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-slate-600 mb-6">
            Need a custom solution? We're here to help!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-blue-900 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors font-semibold"
          >
            Discuss Your Project
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesDeveloper;