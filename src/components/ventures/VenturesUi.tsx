import { Link } from 'react-router-dom';

type ColorKey = 'emerald' | 'amber' | 'slate';

interface Venture {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  features: string[];
  image: string;
  imageAlt: string;
  color: ColorKey;
  path: string;
}

const ventures: Venture[] = [
  {
    id: 'resort',
    name: 'Sundar Resort',
    description: 'Hospitality & Experiences',
    fullDescription:
      'Sundar Resort represents our commitment to exceptional hospitality. We create memorable experiences for our guests through world-class amenities, attentive service, and a focus on comfort and relaxation.',
    features: ['Luxury Accommodations', 'Conference Facilities', 'Fine Dining', 'Wellness & Spa'],
    image: '/imgs/Premium-villa-4.webp',
    imageAlt: 'Sundar Resort',
    color: 'emerald',
    path: '/branch/sundar-resort',
  },
  {
    id: 'print',
    name: 'Sundar Print',
    description: 'Textile & Fabric Solutions',
    fullDescription:
      'Sundar Print is a leader in textile printing and fabric solutions. We combine traditional craftsmanship with modern technology to deliver high-quality printing services for diverse applications.',
    features: ['Digital Printing', 'Screen Printing', 'Custom Designs', 'Bulk Production'],
    image:
      'https://tiimg.tistatic.com/fp/1/008/297/ladies-machine-embroidery-silk-saree-for-party-wear-069.jpg',
    imageAlt: 'Sundar Print',
    color: 'amber',
    path: '/branch/sundar-print',
  },
  {
    id: 'developer',
    name: 'Sundar Developer',
    description: 'Construction & Development',
    fullDescription:
      'Sundar Developer brings visions to life through thoughtful construction and development. We specialize in creating sustainable, functional spaces that meet the evolving needs of modern communities.',
    features: ['Residential Projects', 'Commercial Buildings', 'Infrastructure', 'Project Management'],
    image:
      'https://www.constructionplacements.com/wp-content/uploads/2023/01/ChatGPT-Image-Aug-11-2025-08_28_03-AM.jpg',
    imageAlt: 'Sundar Developer',
    color: 'slate',
    path: '/branch/sundar-developer',
  },
];

/* 🔒 STATIC TAILWIND COLOR MAP (IMPORTANT) */
const colorMap: Record<ColorKey, { dot: string; icon: string; btn: string }> = {
  emerald: {
    dot: 'bg-emerald-500',
    icon: 'text-emerald-500',
    btn: 'bg-emerald-600 hover:bg-emerald-700',
  },
  amber: {
    dot: 'bg-amber-500',
    icon: 'text-amber-500',
    btn: 'bg-amber-600 hover:bg-amber-700',
  },
  slate: {
    dot: 'bg-slate-500',
    icon: 'text-slate-500',
    btn: 'bg-slate-600 hover:bg-slate-700',
  },
};

export function VenturesUI() {
  return (
    <div>
      
      <section
        className="relative bg-cover bg-center py-24 px-4 md:px-16"
        style={{
          backgroundImage: "url('/imgs/Premium-villa-4.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center max-w-4xl mx-auto text-white">
          <p className="text-sm font-medium text-gray-200 tracking-wider uppercase mb-3">
            Our Portfolio
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-100 mb-6">
            Sundar Ventures
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            Three distinct business verticals, each driven by expertise, innovation, and a shared
            commitment to excellence.
          </p>
        </div>
      </section>

      {/* Ventures Grid */}
      <section className="py-16 px-4 md:px-16">
        <div className="mx-auto">
          <div className="space-y-16">
            {ventures.map((venture, index) => (
              <div
                key={venture.id}
                id={venture.id}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Image Section */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden">
                    <img
                      src={venture.image}
                      alt={venture.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-3 h-3 rounded-full ${colorMap[venture.color].dot}`} />
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                      {venture.description}
                    </span>
                  </div>

                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    {venture.name}
                  </h2>

                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {venture.fullDescription}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">
                      Key Capabilities
                    </h3>
                    <ul className="grid grid-cols-2 gap-3">
                      {venture.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-700">
                          <svg
                            className={`w-5 h-5 mr-2 ${colorMap[venture.color].icon}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Link
                    to={venture.path}
                    className={`inline-flex items-center px-6 py-3 text-white text-sm font-medium transition-colors duration-150 ${colorMap[venture.color].btn}`}
                  >
                    Enquire About {venture.name}
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
