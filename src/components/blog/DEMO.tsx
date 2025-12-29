import { Link } from 'react-router-dom';

const insights = [
  {
    id: 1,
    category: 'Company News',
    title: 'Sundar Group Announces Expansion Plans for 2025',
    excerpt: 'We are pleased to share our strategic vision for growth across all business verticals in the coming year.',
    date: 'December 15, 2024',
    readTime: '3 min read',
  },
  {
    id: 2,
    category: 'Industry Insights',
    title: 'Sustainable Practices in Textile Manufacturing',
    excerpt: 'Exploring how modern textile printing is embracing eco-friendly methods and materials.',
    date: 'November 28, 2024',
    readTime: '5 min read',
  },
  {
    id: 3,
    category: 'Hospitality',
    title: 'The Future of Guest Experiences in Resort Hospitality',
    excerpt: 'Trends and innovations shaping how guests interact with resort destinations.',
    date: 'November 10, 2024',
    readTime: '4 min read',
  },
  {
    id: 4,
    category: 'Construction',
    title: 'Building for Tomorrow: Sustainable Development Practices',
    excerpt: 'How construction projects are incorporating sustainability into every phase.',
    date: 'October 22, 2024',
    readTime: '6 min read',
  },
  {
    id: 5,
    category: 'Company News',
    title: 'Sundar Resort Wins Customer Excellence Award',
    excerpt: 'Recognition for outstanding service and guest satisfaction in hospitality.',
    date: 'October 5, 2024',
    readTime: '2 min read',
  },
  {
    id: 6,
    category: 'Thought Leadership',
    title: 'Diversification as a Business Strategy',
    excerpt: 'Lessons learned from building a multi-industry enterprise.',
    date: 'September 18, 2024',
    readTime: '7 min read',
  },
];

const categories = [
  { name: 'All Updates', count: 12 },
  { name: 'Company News', count: 4 },
  { name: 'Industry Insights', count: 3 },
  { name: 'Hospitality', count: 2 },
  { name: 'Construction', count: 2 },
  { name: 'Thought Leadership', count: 1 },
];

export function Blogdemo() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-gray-500 tracking-wider uppercase mb-3">
            Latest Updates
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            News, perspectives, and updates from across Sundar Group and our ventures.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-150 ${
                  index === 0
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-70">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight) => (
              <article
                key={insight.id}
                className="group bg-white rounded-lg border border-gray-100 overflow-hidden hover:border-gray-200 transition-colors duration-150"
              >
                <div className="aspect-[16/9] bg-gray-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                  </div>
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white text-xs font-medium text-gray-700 rounded">
                    {insight.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span>{insight.date}</span>
                    <span>•</span>
                    <span>{insight.readTime}</span>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-150">
                    {insight.title}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {insight.excerpt}
                  </p>
                  <button className="text-sm font-medium text-gray-900 hover:text-gray-700 flex items-center">
                    Read more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Stay Informed
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to receive updates, insights, and announcements from Sundar Group.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 text-sm focus:outline-none focus:border-gray-900"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors duration-150"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Archive Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
            Archive
          </h2>
          <div className="border-t border-gray-100">
            {[
              { month: 'August 2024', items: 3 },
              { month: 'July 2024', items: 2 },
              { month: 'June 2024', items: 4 },
              { month: 'May 2024', items: 3 },
            ].map((archive, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-4 border-b border-gray-100"
              >
                <span className="text-base font-medium text-gray-900">{archive.month}</span>
                <span className="text-sm text-gray-500">{archive.items} articles</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Connect with Us
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Have questions or want to learn more about our ventures? We'd love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/connect"
              className="px-6 py-3 bg-white text-gray-900 text-sm font-medium hover:bg-gray-100 transition-colors duration-150"
            >
              Contact Us
            </Link>
            <Link
              to="/ventures"
              className="px-6 py-3 border border-gray-600 text-white text-sm font-medium hover:bg-gray-800 transition-colors duration-150"
            >
              Our Ventures
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
