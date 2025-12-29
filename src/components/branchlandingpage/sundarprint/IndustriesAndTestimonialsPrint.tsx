import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const industries = [
  'Fashion Brands',
  'Boutique Owners',
  'Wholesalers',
  'Retail Stores',
  'Independent Designers',
  'Hospitality Sector',
];

const testimonials = [
  {
    name: 'Ananya Sharma',
    role: 'Fashion Boutique Owner',
    content: 'The quality of saree printing at Sundar Print is unmatched. The colors are vibrant and the fabric feel remains premium.',
    rating: 5,
  },
  {
    name: 'Vikram Mehta',
    role: 'Textile Wholesaler',
    content: 'We have been partnering with Sundar Print for over 5 years. Their consistency in bulk orders is what keeps us coming back.',
    rating: 5,
  },
  {
    name: 'Sarah Jenkins',
    role: 'Lead Designer, Urban Chic',
    content: 'Their digital printing capabilities allowed us to experiment with complex floral patterns that other printers simply couldn’t achieve.',
    rating: 5,
  },
];

export const IndustriesAndTestimonialsPrint = () => {
  return (
    <div className="bg-[#FDFCF0]">
      {/* Industries Section */}
      {/* Industries Section */}
<section className="py-24 border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center mb-14">
      <h3 className="text-[#AC7C30] font-semibold tracking-widest uppercase mb-4 text-sm">
        Partnerships
      </h3>
      <h2 className="text-4xl font-serif text-gray-900 font-bold">
        Industries We Serve
      </h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        We collaborate with diverse industries, delivering precision-driven
        textile printing solutions tailored to every business need.
      </p>
    </div>

    {/* Industry Cards */}
    <div className="flex flex-wrap justify-center gap-6">
      {industries.map((item, index) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          className="group px-8 py-4 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-[#AC7C30] transition-all cursor-default"
        >
          <span className="text-lg font-medium text-gray-700 group-hover:text-[#AC7C30] transition-colors">
            {item}
          </span>
        </motion.div>
      ))}
    </div>

  </div>
</section>


      {/* Testimonials Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-[#AC7C30] font-semibold tracking-widest uppercase mb-4">Client Feedback</h3>
            <h2 className="text-4xl font-serif text-gray-900 font-bold">Trusted by Industry Experts</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6 leading-relaxed">"{t.content}"</p>
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-red-800">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
