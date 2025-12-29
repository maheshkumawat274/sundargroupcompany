const HeroDeveloper = () => {
  return (
    <section id="home" className="relative pt-20 min-h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium">✨ Trusted by 500+ Happy Families</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Building Trust.
            <br />
            <span className="text-yellow-400">Delivering Excellence.</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Your trusted partner in residential & commercial construction. 
            With over 15 years of expertise, we transform visions into reality 
            through quality craftsmanship and innovative solutions.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-10 max-w-lg">
            <div>
              <div className="text-3xl font-bold text-yellow-400">15+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400">500+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400">100%</div>
              <div className="text-sm text-gray-400">Client Satisfaction</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center bg-yellow-500 text-slate-900 px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors font-semibold text-lg"
            >
              View Projects
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-slate-900 transition-colors font-semibold text-lg"
            >
              Get Consultation
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroDeveloper;