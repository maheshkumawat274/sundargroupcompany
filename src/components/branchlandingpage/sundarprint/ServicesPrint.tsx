import { motion } from 'framer-motion';
import { Layers, Printer, Wand2, Factory, Palette, ShoppingBag } from 'lucide-react';

const services = [
  {
    title: 'Saree Printing',
    description: 'Exquisite designs on Silk, Chiffon, and Georgette with vibrant colors.',
    icon: <Palette className="w-8 h-8" />,
    img: 'https://images.unsplash.com/photo-1610030469668-874229b359f1?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Fabric Printing',
    description: 'Custom printing solutions for a wide range of natural and synthetic fabrics.',
    icon: <Layers className="w-8 h-8" />,
    img: 'https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Digital Textile Printing',
    description: 'High-definition digital printing for complex patterns and photo-realism.',
    icon: <Printer className="w-8 h-8" />,
    img: 'https://images.unsplash.com/photo-1620791144170-8a443bf37a33?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Block & Traditional',
    description: 'Preserving heritage through authentic hand-block and screen printing.',
    icon: <Wand2 className="w-8 h-8" />,
    img: 'https://images.unsplash.com/photo-1590735204425-27463b364561?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Custom Design',
    description: 'Collaborate with our in-house designers to bring your unique vision to life.',
    icon: <Factory className="w-8 h-8" />,
    img: 'https://images.unsplash.com/photo-1529139513477-3235a8420b92?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Bulk & Wholesale',
    description: 'Scalable production capacity for large orders with consistent quality.',
    icon: <ShoppingBag className="w-8 h-8" />,
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop',
  },
];

export const ServicesPrint = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-[#AC7C30] font-semibold tracking-widest uppercase mb-4">Our Services</h3>
          <h2 className="text-4xl font-serif text-gray-900 font-bold">Excellence in Every Print</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8 text-white">
                <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-serif font-bold mb-2">{service.title}</h4>
                <p className="text-gray-200 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
