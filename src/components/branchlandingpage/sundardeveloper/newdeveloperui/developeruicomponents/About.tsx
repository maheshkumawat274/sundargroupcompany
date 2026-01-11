
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-32 bg-white" id="about">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Construction Work" />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-amber-500 p-12 rounded-[2rem] shadow-2xl hidden md:block border-8 border-white">
              <p className="text-5xl font-black text-slate-900 leading-none">25+</p>
              <p className="text-sm font-bold text-slate-900 uppercase tracking-widest mt-2">Years of Legacy</p>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <span className="text-amber-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">About Sundar Construction</span>
              <h2 className="text-5xl font-bold text-slate-900 leading-tight font-serif">We Build The Future with Concrete Values</h2>
              <p className="text-slate-500 text-lg leading-relaxed mt-6">
                Established in 1999, Sundar Construction has been a pioneer in the civil engineering and infrastructure landscape. We believe that every brick laid is a commitment to excellence, sustainability, and trust.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="flex flex-col gap-5">
                <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=400" 
                    className="w-full h-full object-cover" 
                    alt="Precision" 
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-2">Architectural Precision</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Every project detail is meticulously engineered for structural perfection and aesthetic balance.</p>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1590486803833-ffc475d561fa?auto=format&fit=crop&q=80&w=400" 
                    className="w-full h-full object-cover" 
                    alt="Safety" 
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest mb-2">Safety Standards</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Our zero-accident policy ensures a secure environment for our workers and clients alike.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
