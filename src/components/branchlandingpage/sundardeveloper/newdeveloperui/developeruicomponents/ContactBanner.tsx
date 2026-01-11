
import React from 'react';
import { WHATSAPP_LINK } from '../constants';

const ContactBanner: React.FC = () => {
  const handleStartConversation = () => {
    window.open(WHATSAPP_LINK("Hello Sundar Construction team, I have a vision for a project and would like to start a conversation regarding your builder services."), "_blank");
  };

  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <div className="bg-amber-500 p-12 md:p-24 rounded-[4rem] text-center shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 transition-transform group-hover:scale-125 duration-1000"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 font-serif">Have a Vision? Let's Build It.</h2>
            <p className="text-slate-800 text-xl max-w-2xl mx-auto mb-12">
              Join hands with India's most trusted construction partner for your next masterpiece.
            </p>
            <button 
              onClick={handleStartConversation}
              className="px-12 py-6 bg-slate-900 text-white font-bold uppercase tracking-[0.3em] text-sm rounded-2xl hover:bg-slate-800 shadow-xl transition-all active:scale-95"
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
