import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Star,
  Quote,
} from "lucide-react";
import * as Icons from "lucide-react";
import { getBranchBySlug } from "../../components/home/branch/branchdummydata/branchesdata";

type LucideIcon = React.ComponentType<React.SVGProps<SVGSVGElement> & { size?: number; strokeWidth?: number }>;

const iconMap: Record<string, LucideIcon> = {
  Home: Icons.Home,
  UtensilsCrossed: Icons.UtensilsCrossed,
  Mountain: Icons.Mountain,
  Wind: Icons.Wind,
  Users: Icons.Users,
  Smile: Icons.Smile,
  Palette: Icons.Palette,
  Grid3x3: Icons.Grid3x3,
  Pencil: Icons.Pencil,
  Package: Icons.Package,
  Droplets: Icons.Droplets,
  Sparkles: Icons.Sparkles,
  Zap: Icons.Zap,
  Award: Icons.Award,
  Leaf: Icons.Leaf,
  MapPin: Icons.MapPin,
  Star: Icons.Star,
  CheckCircle: Icons.CheckCircle,
  Shield: Icons.Shield,
  Clock: Icons.Clock,
  Building2: Icons.Building2,
  Layers: Icons.Layers,
};

export const BranchLandingPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const branch = getBranchBySlug(slug || "");

  if (!branch) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Branch Not Found
        </h1>
        <Link
          to="/"
          className="text-green-600 hover:text-green-700 font-semibold flex items-center gap-2"
        >
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </div>
    );
  }

  const getIcon = (iconName: string): LucideIcon => {
    return (iconMap[iconName] || Icons.Zap) as LucideIcon;
  };

  return (
    <main className="overflow-hidden">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed top-20 left-4 sm:left-8 z-40"
      >
        <Link
          to="/"
          className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all mt-12"
          style={{ color: branch.colors.primary }}
        >
          <ArrowLeft size={20} />
          <span className="font-semibold">Back</span>
        </Link>
      </motion.div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={branch.heroImage}
            alt={branch.name}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 opacity-50"
            style={{ backgroundColor: branch.colors.primary }}
          />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              {branch.heroTitle}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-100 mb-4">
              {branch.heroSubtitle}
            </p>
            <div className="inline-block px-4 py-2 bg-white rounded-full text-sm font-semibold mb-8">
              <span style={{ color: branch.colors.primary }}>
                {branch.category}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-4xl font-bold mb-6"
                style={{ color: branch.colors.primary }}
              >
                {branch.aboutTitle}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {branch.aboutDescription}
              </p>

              {/* About Points */}
              <ul className="space-y-4">
                {branch.aboutPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div
                      className="w-6 h-6 rounded-full mt-1 flex-shrink-0 flex items-center justify-center text-white text-sm font-bold"
                      style={{ backgroundColor: branch.colors.secondary }}
                    >
                      ✓
                    </div>
                    <span className="text-gray-700 font-semibold">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="hidden lg:block"
            >
              <img
                src={branch.gallery[0].image}
                alt={branch.name}
                className="rounded-xl shadow-2xl w-full h-96 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: branch.colors.primary }}
            >
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive offerings tailored to meet your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {branch.services.map((service, index) => {
              const IconComponent = getIcon(service.icon);
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: branch.colors.secondary }}
                  >
                    <IconComponent size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: branch.colors.primary }}
            >
              Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Visual showcase of our excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {branch.gallery.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div
                  className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-end p-6"
                  style={{
                    backgroundColor: `rgba(0,0,0,0)`,
                  }}
                >
                  <div
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: branch.colors.primary }}
            >
              {branch.whyChooseTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Reasons to partner with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {branch.whyChoosePoints.map((point, index) => {
              const IconComponent = getIcon(point.icon);
              return (
                <motion.div
                  key={point.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-white flex-shrink-0"
                      style={{ backgroundColor: branch.colors.primary }}
                    >
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {point.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {branch.testimonials.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2
                className="text-4xl font-bold mb-4"
                style={{ color: branch.colors.primary }}
              >
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Real testimonials from satisfied customers
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {branch.testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-lg"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        style={{
                          fill: branch.colors.secondary,
                          color: branch.colors.secondary,
                        }}
                      />
                    ))}
                  </div>

                  <div className="mb-6">
                    <Quote
                      size={24}
                      style={{ color: branch.colors.accent }}
                      className="mb-4"
                    />
                    <p className="text-gray-700 text-lg leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: branch.colors.primary }}
            >
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Contact us for more information or inquiries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Phone,
                title: "Phone",
                value: branch.contactInfo.phone,
              },
              {
                icon: Mail,
                title: "Email",
                value: branch.contactInfo.email,
              },
              {
                icon: MapPin,
                title: "Address",
                value: `${branch.contactInfo.address}, ${branch.contactInfo.city}, ${branch.contactInfo.state}`,
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-lg text-center"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white"
                    style={{ backgroundColor: branch.colors.primary }}
                  >
                    <Icon size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.value}</p>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <button
              className="px-8 py-4 text-white font-bold rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105"
              style={{ backgroundColor: branch.colors.primary }}
            >
              Schedule Consultation
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};