
import React from 'react';
import { ArrowRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../data/mockData';
import type { Project, ViewState } from '../types';

interface FeaturedProjectsProps {
  onNavigate: (view: ViewState) => void;
  onProjectClick: (project: Project) => void;
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onNavigate, onProjectClick }) => {
  const featured = PROJECTS.slice(0, 3);

  return (
    <section className="py-32 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-amber-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Portfolio</span>
            <h2 className="text-5xl font-bold text-slate-900 font-serif">Featured Projects</h2>
            <p className="text-slate-500 mt-6 text-lg">
              Discover our award-winning projects that stand as testaments to our architectural brilliance and engineering prowess.
            </p>
          </div>
          <button 
            onClick={() => onNavigate('projects')}
            className="group flex items-center gap-4 text-slate-900 font-bold uppercase text-xs tracking-widest border-2 border-slate-200 px-8 py-4 rounded-xl hover:border-amber-500 transition-all"
          >
            View All Projects <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featured.map(p => (
            <ProjectCard key={p.id} project={p} onClick={onProjectClick} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
