import { useState } from 'react';
import { Link } from 'react-router-dom';

export function ConnectUI() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your enquiry. We will get back to you shortly.');
    setFormData({ name: '', email: '', phone: '', company: '', inquiryType: '', message: '' });
  };

  return (
    <div className=" bg-white ">
        <section
        className="relative bg-cover bg-center py-24 px-4 md:px-16"
        style={{
          backgroundImage: "url('/imgs/Premium-villa-4.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center max-w-4xl mx-auto text-white">
          <span className="text-sm font-medium tracking-wider uppercase text-emerald-300">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            Connect With Us
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Whether you have a question or want to explore partnership opportunities, we're here to help.
          </p>
        </div>
      </section>

        <div className='px-4 md:px-16 py-16'>
          <div className="grid lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Business Enquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gray-900 focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gray-900 focus:outline-none"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gray-900 focus:outline-none"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gray-900 focus:outline-none"
                      placeholder="Your company"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type *</label>
                  <select
                    required
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gray-900 focus:outline-none"
                  >
                    <option value="">Select an option</option>
                    <option value="hospitality">Hospitality Services</option>
                    <option value="textile">Textile Printing Solutions</option>
                    <option value="construction">Construction & Development</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="careers">Career Enquiries</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gray-900 focus:outline-none resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Headquarters</h3>
              <p className="text-gray-600 mb-2">123 Business Park, Main Street</p>
              <p className="text-gray-600 mb-4">Chennai, Tamil Nadu 600001</p>
              <p className="text-sm text-gray-500">
                <span className="font-medium">Phone:</span> +91 44 2345 6789
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-medium">Email:</span> info@sundargroup.com
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="text-gray-900">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="text-gray-900">9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="text-gray-500">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link to="/" className="px-8 py-3 bg-gray-900 text-white font-medium rounded-lg">
            Back to Home
          </Link>
        </div>
        </div>
    </div>
  );
}
