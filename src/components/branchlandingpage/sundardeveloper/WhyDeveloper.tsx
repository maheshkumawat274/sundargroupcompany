const WhyChooseUsDeveloper = () => {
  const reasons = [
    {
      icon: '⏰',
      title: 'On-Time Delivery',
      description: 'We respect your time and ensure project completion within agreed timelines without compromising quality.'
    },
    {
      icon: '💎',
      title: 'Quality Materials',
      description: 'Premium grade materials sourced from trusted suppliers ensuring durability and longevity.'
    },
    {
      icon: '👷',
      title: 'Skilled Workforce',
      description: 'Expert engineers, architects, and skilled laborers with years of industry experience.'
    },
    {
      icon: '🔍',
      title: 'Transparent Process',
      description: 'Complete transparency in pricing, progress updates, and communication throughout the project.'
    },
    {
      icon: '✅',
      title: 'Safety Standards',
      description: 'Strict adherence to safety protocols and regulatory compliance at every construction site.'
    },
    {
      icon: '🤝',
      title: 'After-Sales Support',
      description: 'Comprehensive warranty and dedicated support even after project completion.'
    }
  ];

  return (
    <section className="py-20 px-4 md:px-16 bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center bg-blue-100 text-blue-900 px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium">Why Choose Us</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Your Trusted Partner for
              <span className="text-blue-900"> Every Project</span>
            </h2>
            
            <p className="text-xl text-slate-600 mb-8">
              With over 500+ successful projects and a legacy of trust, 
              Sundar Developer stands as your reliable construction partner.
            </p>

            {/* Key Statistics */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-blue-900 mb-2">98%</div>
                <div className="text-sm text-slate-600">Client Retention Rate</div>
              </div>
              <div className="bg-slate-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-blue-900 mb-2">15+</div>
                <div className="text-sm text-slate-600">Years of Excellence</div>
              </div>
              <div className="bg-slate-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-blue-900 mb-2">500+</div>
                <div className="text-sm text-slate-600">Projects Delivered</div>
              </div>
              <div className="bg-slate-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-blue-900 mb-2">24/7</div>
                <div className="text-sm text-slate-600">Customer Support</div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center bg-yellow-500 text-slate-900 px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors font-semibold"
            >
              Start Your Project
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right Content - Reasons Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-4">{reason.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsDeveloper;