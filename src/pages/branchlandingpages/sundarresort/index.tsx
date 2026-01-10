import { useState } from "react";
import GalleryPage from "../../../components/branchlandingpage/sundarresort/new/GalleryPage";
import HeroSlider from "../../../components/branchlandingpage/sundarresort/new/HeroSlider";
import ServiceCard from "../../../components/branchlandingpage/sundarresort/new/ServiceCard";
import ServiceDetailModal from "../../../components/branchlandingpage/sundarresort/new/ServiceDetailModal";
import { GALLERY_IMAGES, SERVICES } from "../../../components/branchlandingpage/sundarresort/new/mockdataresort/resortmockdata";
import type { Service } from "../../../components/branchlandingpage/sundarresort/new/types";
import { Link } from "react-router-dom";
import HeaderResort from "../../../components/branchlandingpage/sundarresort/new/HeaderResort";


const SundarResortPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [showFullGallery, setShowFullGallery] = useState(false);
  
  // Local state for testimonials
  const [localTestimonials, setLocalTestimonials] = useState([
    { name: "Rahul Sharma", text: "The hospitality at Sundar Resort is unmatched. The food reminded me of authentic home-cooked Gujarati flavors.", rating: 5 },
    { name: "Priya Patel", text: "We hosted our daughter's wedding here. The event hall is majestic and the staff handled everything perfectly.", rating: 5 },
    { name: "Ankit Mehta", text: "Beautiful gardens and very peaceful. The selfie points are a great addition for social media lovers!", rating: 4 },
    { name: "Sneha Gupta", text: "The swimming pool is very clean and the kids had a blast. Highly recommended for families.", rating: 5 },
    { name: "Vikram Shah", text: "Excellent corporate facilities. We conducted our annual meet here and the arrangements were top-notch.", rating: 5 },
    { name: "Meera Desai", text: "Stunning architecture and great service. The staff is very polite and helpful.", rating: 4 }
  ]);

  const [newReview, setNewReview] = useState({ name: '', text: '', rating: 5 });

  const stats = [
    { label: "Acres of Greenery", value: "5+" },
    { label: "Luxury Suites", value: "50+" },
    { label: "Happy Guests", value: "10k+" },
    { label: "Event Capacity", value: "2000+" }
  ];

  const ahmedabadMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117506.39050239617!2d72.50237409205322!3d23.02018176335198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fccd1170779199b!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin";

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "919876543210";
    const message = encodeURIComponent("Namaste! I want to book a stay at Sundar Resort Ahmedabad. Please help me with the availability.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const reviewToAdd = { ...newReview };
    setLocalTestimonials([reviewToAdd, ...localTestimonials]);
    setReviewSubmitted(true);
    setNewReview({ name: '', text: '', rating: 5 });
  };

  if (showFullGallery) {
    return <GalleryPage onBack={() => setShowFullGallery(false)} />;
  }

  // Helper to split testimonials into two rows
  const topRow = localTestimonials.filter((_, i) => i % 2 === 0);
  const bottomRow = localTestimonials.filter((_, i) => i % 2 !== 0);

  const TestimonialCard = ({ t }: { t: any }) => (
    <div className="w-[320px] md:w-[380px] bg-white p-8 rounded-3xl foody-shadow border-t-4 border-[#c5a059] relative shrink-0 mx-4 flex flex-col justify-between h-[250px]">
      <div>
        <div className="text-[#c5a059] text-4xl font-serif absolute top-4 right-8 opacity-20">“</div>
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, idx) => (
            <span key={idx} className={idx < t.rating ? "text-amber-500" : "text-stone-200"}>★</span>
          ))}
        </div>
        <p className="text-stone-600 italic mb-6 line-clamp-4 leading-relaxed">"{t.text}"</p>
      </div>
      <h4 className="font-bold text-[#4a0404] uppercase tracking-widest text-sm truncate">— {t.name}</h4>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fdfaf5] overflow-x-hidden scroll-smooth">
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          display: flex;
          width: fit-content;
          animation: marquee-left 30s linear infinite;
        }
        .animate-marquee-right {
          display: flex;
          width: fit-content;
          animation: marquee-right 30s linear infinite;
        }
        .animate-marquee-left:hover, .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      
      
      <HeaderResort/>

      {/* Hero Section */}
      <HeroSlider />

      {/* About Section */}
      <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-20">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 relative">
            <div className="absolute -top-10 -left-10 text-[120px] font-cursive text-[#c5a059]/10 select-none">Heritage</div>
            <img 
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800" 
              alt="Sundar Resort" 
              className="rounded-tl-[80px] rounded-br-[80px] shadow-2xl relative z-10 border-4 border-white"
            />
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#c5a059] rounded-tl-[80px] rounded-br-[80px] -z-0" />
          </div>
          <div className="md:w-1/2">
            <span className="text-[#c5a059] font-cursive text-4xl mb-2 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#4a0404] mb-6 leading-tight">Royal Indian Hospitality <br/>in Ahmedabad</h2>
            <p className="text-stone-700 text-lg leading-relaxed mb-8 font-light italic">
              "At Sundar Resort, we don't just provide a room; we serve a legacy of taste and comfort that resonates with the rich culture of Gujarat."
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-[#c5a059]/20 pt-8">
              {stats.map((stat, i) => (
                <div key={i} className="group">
                  <div className="text-3xl font-bold text-[#c5a059] group-hover:scale-110 transition-transform inline-block">{stat.value}</div>
                  <div className="text-[#4a0404] text-[10px] font-bold uppercase tracking-[0.2em] mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#4a0404] relative scroll-mt-10">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#fdfaf5] to-transparent" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#c5a059] font-cursive text-4xl mb-2 block">The Experience</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Our Royal Offerings</h2>
            <div className="w-24 h-1 bg-[#c5a059] mx-auto mt-6 rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.id} 
                service={service} 
                onExplore={setSelectedService} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section Preview */}
      <section id="gallery" className="py-24 bg-[#fdfaf5] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="text-left">
              <span className="text-[#c5a059] font-cursive text-4xl mb-2 block">Visual Treats</span>
              <h2 className="text-4xl font-bold text-[#4a0404]">Capturing Royal Moments</h2>
            </div>
            <button 
              onClick={() => setShowFullGallery(true)}
              className="group bg-[#4a0404] text-white px-10 py-4 rounded-full font-bold shadow-xl hover:bg-[#c5a059] transition-all active:scale-95 flex items-center gap-3"
            >
              View Full Gallery
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[600px]">
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-[40px] shadow-2xl">
              <img src={GALLERY_IMAGES[0].url} alt="Events" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-serif text-3xl italic">Grand Events</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-[30px] shadow-xl">
              <img src={GALLERY_IMAGES[1].url} alt="Dining" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-serif text-xl italic">Royalty in Taste</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-[30px] shadow-xl">
              <img src={GALLERY_IMAGES[2].url} alt="Garden" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-serif text-xl italic">Serenity</span>
              </div>
            </div>
            <div className="md:col-span-2 relative group overflow-hidden rounded-[40px] shadow-xl">
              <img src={GALLERY_IMAGES[3].url} alt="Night Life" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-serif text-2xl italic">Golden Nights</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimonials" className="py-24 bg-[#fdfaf5] scroll-mt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="text-left">
              <span className="text-[#c5a059] font-cursive text-4xl mb-2 block">Guest Diaries</span>
              <h2 className="text-4xl font-bold text-[#4a0404]">What Our Guests Say</h2>
            </div>
            <button 
              onClick={() => { setShowReviewModal(true); setReviewSubmitted(false); }}
              className="border-2 border-[#4a0404] text-[#4a0404] px-8 py-3 rounded-full font-bold hover:bg-[#4a0404] hover:text-white transition-all active:scale-95 shadow-lg"
            >
              Give Your Review To Us
            </button>
          </div>
        </div>

        {/* Dynamic Slider Logic */}
        <div className="relative w-full py-6">
          {localTestimonials.length <= 6 ? (
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
              {localTestimonials.map((t, i) => (
                <TestimonialCard key={i} t={t} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-8">
              {/* Row 1 */}
              <div className="animate-marquee-left">
                {[...topRow, ...topRow].map((t, i) => (
                  <TestimonialCard key={`top-${i}`} t={t} />
                ))}
              </div>
              
              {/* Row 2 */}
              <div className="animate-marquee-right">
                {[...bottomRow, ...bottomRow].map((t, i) => (
                  <TestimonialCard key={`bottom-${i}`} t={t} />
                ))}
              </div>
            </div>
          )}
          
          {/* Side Fades */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#fdfaf5] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#fdfaf5] to-transparent z-10 pointer-events-none" />
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-24 bg-[#fdfaf5] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3 text-center lg:text-left">
               <span className="text-[#c5a059] font-cursive text-4xl mb-2 block">Visit Us</span>
               <h2 className="text-4xl font-bold text-[#4a0404] mb-6">Your Oasis Awaits</h2>
               <p className="text-stone-600 mb-8">Located at the prime junction of comfort and connectivity in Ahmedabad.</p>
               <a 
                href="https://maps.google.com/?q=Ahmedabad+Gujarat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#4a0404] text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-[#c5a059] transition-all active:scale-95"
              >
                <span>📍</span> Navigate with Maps
              </a>
            </div>
            <div className="lg:w-2/3 w-full">
              <div className="rounded-[40px] overflow-hidden shadow-2xl border-[12px] border-white h-[450px]">
                <iframe 
                  src={ahmedabadMapUrl}
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  title="Sundar Resort Location"
                  className="hover:brightness-105 transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a0202] text-[#ecd399]/70 py-20 px-6 border-t border-[#c5a059]/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-white text-3xl font-serif font-bold mb-6 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              SUNDAR <span className="text-[#c5a059]">RESORT</span>
            </div>
            <p className="max-w-md text-stone-400 mb-8 italic">
              "Authentic Indian luxury, where every stay is a celebration of life and taste."
            </p>
          </div>
          <div>
            <h4 className="text-[#c5a059] font-bold mb-6 uppercase tracking-[0.2em] text-xs">Reach Us</h4>
            <p className="mb-2 text-stone-300">S.G. Highway, Ahmedabad</p>
            <p className="mb-2 text-stone-300">+91 98765 43210</p>
            <p className="text-stone-300">info@sundarresort.com</p>
          </div>
          <div>
            <h4 className="text-[#c5a059] font-bold mb-6 uppercase tracking-[0.2em] text-xs">Explore</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="hover:text-white transition-colors">Our Roots</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Royal Suites</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Guest Reviews</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Find Your Way</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white/5 mt-16 pt-8 text-center text-[10px] uppercase tracking-widest text-stone-500">
          Crafted for Excellence. © 2024 Sundar Resort Ahmedabad.
        </div>
      </footer>

      {/* Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-[#4a0404]/80 backdrop-blur-md" onClick={() => setShowReviewModal(false)} />
          <div className="relative bg-[#fdfaf5] w-full max-w-lg rounded-[40px] shadow-3xl p-8 border-2 border-[#c5a059] animate-in zoom-in duration-300">
            {!reviewSubmitted ? (
              <>
                <button 
                  onClick={() => setShowReviewModal(false)}
                  className="absolute top-6 right-6 text-stone-400 hover:text-[#4a0404] transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <h3 className="text-3xl font-serif font-bold text-[#4a0404] mb-2">Share Your Experience</h3>
                <p className="text-[#c5a059] font-cursive text-2xl mb-6">Namaste, we value your words!</p>
                <form onSubmit={handleReviewSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-1">Your Name</label>
                    <input 
                      required 
                      type="text" 
                      value={newReview.name}
                      onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                      className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#c5a059]" 
                      placeholder="e.g. Amit Patel" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-1">Rating</label>
                    <select 
                      className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 focus:outline-none"
                      value={newReview.rating}
                      onChange={(e) => setNewReview({...newReview, rating: parseInt(e.target.value)})}
                    >
                      <option value="5">5 Stars - Excellent</option>
                      <option value="4">4 Stars - Good</option>
                      <option value="3">3 Stars - Average</option>
                      <option value="2">2 Stars - Poor</option>
                      <option value="1">1 Star - Terrible</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-1">Review</label>
                    <textarea 
                      required 
                      value={newReview.text}
                      onChange={(e) => setNewReview({...newReview, text: e.target.value})}
                      className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 h-32 focus:outline-none focus:border-[#c5a059]" 
                      placeholder="Tell us about your stay..."
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full bg-[#4a0404] text-white py-4 rounded-xl font-bold shadow-xl active:scale-95 transition-all">Submit Review</button>
                </form>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-6 animate-bounce">🙏</div>
                <h3 className="text-3xl font-serif font-bold text-[#4a0404] mb-2">Thank You!</h3>
                <p className="text-stone-600 mb-8 px-4">Your review has been submitted and is now part of our legacy. Our automated slider will now display your kind words.</p>
                <button 
                  onClick={() => setShowReviewModal(false)}
                  className="bg-[#c5a059] text-[#4a0404] px-10 py-3 rounded-full font-bold shadow-lg hover:brightness-105 transition-all active:scale-95"
                >
                  Close & See My Review
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Service Modal */}
      <ServiceDetailModal
        service={selectedService} 
        onClose={() => setSelectedService(null)} 
      />
    </div>
  );
};

export default SundarResortPage;
