
import React from 'react';
import type { Service } from './types';

interface ServiceDetailModalProps {
  service: Service | null;
  onClose: () => void;
}

const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose }) => {
  if (!service) return null;

  const handleWhatsAppInquiry = () => {
    const phoneNumber = "919876543210"; 
    const message = encodeURIComponent(`Namaste! I am interested in exploring ${service.title} at Sundar Resort Ahmedabad. Please provide more details.`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 md:p-8">
      <div className="absolute inset-0 bg-[#1a0202]/95 backdrop-blur-md" onClick={onClose} />
      <div className="relative bg-[#fdfaf5] w-full max-w-5xl max-h-full overflow-y-auto rounded-[60px] shadow-3xl animate-in fade-in zoom-in duration-500 border-4 border-[#c5a059]/20">
        
        <button
          onClick={onClose}
          className="absolute top-8 right-8 z-10 bg-[#4a0404] text-[#c5a059] p-3 rounded-full shadow-2xl transition-transform active:scale-90"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-5/12 h-80 md:h-[650px] overflow-hidden relative">
            <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#4a0404] via-transparent to-transparent md:bg-gradient-to-r" />
          </div>
          
          <div className="md:w-7/12 p-10 md:p-16 flex flex-col">
            <span className="text-[#c5a059] font-cursive text-4xl mb-2">Exquisite</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#4a0404] mb-8 leading-tight border-b-2 border-[#c5a059]/30 pb-4">
              {service.title}
            </h2>
            
            <p className="text-stone-700 text-lg leading-relaxed mb-10 font-light italic bg-white/50 p-6 rounded-3xl border-l-8 border-[#c5a059]">
              {service.longDescription}
            </p>

            <div className="mb-10">
              <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-[#c5a059] mb-6">Imperial Amenities</h4>
              <div className="grid grid-cols-2 gap-4">
                {service.amenities.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-[#c5a059]/10 group transition-all hover:border-[#c5a059]">
                    <span className="text-2xl group-hover:scale-125 transition-transform">{item.icon}</span>
                    <span className="text-[#4a0404] font-bold text-sm tracking-wide">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {service.features && (
              <div className="mb-10">
                <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-[#c5a059] mb-6">Signature Highlights</h4>
                <div className="flex flex-wrap gap-3">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="px-4 py-2 bg-[#4a0404] text-[#ecd399] rounded-full text-xs font-bold uppercase tracking-widest shadow-md">
                      ✦ {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <button 
              onClick={handleWhatsAppInquiry}
              className="mt-auto w-full gold-gradient text-[#4a0404] py-5 rounded-2xl font-black text-xl shadow-2xl transition-all active:scale-[0.98] flex items-center justify-center gap-4 group"
            >
              <span className="text-3xl group-hover:animate-bounce">👑</span>
              Book via Concierge WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailModal;
