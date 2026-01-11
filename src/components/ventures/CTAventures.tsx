
import { Link } from 'react-router-dom'

const CTAventures = () => {
  return (
    <>
     {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-lg p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Partner with Sundar Group
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Whether you're looking for hospitality services, textile solutions, 
                  or construction expertise, our ventures are ready to serve your needs 
                  with the highest standards of quality and professionalism.
                </p>
              </div>
              <div className="flex flex-wrap lg:justify-end gap-4">
                <Link
                  to="/contact-us"
                  className="px-6 py-3 bg-white text-gray-900 text-sm font-medium hover:bg-gray-100 transition-colors duration-150"
                >
                  Business Enquiry
                </Link>
                <Link
                  to="/what-we-build"
                  className="px-6 py-3 border border-gray-600 text-white text-sm font-medium hover:bg-gray-800 transition-colors duration-150"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CTAventures