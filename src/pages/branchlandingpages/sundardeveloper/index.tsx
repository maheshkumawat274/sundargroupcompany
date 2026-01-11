
import React, { useState } from 'react';
import HeaderDeveloper from '../../../components/branchlandingpage/sundardeveloper/newdeveloperui/developeruicomponents/Navbar';
import type { ViewState } from '../../../components/branchlandingpage/sundardeveloper/newdeveloperui/types';
import HomeView from '../../../components/branchlandingpage/sundardeveloper/newdeveloperui/views/HomeView';
import ProjectsView from '../../../components/branchlandingpage/sundardeveloper/newdeveloperui/views/ProjectsView';
import ProjectModal from '../../../components/branchlandingpage/sundardeveloper/newdeveloperui/developeruicomponents/ProjectModal';
import type { Project } from '../../../components/branchlandingpage/sundardeveloper/newdeveloperui/types';

const SundarDeveloperPage: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleNavigate = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <HeaderDeveloper currentView={currentView} onNavigate={handleNavigate} />
      
      <main className="flex-grow">
        {currentView === 'home' && (
          <HomeView onNavigate={handleNavigate} onProjectClick={(p) => setSelectedProject(p)} />
        )}
        
        {currentView === 'projects' && (
          <ProjectsView onProjectClick={(p) => setSelectedProject(p)} />
        )}

        {(currentView === 'about' || currentView === 'contact') && (
           <div className="py-40 text-center px-6 bg-slate-50 min-h-[60vh]">
             <h2 className="text-4xl font-bold text-slate-900 mb-4 uppercase tracking-widest font-serif">{currentView} Page</h2>
             <p className="text-slate-500">Coming soon... This page is currently under construction.</p>
             <button 
              onClick={() => handleNavigate('home')} 
              className="mt-10 px-8 py-3 bg-amber-500 rounded-lg font-bold uppercase text-xs tracking-widest shadow-lg active:scale-95 transition-all"
             >
              Back to Home
             </button>
           </div>
        )}
      </main>

      <ProjectModal
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default SundarDeveloperPage;
