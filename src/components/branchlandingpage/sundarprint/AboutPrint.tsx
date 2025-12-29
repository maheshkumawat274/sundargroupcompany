import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export const AboutPrint = () => {
  return (
    <section id="about" className="py-24 bg-[#FDFCF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1000&auto=format&fit=crop"
                alt="Our craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-[#AC7C30] text-white p-8 rounded-lg hidden lg:block">
              <div className="text-4xl font-bold mb-1">25+</div>
              <div className="text-sm uppercase tracking-wider">Years of Experience</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-[#AC7C30] font-semibold tracking-widest uppercase mb-4">Our Legacy</h3>
            <h2 className="text-4xl font-serif text-gray-900 font-bold mb-6">
              Pioneering Excellence in Textile Printing
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              At Sundar Print, we blend traditional craftsmanship with cutting-edge technology to deliver unparalleled printing quality. Established with a passion for fabrics, we have grown into a trusted partner for fashion brands and wholesalers worldwide.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our commitment to quality, consistency, and artistic integrity ensures that every yard of fabric we print tells a story of elegance and precision.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                'Quality Craftsmanship',
                'Ethical Production',
                'Innovative Designs',
                'Global Standards',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="text-amber-600" size={20} />
                  <span className="font-medium text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
