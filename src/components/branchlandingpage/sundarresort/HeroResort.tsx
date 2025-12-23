

const HeroResort = () => {
  return (
    <>
     <section className="relative h-screen w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&h=1080&fit=crop)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
        
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div data-aos="fade-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-6">
              Sundar Resort
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light tracking-wide">
              A peaceful destination for comfort and relaxation
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroResort