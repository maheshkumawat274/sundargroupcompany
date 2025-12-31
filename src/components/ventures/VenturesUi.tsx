import { Link } from 'react-router-dom';

const ventures = [
  {
    id: 'resort',
    name: 'Sundar Resort',
    description: 'Hospitality & Experiences',
    fullDescription: 'Sundar Resort represents our commitment to exceptional hospitality. We create memorable experiences for our guests through world-class amenities, attentive service, and a focus on comfort and relaxation.',
    features: ['Luxury Accommodations', 'Conference Facilities', 'Fine Dining', 'Wellness & Spa'],
    imageAlt: 'Sundar Resort - Hospitality',
    color: 'emerald',
  },
  {
    id: 'print',
    name: 'Sundar Print',
    description: 'Textile & Fabric Solutions',
    fullDescription: 'Sundar Print is a leader in textile printing and fabric solutions. We combine traditional craftsmanship with modern technology to deliver high-quality printing services for diverse applications.',
    features: ['Digital Printing', 'Screen Printing', 'Custom Designs', 'Bulk Production'],
    imageAlt: 'Sundar Print - Textile Printing',
    color: 'amber',
  },
  {
    id: 'developer',
    name: 'Sundar Developer',
    description: 'Construction & Development',
    fullDescription: 'Sundar Developer brings visions to life through thoughtful construction and development. We specialize in creating sustainable, functional spaces that meet the evolving needs of modern communities.',
    features: ['Residential Projects', 'Commercial Buildings', 'Infrastructure', 'Project Management'],
    imageAlt: 'Sundar Developer - Construction',
    color: 'slate',
  },
];

export function VenturesUI() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-gray-50 py-16 px-4 md:px-16">
        <div className="mx-auto">
          <p className="text-sm font-medium text-gray-500 tracking-wider uppercase mb-3">
            Our Portfolio
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Sundar Ventures
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Three distinct business verticals, each driven by expertise, innovation, 
            and a shared commitment to excellence.
          </p>
        </div>
      </section>

      {/* Ventures Grid */}
      <section className="py-16 px-4 md:px-16">
        <div className="mx-auto ">
          <div className="space-y-16">
            {ventures.map((venture, index) => (
              <div
                key={venture.id}
                id={venture.id}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Image/Visual Section */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`aspect-[4/3] bg-${venture.color}-100 rounded-lg overflow-hidden`}>
                    <div className={`w-full h-full bg-${venture.color}-200 flex items-center justify-center`}>
                      <div className="text-center">
                        <div className={`w-16 h-16 bg-${venture.color}-300 rounded-full mx-auto mb-4 flex items-center justify-center`}>
                          <svg className={`w-8 h-8 text-${venture.color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <p className="text-sm text-gray-500">{venture.imageAlt}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-3 h-3 bg-${venture.color}-500 rounded-full`} />
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                      {venture.description}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    {venture.name}
                  </h2>
                  
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {venture.fullDescription}
                  </p>

                  {/* Features List */}
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">
                      Key Capabilities
                    </h3>
                    <ul className="grid grid-cols-2 gap-3">
                      {venture.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-700">
                          <svg className={`w-5 h-5 mr-2 text-${venture.color}-500`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/connect"
                    className={`inline-flex items-center px-6 py-3 bg-${venture.color}-600 text-white text-sm font-medium hover:bg-${venture.color}-700 transition-colors duration-150`}
                  >
                    Enquire About {venture.name}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unified Excellence Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto px-4 md:px-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Unified Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              While each venture operates independently, they share the same commitment 
              to quality, innovation, and customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance</h3>
              <p className="text-sm text-gray-600">
                Consistent standards across all ventures ensuring reliable outcomes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation Driven</h3>
              <p className="text-sm text-gray-600">
                Continuous improvement and adoption of best practices.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Value Creation</h3>
              <p className="text-sm text-gray-600">
                Delivering meaningful value to all stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-lg p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Partner with Sundar Group
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Whether you're looking for hospitality services, textile solutions, 
                  or construction expertise, our ventures are ready to serve your needs 
                  with the highest standards of quality and professionalism.
                </p>
              </div>
              <div className="flex flex-wrap lg:justify-end gap-4">
                <Link
                  to="/connect"
                  className="px-6 py-3 bg-white text-gray-900 text-sm font-medium hover:bg-gray-100 transition-colors duration-150"
                >
                  Business Enquiry
                </Link>
                <Link
                  to="/what-we-build"
                  className="px-6 py-3 border border-gray-600 text-white text-sm font-medium hover:bg-gray-800 transition-colors duration-150"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}