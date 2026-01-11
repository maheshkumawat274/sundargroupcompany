
import React, { useState, useMemo } from 'react';
import { Filter, XCircle } from 'lucide-react';
import ProjectCard from '../developeruicomponents/ProjectCard';
import { PROJECTS } from '../data/mockData';
import type { Project } from '../types';

interface ProjectsViewProps {
  onProjectClick: (project: Project) => void;
}

const ProjectsView: React.FC<ProjectsViewProps> = ({ onProjectClick }) => {
  const [typeFilter, setTypeFilter] = useState<string>('All');
  const [statusFilter, setStatusFilter] = useState<string>('All');

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(p => {
      const matchesType = typeFilter === 'All' || p.type === typeFilter;
      const matchesStatus = statusFilter === 'All' || p.status === statusFilter;
      return matchesType && matchesStatus;
    });
  }, [typeFilter, statusFilter]);

  return (
    <div className="py-12 md:py-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="mb-12 md:mb-20 text-center max-w-3xl mx-auto">
          <span className="text-amber-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Complete Portfolio</span>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 md:mb-8 font-serif">Our Architectural Legacy</h1>
          <p className="text-slate-500 text-base md:text-lg">A comprehensive look at our engineering milestones across various sectors.</p>
        </div>

        {/* Filter Bar */}
        <div className="mb-10 md:mb-16 bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-slate-200">
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-slate-900 font-bold">
                <Filter size={18} className="text-amber-500" />
                <span className="uppercase tracking-[0.2em] text-[10px] md:text-xs">Filter Projects</span>
              </div>
              {(typeFilter !== 'All' || statusFilter !== 'All') && (
                <button 
                  onClick={() => { setTypeFilter('All'); setStatusFilter('All'); }}
                  className="flex items-center gap-2 text-rose-600 font-bold uppercase text-[9px] md:text-[10px] tracking-widest hover:text-rose-700 transition-colors"
                >
                  <XCircle size={14} /> Reset
                </button>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">By Category</span>
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-2 px-2 md:mx-0 md:px-0">
                  {['All', 'Residential', 'Commercial', 'Industrial'].map(type => (
                    <button
                      key={type}
                      onClick={() => setTypeFilter(type)}
                      className={`flex-shrink-0 px-5 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                        typeFilter === type ? 'bg-amber-500 text-slate-900 shadow-md' : 'bg-slate-100 text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">By Status</span>
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-2 px-2 md:mx-0 md:px-0">
                  {['All', 'Completed', 'Ongoing', 'Upcoming'].map(status => (
                    <button
                      key={status}
                      onClick={() => setStatusFilter(status)}
                      className={`flex-shrink-0 px-5 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                        statusFilter === status ? 'bg-slate-900 text-white shadow-md' : 'bg-slate-100 text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filteredProjects.map(p => (
              <ProjectCard key={p.id} project={p} onClick={onProjectClick} />
            ))}
          </div>
        ) : (
          <div className="py-24 md:py-32 text-center bg-white rounded-[3rem] border-2 border-dashed border-slate-200 px-6">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 font-serif">No Matching Projects</h3>
            <p className="text-slate-500 text-sm md:text-base">We haven't listed projects matching this specific combination yet.</p>
            <button onClick={() => { setTypeFilter('All'); setStatusFilter('All'); }} className="mt-8 px-8 py-4 bg-amber-500 text-slate-900 font-bold uppercase text-[10px] tracking-[0.2em] rounded-xl">Show All</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsView;
