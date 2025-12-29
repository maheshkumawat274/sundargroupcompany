import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const ContactPrint = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-red-950 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          {/* Contact Info */}
          <div className="lg:w-2/5 bg-[#AC7C30] p-12 text-white">
            <h2 className="text-4xl font-serif font-bold mb-8">Start Your Project</h2>
            <p className="text-red-100 mb-12">
              Ready to elevate your fabric designs? Contact us today for a consultation and customized quote.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-red-200">Call Us</p>
                  <p className="font-bold">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-red-200">Email Us</p>
                  <p className="font-bold">hello@sundarprint.com</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-red-200">Visit Us</p>
                  <p className="font-bold">Sector 5, Industrial Area, Jaipur, India</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-white/10">
              <p className="text-sm text-red-200 mb-4">Follow Our Journey</p>
              <div className="flex gap-4">
                {['Instagram', 'LinkedIn', 'Facebook'].map(social => (
                  <a key={social} href="#" className="text-sm font-medium hover:text-amber-500 transition-colors">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:w-3/5 p-12 bg-white">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#AC7C30] focus:ring-1 focus:ring-[#AC7C30] outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#AC7C30] focus:ring-1 focus:ring-[#AC7C30] outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#AC7C30] focus:ring-1 focus:ring-[#AC7C30] outline-none transition-all"
                    placeholder="+91 00000 00000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Service Interest</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#AC7C30] focus:ring-1 focus:ring-[#AC7C30] outline-none transition-all">
                    <option>Saree Printing</option>
                    <option>Fabric Printing</option>
                    <option>Digital Printing</option>
                    <option>Bulk Orders</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Requirements</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#AC7C30] focus:ring-1 focus:ring-[#AC7C30] outline-none transition-all"
                  placeholder="Tell us about your project..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#AC7C30] text-white py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#AC7C30] transition-colors"
              >
                Send Inquiry
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-serif font-bold text-white">
            SUNDAR<span className="text-amber-500">PRINT</span>
          </div>
          <div className="flex gap-8 text-sm">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} Sundar Print. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
