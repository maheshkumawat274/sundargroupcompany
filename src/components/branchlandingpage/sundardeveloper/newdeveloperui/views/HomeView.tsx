
import React from 'react';
import Hero from '../developeruicomponents/Hero';
import About from '../developeruicomponents/About';
import FeaturedProjects from '../developeruicomponents/FeaturedProjects';
import Services from '../developeruicomponents/Services';
import Testimonials from '../developeruicomponents/Testimonials';
import ContactBanner from '../developeruicomponents/ContactBanner';
import type { Project, ViewState } from '../types';

interface HomeViewProps {
  onNavigate: (view: ViewState) => void;
  onProjectClick: (project: Project) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onProjectClick }) => {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <About />
      <FeaturedProjects onNavigate={onNavigate} onProjectClick={onProjectClick} />
      <Services />
      <Testimonials />
      <ContactBanner />
    </>
  );
};

export default HomeView;
