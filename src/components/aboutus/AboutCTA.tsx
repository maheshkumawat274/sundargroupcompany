
import { Link } from 'react-router-dom'

const AboutCTA = () => {
  return (
    <>
     <section className="py-16 lg:py-24">
        <div className=" mx-auto px-4 md:px-16">
          <div className="bg-gray-900 rounded-lg p-8 lg:p-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Discover Our Ventures
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Learn more about our diverse business portfolio and how we deliver 
              excellence across industries.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/ventures"
                className="px-6 py-3 bg-white text-gray-900 text-sm font-medium hover:bg-gray-100 transition-colors duration-150"
              >
                Our Ventures
              </Link>
              <Link
                to="/connect"
                className="px-6 py-3 border border-gray-600 text-white text-sm font-medium hover:bg-gray-800 transition-colors duration-150"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutCTA