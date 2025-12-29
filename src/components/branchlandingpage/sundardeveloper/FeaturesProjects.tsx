import { useState } from 'react';
import { projects } from './data/mockdata';
import { cn } from './utils/cn';

const FeaturedProjects = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'residential' | 'commercial' | 'infrastructure'>('all');

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const statusColors = {
    ongoing: 'bg-yellow-100 text-yellow-800',
    completed: 'bg-green-100 text-green-800',
    upcoming: 'bg-blue-100 text-blue-800'
  };

  return (
    <section id="projects" className="py-20 px-4 md:px-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-900 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium">Our Portfolio</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Featured <span className="text-blue-900">Projects</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore our diverse portfolio of successful projects that showcase 
            our expertise and commitment to excellence.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {(['all', 'residential', 'commercial', 'infrastructure'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                'px-6 py-2.5 rounded-lg font-medium transition-all',
                activeFilter === filter
                  ? 'bg-blue-900 text-white'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              )}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={cn(
                    'px-3 py-1 rounded-full text-xs font-semibold uppercase',
                    statusColors[project.status]
                  )}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4">
                  {project.description}
                </p>

                {/* Project Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-slate-500">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {project.location}
                  </div>
                  {project.size && (
                    <div className="flex items-center text-sm text-slate-500">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                      {project.size}
                    </div>
                  )}
                  {project.year && (
                    <div className="flex items-center text-sm text-slate-500">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Year {project.year}
                    </div>
                  )}
                </div>

                {/* View Details Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center text-blue-900 font-medium hover:text-yellow-500 transition-colors"
                >
                  View Details
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center bg-blue-900 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors font-semibold"
          >
            View All Projects
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;