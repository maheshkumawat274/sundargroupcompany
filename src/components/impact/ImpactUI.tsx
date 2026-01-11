import { Link } from 'react-router-dom';

export function ImpactUI() {
  return (
    <div className="">
      {/* Page Header */}
      <section
        className="relative bg-cover bg-center py-24 px-4 md:px-16"
        style={{
          backgroundImage: "url('/imgs/Premium-villa-4.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center max-w-4xl mx-auto text-white">
          <span className="text-sm font-medium tracking-wider uppercase text-emerald-300">
            Our Impact
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            Culture & Legacy
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Building a sustainable future through responsible business practices and meaningful contributions to our communities.
          </p>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-10 lg:py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gray-100 rounded-lg aspect-[4/3] flex items-center justify-center">
                <img src='https://static.investindia.gov.in/s3fs-public/2020-12/shutterstock_1262330791.jpg' className='w-full h-full rounded-md object-cover'/>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Company Culture
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  At Sundar Group, our culture is built on a foundation of mutual 
                  respect, continuous learning, and shared purpose. We believe that 
                  a positive work environment fosters innovation, productivity, and 
                  long-term success.
                </p>
                <p>
                  Our employees are our greatest asset. We invest in their growth, 
                  provide opportunities for development, and maintain an inclusive 
                  workplace where diverse perspectives are valued.
                </p>
                <p>
                  We promote open communication, recognize achievements, and 
                  encourage collaboration across departments and ventures. This 
                  approach has helped us build a loyal, high-performing team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-10 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Milestones
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key moments that have shaped our journey and defined our growth.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { year: '2009', title: 'Foundation', description: 'Sundar Group was established with a vision for diversified growth.' },
              { year: '2012', title: 'Textile Entry', description: 'Launched Sundar Print, entering the textile printing industry.' },
              { year: '2016', title: 'Hospitality Launch', description: 'Opened Sundar Resort, marking our entry into hospitality.' },
              { year: '2020', title: 'Construction Growth', description: 'Expanded with Sundar Developer into construction and real estate.' },
            ].map((milestone, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-100">
                <div className="text-3xl font-bold text-gray-900 mb-3">{milestone.year}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-10 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Trust Indicators
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The measures that reflect our commitment to excellence and reliability.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Team Members', description: 'Dedicated professionals across our ventures' },
              { value: '10K+', label: 'Customers Served', description: 'Clients who have trusted our services' },
              { value: '15+', label: 'Years of Excellence', description: 'Consistent quality and growth' },
              { value: '3', label: 'Industries', description: 'Diverse business verticals' },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </div>
                <p className="text-sm text-gray-600">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values & Vision */}
      <section className="py-10 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Our Values
              </h2>
              <div className="space-y-6">
                {[
                  { title: 'Integrity', description: 'Honesty and transparency in all dealings.' },
                  { title: 'Quality', description: 'Commitment to excellence in every deliverable.' },
                  { title: 'Innovation', description: 'Embracing new ideas and continuous improvement.' },
                  { title: 'Respect', description: 'Valuing people and diverse perspectives.' },
                ].map((value, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{value.title}</h3>
                      <p className="text-sm text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Long-term Vision
              </h2>
              <div className="bg-white p-8 rounded-lg border border-gray-100">
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Looking ahead, Sundar Group remains committed to sustainable growth 
                  and meaningful impact. We aim to expand our presence while maintaining 
                  the values and standards that have defined our journey.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Our vision extends beyond business success to creating positive 
                  change in the communities we serve. We continue to invest in our 
                  people, capabilities, and partnerships to build a lasting legacy.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  As we grow, we remain grounded in the principles that brought us 
                  here—quality, integrity, and a genuine commitment to serving others.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-lg p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Join Our Team
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  We're always looking for talented individuals who share our commitment 
                  to excellence and want to be part of a growing organization with a 
                  strong values foundation.
                </p>
              </div>
              <div className="flex flex-wrap lg:justify-end gap-4">
                <Link
                  to="/connect"
                  className="px-6 py-3 bg-white text-gray-900 text-sm font-medium hover:bg-gray-100 transition-colors duration-150"
                >
                  View Open Positions
                </Link>
                <Link
                  to="/group"
                  className="px-6 py-3 border border-gray-600 text-white text-sm font-medium hover:bg-gray-800 transition-colors duration-150"
                >
                  Learn About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
