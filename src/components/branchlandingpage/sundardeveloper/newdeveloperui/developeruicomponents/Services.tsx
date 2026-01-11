
import React from 'react';
import { SERVICES } from '../data/mockData';

const Services: React.FC = () => {
  return (
    <section className="py-32 bg-white border-y border-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 font-serif">Core Specializations</h2>
          <p className="text-slate-500">From concept to commissioning, we offer end-to-end solutions in civil construction.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {SERVICES.map((s, i) => (
            <div key={i} className="group flex flex-col h-full bg-slate-50 rounded-[3rem] overflow-hidden hover:shadow-2xl transition-all duration-500 border border-slate-100">
              <div className="h-64 overflow-hidden">
                <img src={s.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={s.title} />
              </div>
              <div className="p-10 flex-1 flex flex-col group-hover:bg-slate-900 transition-colors duration-500">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-amber-500 transition-colors">{s.title}</h3>
                <p className="text-slate-500 group-hover:text-slate-400 transition-colors">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
