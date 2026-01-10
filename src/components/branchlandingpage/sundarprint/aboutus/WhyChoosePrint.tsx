import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Users, Clock, Paintbrush, Globe } from 'lucide-react';

const reasons = [
  {
    title: 'Premium Quality Dyes',
    description: 'We use high-grade, eco-friendly dyes that ensure vibrant colors and superior color fastness.',
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: 'Custom Design Support',
    description: 'Our expert design team helps you refine your patterns or create new ones from scratch.',
    icon: <Paintbrush className="w-6 h-6" />,
  },
  {
    title: 'Skilled Craftsmen',
    description: 'Decades of expertise in both traditional hand-printing and modern digital techniques.',
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: 'On-Time Delivery',
    description: 'Efficient production planning and logistics to meet your tightest deadlines.',
    icon: <Clock className="w-6 h-6" />,
  },
  {
    title: 'Global Standards',
    description: 'Our processes meet international quality benchmarks for textile production.',
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: 'Rapid Prototyping',
    description: 'Quick sample turnaround to help you finalize designs before bulk production.',
    icon: <Zap className="w-6 h-6" />,
  },
];

export const WhyChooseUsPrint = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <h3 className="text-[#AC7C30] font-semibold tracking-widest uppercase mb-4">Why Sundar Print</h3>
            <h2 className="text-4xl font-serif text-gray-900 font-bold mb-6">
              Commitment to Textile Perfection
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We don't just print on fabric; we breathe life into every fiber. Our dedication to quality and client satisfaction has made us a leader in the industry.
            </p>
            <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100">
              <h4 className="font-bold text-[#AC7C30] mb-2 font-serif">Bulk Orders Specialized</h4>
              <p className="text-sm text-gray-700">Equipped with state-of-the-art machinery to handle orders from 100 to 10,000+ units with ease.</p>
            </div>
          </div>

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-4 hover:bg-gray-50 rounded-xl transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[#AC7C30] text-white rounded-lg flex items-center justify-center">
                  {reason.icon}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">{reason.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
