
const CompanyOverview = () => {
  return (
    <>
     {/* Overview Section */}
      <section className="pb-16 px-4 md:px-16">
        <div className="mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Company Overview
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
    </>
  )
}

export default CompanyOverview