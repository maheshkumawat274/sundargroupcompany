import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Design Selection',
    description: 'Choose from our curated library or provide your custom artwork for printing.',
  },
  {
    number: '02',
    title: 'Fabric Preparation',
    description: 'Specialized treatment of fabrics to ensure optimal ink absorption and color fastness.',
  },
  {
    number: '03',
    title: 'Printing & Coloring',
    description: 'Execution using high-precision machinery or traditional hand-block methods.',
  },
  {
    number: '04',
    title: 'Quality Check',
    description: 'Rigorous inspection for color accuracy, pattern alignment, and fabric integrity.',
  },
  {
    number: '05',
    title: 'Packaging & Delivery',
    description: 'Careful finishing, ironing, and eco-friendly packaging for safe global delivery.',
  },
];

export const ProcessPrint = () => {
  return (
    <section id="process" className="py-24 px-4 md:px-16 bg-[#AC7C30] text-white">
      <div className=" mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h3 className="text-amber-500 font-semibold tracking-widest uppercase mb-4">Our Methodology</h3>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">The Journey of a Pattern</h2>
          </div>
          <p className="text-gray-200 max-w-sm mb-2">
            A meticulous process that ensures every inch of fabric meets the highest standards of textile artistry.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-white/20 -translate-y-1/2" />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative z-10"
              >
                <div className="bg-amber-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-6 mx-auto lg:mx-0">
                  {step.number}
                </div>
                <h4 className="text-xl font-serif font-bold mb-4">{step.title}</h4>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
