
import React from 'react';
import type { Service } from './types';

interface ServiceCardProps {
  service: Service;
  onExplore: (service: Service) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onExplore }) => {
  return (
    <div 
      className="resort-card bg-white rounded-3xl overflow-hidden foody-shadow flex flex-col h-full border-b-4 border-[#c5a059] cursor-pointer"
      onClick={() => onExplore(service)}
    >
      <div className="h-64 overflow-hidden relative">
        <img
          src={service.imageUrl}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-[#4a0404]/80 backdrop-blur-sm text-[#ecd399] px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-[#c5a059]/30">
          Royal Choice
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#4a0404]/80 to-transparent opacity-60" />
        <div className="absolute bottom-4 left-6 right-6">
          <h3 className="text-2xl font-serif font-bold text-white drop-shadow-lg">{service.title}</h3>
        </div>
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <p className="text-stone-600 mb-8 line-clamp-3 leading-relaxed font-light italic">
          "{service.shortDescription}"
        </p>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex -space-x-2">
            {service.amenities.slice(0, 3).map((a, i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center border-2 border-white shadow-sm text-xs" title={a.label}>
                {a.icon}
              </div>
            ))}
            {service.amenities.length > 3 && (
              <div className="w-8 h-8 rounded-full bg-[#c5a059] text-white flex items-center justify-center border-2 border-white text-[10px] font-bold">
                +{service.amenities.length - 3}
              </div>
            )}
          </div>
          <button
            className="bg-[#4a0404] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-[#4a0404]/20 flex items-center gap-2 hover:bg-[#c5a059] transition-all"
          >
            Explore
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
