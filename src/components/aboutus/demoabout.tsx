import { Link } from 'react-router-dom';

export function GroupPage() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-gray-500 tracking-wider uppercase mb-3">
            About Sundar Group
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Story & Legacy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Building a legacy of excellence across multiple industries through 
            unwavering commitment to quality, innovation, and stakeholder value.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Group Overview
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Sundar Group is a diversified enterprise with a strong presence 
                  in Hospitality, Textile Printing, and Construction & Development. 
                  Founded on the principles of integrity, quality, and continuous 
                  improvement, we have grown from a single venture to a multi-industry leader.
                </p>
                <p>
                  Our portfolio companies operate with a shared vision of delivering 
                  exceptional value to our customers, partners, and communities. 
                  Each venture is built on a foundation of expertise, innovation, 
                  and a commitment to excellence that defines the Sundar Group identity.
                </p>
                <p>
                  Today, we stand as a testament to what disciplined growth and 
                  unwavering standards can achieve. Our businesses complement each 
                  other, creating synergies that benefit all stakeholders while 
                  maintaining the independence and focus needed for success.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-gray-50 rounded-lg p-6 lg:p-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  At a Glance
                </h3>
                <ul className="space-y-4">
                  <li className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Founded</span>
                    <span className="font-medium text-gray-900">2009</span>
                  </li>
                  <li className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Headquarters</span>
                    <span className="font-medium text-gray-900">India</span>
                  </li>
                  <li className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Industries</span>
                    <span className="font-medium text-gray-900">3</span>
                  </li>
                  <li className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Team Members</span>
                    <span className="font-medium text-gray-900">500+</span>
                  </li>
                  <li className="flex justify-between py-2">
                    <span className="text-gray-600">Presence</span>
                    <span className="font-medium text-gray-900">Regional</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Vision & Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our decisions, actions, and relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be a trusted leader across industries, delivering sustainable 
                value through excellence in every endeavor while contributing 
                positively to the communities we serve.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Quality First
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We maintain the highest standards in everything we do. Quality 
                is not just a goal but a fundamental expectation that shapes 
                our processes, products, and relationships.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Partnership
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in building lasting relationships based on trust, 
                mutual respect, and shared success. Our partners and customers 
                are at the center of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Leadership Philosophy
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  At Sundar Group, leadership is not about titles or positions—it's 
                  about responsibility, accountability, and leading by example. Our 
                  leadership philosophy is built on the belief that true leaders 
                  serve their teams, support their partners, and stewarding resources 
                  with care and foresight.
                </p>
                <p>
                  We prioritize long-term thinking over short-term gains. Decisions 
                  are made with consideration for their lasting impact on our 
                  employees, customers, communities, and the environment.
                </p>
                <p>
                  Our leaders are committed to fostering a culture of openness, 
                  continuous learning, and ethical conduct. We encourage initiative 
                  while maintaining the discipline needed to deliver consistent results.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg aspect-[4/3] flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <p className="text-gray-500 text-sm">Leadership Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy & Growth */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Legacy & Growth
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A journey of consistent growth driven by strategic vision and operational excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { year: '2009', title: 'Foundation', description: 'Started with a vision to create value across industries.' },
              { year: '2012', title: 'First Expansion', description: 'Ventured into textile printing with state-of-the-art facilities.' },
              { year: '2016', title: 'Hospitality', description: 'Launched Sundar Resort to serve the hospitality sector.' },
              { year: '2020', title: 'Construction', description: 'Expanded into construction and real estate development.' },
            ].map((milestone, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-100">
                <div className="text-3xl font-bold text-gray-900 mb-2">{milestone.year}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                <p className="text-sm text-gray-600">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-lg p-8 lg:p-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Discover Our Ventures
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Learn more about our diverse business portfolio and how we deliver 
              excellence across industries.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/ventures"
                className="px-6 py-3 bg-white text-gray-900 text-sm font-medium hover:bg-gray-100 transition-colors duration-150"
              >
                Our Ventures
              </Link>
              <Link
                to="/connect"
                className="px-6 py-3 border border-gray-600 text-white text-sm font-medium hover:bg-gray-800 transition-colors duration-150"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}