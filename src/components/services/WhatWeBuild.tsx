import { Link } from 'react-router-dom';

const services = [
  {
    industry: 'Hospitality & Experiences',
    venture: 'Sundar Resort',
    description: 'Delivering exceptional hospitality experiences through thoughtful design and attentive service.',
    capabilities: ['Luxury accommodation', 'Conference facilities', 'Fine dining', 'Wellness amenities'],
  },
  {
    industry: 'Textile & Fabric Solutions',
    venture: 'Sundar Print',
    description: 'Comprehensive textile printing combining traditional craftsmanship with modern technology.',
    capabilities: ['Digital printing', 'Screen printing', 'Custom designs', 'Bulk production'],
  },
  {
    industry: 'Construction & Development',
    venture: 'Sundar Developer',
    description: 'Creating sustainable built environments through disciplined construction practices.',
    capabilities: ['Residential projects', 'Commercial buildings', 'Infrastructure', 'Project management'],
  },
];

export function DemoWhatWeBuildPage() {
  return (
    <div className="min-h-screen bg-white ">
        <section
        className="relative bg-cover bg-center py-24 px-4 md:px-16"
        style={{
          backgroundImage: "url('/imgs/Premium-villa-4.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center max-w-4xl mx-auto text-white">
          <span className="text-sm font-medium tracking-wider uppercase text-emerald-300">
            Our Capabilities
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            What We Build
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Comprehensive solutions across three business verticals, designed to meet evolving client needs.
          </p>
        </div>
      </section>
      <div className='py-10 px-4 md:px-16'>
        
        <div className="space-y-16  ">
          {services.map((service, i) => (
            <div key={i} className="border-b border-gray-100 pb-16 last:border-b-0">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase">{service.industry}</p>
                  <h2 className="text-2xl font-bold text-gray-900">{service.venture}</h2>
                </div>
                <Link to="/ventures" className="text-sm font-medium text-gray-700 hover:text-gray-900 flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl">{service.description}</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {service.capabilities.map((cap, j) => (
                  <div key={j} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                    <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/" className="px-8 py-3 bg-gray-900 text-white font-medium rounded-lg">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}