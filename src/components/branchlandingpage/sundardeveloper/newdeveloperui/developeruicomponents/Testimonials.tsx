
import React, { useState } from 'react';
import { TESTIMONIALS as INITIAL_TESTIMONIALS } from '../data/mockData';
import { Star, PlusCircle } from 'lucide-react';
import AddReviewModal from './AddReviewModal';
import type { Testimonial } from '../types';

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(INITIAL_TESTIMONIALS);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddReview = (newReview: Omit<Testimonial, 'id'>) => {
    const testimonialWithId: Testimonial = {
      ...newReview,
      id: `t${Date.now()}`
    };
    setTestimonials(prev => [testimonialWithId, ...prev]);
  };

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="container mx-auto px-6 mb-16 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-10">
          <div className="max-w-xl">
            <span className="text-amber-500 font-bold uppercase tracking-[0.2em] text-[10px]">Client Trust</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 font-serif">What Our Partners Say</h2>
            <p className="text-slate-400 mt-6 leading-relaxed">
              Real feedback from real clients. We pride ourselves on the relationships we build alongside the structures we create.
            </p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-3 px-8 py-4 bg-amber-500 text-slate-900 font-black uppercase text-xs tracking-widest rounded-xl hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/10 active:scale-95 self-start lg:self-auto"
          >
            <PlusCircle size={20} /> Add Your Review
          </button>
        </div>
      </div>

      <div className="flex gap-8 px-6 animate-marquee hover:pause">
        {[...testimonials, ...testimonials].map((t, i) => (
          <div key={`${t.id}-${i}`} className="w-[380px] md:w-[450px] flex-shrink-0 bg-white/5 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-sm transition-all hover:bg-white/10 group">
            <div className="flex gap-1 text-amber-500 mb-6">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={16} fill={j < t.rating ? 'currentColor' : 'none'} className={j < t.rating ? '' : 'text-slate-700'} />
              ))}
            </div>
            <p className="text-lg text-slate-300 italic mb-10 leading-relaxed font-light min-h-[100px]">"{t.text}"</p>
            <div className="flex items-center gap-4">
              <div className="relative">
                <img src={t.avatar} className="w-16 h-16 rounded-full border-2 border-amber-500 p-1 object-cover" alt={t.clientName} />
                <div className="absolute -bottom-1 -right-1 bg-amber-500 text-slate-900 rounded-full p-1 border-2 border-slate-900">
                  <Star size={10} fill="currentColor" />
                </div>
              </div>
              <div>
                <h4 className="font-bold text-white uppercase text-sm tracking-wide">{t.clientName}</h4>
                {t.company && (
                  <p className="text-amber-500 text-[10px] font-bold uppercase tracking-widest mt-1">{t.company}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <AddReviewModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleAddReview} />

      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 40s linear infinite; }
        .animate-marquee:hover { animation-play-state: paused; }
        @media (max-width: 768px) { .animate-marquee { animation-duration: 25s; } }
      `}</style>
    </section>
  );
};

export default Testimonials;
