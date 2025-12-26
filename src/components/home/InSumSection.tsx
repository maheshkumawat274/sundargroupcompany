import React from "react";

const InSumSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-10 px-4 md:px-16">
      <h2 className="text-[#345570] text-4xl md:text-5xl font-semibold mb-4">
            In Sum
          </h2>

      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Section */}
        <div className="flex flex-col gap-6">
          
          {/* Optional Image / Placeholder */}
          <div className="w-full">
            <img
              src="/imgs/Agustin_Vásquez_Gómez,_chairperson_of_OPCW's_Fourth_Review_Conference,_2018.jpg"// replace with your image
              alt="In Sum"
              className="w-full object-contain opacity-90"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="text-gray-700 text-base leading-relaxed space-y-6">
          <p>
            We transcend the conventional boundaries of business because we care.
            Slowly and silently, along with the Government, our Group is trying
            to change the face of villages. From abject poverty to meeting the
            necessities of life—from dependency to freedom—from backwardness
            to progress—in more ways than one.
          </p>

          <p>
            There is a palpable difference. Tens of thousands of villagers now
            seem self-assured, confident and happy at being able to move towards
            a sustainable livelihood. There is newfound dignity among them.
          </p>

          <p>
            At <span className="text-[#345570] font-medium">Our Group</span>, our
            <span className="text-[#345570] font-medium">
              {" "}Corporate Social Responsibility (CSR)
            </span>{" "}
            initiatives are an integral part of this journey. For all of us,
            every project when successfully executed brings a humble sense of
            happiness—a way of living our values. Above all, playing a leadership
            role even as a respectable, caring corporate citizen.
          </p>

          <p>
            While we work in our own small way, we know that much more needs to be
            done, given our country and its magnitude.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InSumSection;
