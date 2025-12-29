import { processSteps } from "./data/mockdata";


const ConstructionProcess = () => {
  return (
    <section id="process" className="py-20 px-4 md:px-16 bg-white">
      <div className="container mx-auto ">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-900 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium">Our Process</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Systematic Approach to
            <span className="text-blue-900"> Construction Excellence</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our proven 5-step process ensures quality, transparency, and 
            successful project delivery every single time.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200"></div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {processSteps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Step Card */}
                <div className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-shadow relative z-10">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-yellow-500 text-slate-900 rounded-full flex items-center justify-center font-bold text-sm">
                    {step.order}
                  </div>
                  
                  {/* Icon */}
                  <div className="text-5xl mb-4 mt-4">{step.icon}</div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-slate-600 text-sm">
                    {step.description}
                  </p>
                </div>

                {/* Mobile Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-4 mb-4">
                    <div className="w-0.5 h-8 bg-blue-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-blue-900 text-white rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Quality at Every Step
              </h3>
              <p className="text-blue-100 mb-6">
                Our systematic approach ensures that every project meets the highest 
                standards of quality, safety, and client satisfaction. From initial 
                planning to final handover, we maintain strict quality controls and 
                transparent communication.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-blue-100">Regular progress updates and site visits</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-blue-100">Dedicated project manager for each project</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-blue-100">Comprehensive warranty and after-sales support</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-800 rounded-lg p-8 text-center">
              <div className="text-6xl font-bold text-yellow-400 mb-4">100%</div>
              <div className="text-2xl text-white mb-2">Quality Assured</div>
              <div className="text-blue-200">
                Every project undergoes rigorous quality checks
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructionProcess;