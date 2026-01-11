
import React, { useState, useEffect } from 'react';
import { X, MapPin, Ruler, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project| null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [currentImg, setCurrentImg] = useState(0);

  // Reset image index when modal opens with a different project.
  // Defer the state update to avoid synchronous setState inside the effect
  // which can trigger cascading renders in React's dev/runtime warnings.
  useEffect(() => {
    if (project == null) return;
    const t = window.setTimeout(() => setCurrentImg(0), 0);
    return () => window.clearTimeout(t);
  }, [project?.id]);

  if (!project) return null;

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev + 1) % project.images.length);
  };

  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const handleInquiry = () => {
    window.open(WHATSAPP_LINK(`Hello Sundar Construction, I am interested in your project: "${project.name}" located in ${project.location}. Please share a detailed proposal.`), "_blank");
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-6xl bg-white rounded-[2rem] overflow-hidden shadow-2xl animate-fade-in flex flex-col lg:flex-row max-h-[95vh]">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-2 bg-slate-100/80 hover:bg-slate-200 text-slate-900 rounded-full transition-all shadow-md"
        >
          <X size={24} />
        </button>

        {/* Image Slider Section */}
        <div className="w-full lg:w-[55%] h-[350px] lg:h-auto relative group overflow-hidden bg-slate-100">
          {project.images.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-700 ${
                idx === currentImg ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img src={img} className="w-full h-full object-cover" alt={`${project.name} view ${idx + 1}`} />
            </div>
          ))}

          {/* Navigation Controls */}
          {project.images.length > 1 && (
            <>
              <div className="absolute inset-0 z-20 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={prevImg}
                  className="p-3 bg-white/90 text-slate-900 rounded-full hover:bg-amber-500 transition-all shadow-lg"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextImg}
                  className="p-3 bg-white/90 text-slate-900 rounded-full hover:bg-amber-500 transition-all shadow-lg"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Progress Dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                {project.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImg(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentImg ? 'w-8 bg-amber-500' : 'w-2 bg-white/50 hover:bg-white'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content Section */}
        <div className="flex-1 p-8 lg:p-14 overflow-y-auto">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-[10px] font-bold uppercase tracking-widest">
              {project.type}
            </span>
            <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${
              project.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-700'
            }`}>
              {project.status}
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 font-serif leading-tight">{project.name}</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10 border-y border-slate-100 py-8">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-slate-50 text-amber-500 rounded-2xl">
                <MapPin size={28} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-1">Project Location</p>
                <p className="text-base font-bold text-slate-700 leading-tight">{project.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-slate-50 text-amber-500 rounded-2xl">
                <Ruler size={28} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-1">Structural Area</p>
                <p className="text-base font-bold text-slate-700 leading-tight">{project.area}</p>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-[0.3em] mb-4">Project Overview</h4>
            <p className="text-slate-500 text-lg leading-relaxed">{project.description}</p>
          </div>

          <div>
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-[0.3em] mb-4">Core Specifications</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                  <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={16} />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-14">
            <button 
              onClick={handleInquiry}
              className="w-full py-6 bg-slate-900 text-white font-bold uppercase text-xs tracking-[0.3em] rounded-2xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10"
            >
              Request Detailed Proposal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
