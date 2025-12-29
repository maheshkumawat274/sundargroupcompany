const SafetyCompliance = () => {
  const safetyFeatures = [
    {
      icon: '🛡️',
      title: 'Safety First Approach',
      items: [
        'Personal protective equipment for all workers',
        'Regular safety training and drills',
        'Emergency response protocols',
        'Accident prevention measures'
      ]
    },
    {
      icon: '📋',
      title: 'Quality Standards',
      items: [
        'ISO certified processes',
        'Material quality testing',
        'Structural integrity checks',
        'Environmental compliance'
      ]
    },
    {
      icon: '✅',
      title: 'Regulatory Compliance',
      items: [
        'Building code adherence',
        'Legal documentation',
        'Government approvals',
        'Insurance coverage'
      ]
    }
  ];

  const certifications = [
    'ISO 9001:2015',
    'ISO 45001:2018',
    'Green Building Certified',
    'RERA Registered'
  ];

  return (
    <section className="py-20 px-4 md:px-16 bg-slate-50">
      <div className="container mx-auto ">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-900 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium">Safety & Compliance</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Committed to <span className="text-blue-900">Safety & Quality</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We maintain the highest standards of safety and comply with all 
            regulatory requirements to ensure peace of mind for our clients.
          </p>
        </div>

        {/* Safety Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {safetyFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {feature.title}
              </h3>
              <ul className="space-y-3">
                {feature.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-blue-900 rounded-2xl p-8 lg:p-12 text-white">
          <h3 className="text-3xl font-bold mb-8 text-center">
            Our Certifications & Registrations
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-blue-800 rounded-lg p-6 text-center">
                <div className="text-4xl mb-3">🏆</div>
                <div className="font-semibold">{cert}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Safety Stats */}
        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold text-blue-900 mb-2">Zero</div>
            <div className="text-xl text-slate-700">Major Accidents</div>
            <div className="text-slate-600">In last 5 years</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-blue-900 mb-2">100%</div>
            <div className="text-xl text-slate-700">Compliance Rate</div>
            <div className="text-slate-600">With safety standards</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-blue-900 mb-2">24/7</div>
            <div className="text-xl text-slate-700">Safety Monitoring</div>
            <div className="text-slate-600">At all project sites</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyCompliance;