const AboutDeveloper = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-16 bg-white">
      <div className="container mx-auto ">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center bg-blue-100 text-blue-900 px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium">About Sundar Developer</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Building Excellence Since 
              <span className="text-blue-900"> 2008</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-6">
              Sundar Developer, a proud member of the Sundar Group, has been at the forefront 
              of construction and real estate development for over 15 years. We specialize in 
              creating spaces that stand the test of time through quality, innovation, and integrity.
            </p>
            
            <p className="text-lg text-slate-600 mb-8">
              From residential complexes to commercial towers, from infrastructure projects to 
              turnkey solutions, we bring expertise, dedication, and a commitment to excellence 
              to every project we undertake.
            </p>

            {/* Mission & Vision */}
            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-yellow-500 pl-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Our Mission</h3>
                <p className="text-slate-600">
                  To deliver exceptional construction solutions that exceed client expectations 
                  while maintaining the highest standards of quality, safety, and sustainability.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-900 pl-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Our Vision</h3>
                <p className="text-slate-600">
                  To be the most trusted name in construction and real estate development, 
                  recognized for transforming landscapes and enriching lives through our projects.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              {['Quality First', 'Timely Delivery', 'Transparency', 'Innovation'].map((value) => (
                <div key={value} className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium text-slate-700">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600"
                alt="Construction site"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600"
                alt="Architect planning"
                className="rounded-lg shadow-lg mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112c4e5190?w=600"
                alt="Modern building"
                className="rounded-lg shadow-lg -mt-4"
              />
              <img
                src="https://images.unsplash.com/photo-1540496905036-5937c10647cc?w=600"
                alt="Team meeting"
                className="rounded-lg shadow-lg"
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-900 text-white rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-xl">
              <span className="text-3xl font-bold">15+</span>
              <span className="text-sm">Years of</span>
              <span className="text-sm">Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDeveloper;