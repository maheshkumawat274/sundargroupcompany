const TopSection = () => {
  return (
    <section className="w-full py-4 md:py-10 px-4 md:px-16">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-gray-700">

        {/* LEFT CONTENT */}
        <div className="space-y-5">
          <div>
            <h1 className="text-2xl lg:text-4xl font-bold mb-4">Welcome to Sundar Group</h1>
            <p className="text-md lg:text-lg">Delivering excellence across multiple locations with tailored solutions for your business.</p>
          </div>
          

          <button className="px-6 py-3 bg-[#092E4B] cursor-pointer hover:underline text-white rounded-md shadow transition">
            <a
             href="https://wa.me/916376228917"
             target="_blank"
             rel="noopener noreferrer"
             >Contact Now</a>         
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full">
          <img
            src="/imgs/1728428627716.jpeg"
            alt="Affordable Pricing"
            className="w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default TopSection;