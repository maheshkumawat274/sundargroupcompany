
import React from 'react';
import { Maximize2, MapPin } from 'lucide-react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={project.images[0]} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          alt={project.name}
        />
        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button 
            onClick={() => onClick(project)}
            className="p-4 bg-amber-500 text-slate-900 rounded-full transform scale-50 group-hover:scale-100 transition-all duration-300"
          >
            <Maximize2 size={24} />
          </button>
        </div>
        <div className="absolute top-4 left-4">
          <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg ${
            project.status === 'Completed' ? 'bg-emerald-500 text-white' : 
            project.status === 'Ongoing' ? 'bg-amber-500 text-slate-900' : 'bg-slate-700 text-white'
          }`}>
            {project.status}
          </span>
        </div>
      </div>
      
      <div className="p-8">
        <p className="text-amber-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-3">{project.type}</p>
        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">{project.name}</h3>
        <div className="flex items-center gap-2 text-slate-500 text-sm mb-6">
          <MapPin size={16} className="text-amber-500" />
          {project.location}
        </div>
        <button 
          onClick={() => onClick(project)}
          className="text-slate-900 font-bold text-xs uppercase tracking-widest flex items-center gap-2 border-b-2 border-transparent hover:border-amber-500 transition-all"
        >
          Explore More
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
