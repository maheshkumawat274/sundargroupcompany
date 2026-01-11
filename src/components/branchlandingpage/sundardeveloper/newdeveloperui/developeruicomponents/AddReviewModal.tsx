
import React, { useState, useEffect } from 'react';
import { X, Star, User, Building, MessageSquare } from 'lucide-react';
import type { Testimonial } from '../types';

interface AddReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (review: Omit<Testimonial, 'id'>) => void;
}

const AddReviewModal: React.FC<AddReviewModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const initialForm = {
    clientName: '',
    company: '',
    text: '',
    rating: 5,
    avatar: ''
  };

  const [formData, setFormData] = useState(initialForm);

  // Generate avatar only after mount or when modal opens to avoid
  // calling impure Math.random() during render.
  useEffect(() => {
    if (!isOpen) return;
    const t = window.setTimeout(() => {
      setFormData({ ...initialForm, avatar: `https://i.pravatar.cc/150?u=${Math.random()}` });
    }, 0);
    return () => window.clearTimeout(t);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    // Reset form; avatar will be regenerated when modal re-opens via effect
    setFormData(initialForm);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-md" onClick={onClose} />
      <div className="relative w-full max-w-lg bg-white rounded-[2rem] overflow-hidden shadow-2xl animate-fade-in">
        <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <h2 className="text-2xl font-bold text-slate-900 font-serif">Write a Review</h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-all">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 block">Your Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  required
                  type="text"
                  placeholder="Full Name"
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                  value={formData.clientName}
                  onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 block">Company / Designation (Optional)</label>
              <div className="relative">
                <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="text"
                  placeholder="e.g. CEO, Homeowner"
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 block">Your Feedback</label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 text-slate-400" size={18} />
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your experience..."
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none transition-all resize-none"
                  value={formData.text}
                  onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 block">Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setFormData({ ...formData, rating: star })}
                    className={`p-2 transition-all ${star <= formData.rating ? 'text-amber-500' : 'text-slate-300'}`}
                  >
                    <Star size={32} fill={star <= formData.rating ? 'currentColor' : 'none'} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-5 bg-slate-900 text-white font-bold uppercase tracking-[0.2em] text-xs rounded-xl hover:bg-slate-800 transition-all shadow-xl"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddReviewModal;
