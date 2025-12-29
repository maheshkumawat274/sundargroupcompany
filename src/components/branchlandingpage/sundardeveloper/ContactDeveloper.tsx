import React, { useState } from 'react';
import type { FormEvent } from 'react';

const ContactDeveloper = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-16 bg-white">
      <div className="container mx-auto ">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-900 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium">Get In Touch</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Start Your <span className="text-blue-900">Dream Project</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to build something amazing? Get in touch with our experts 
            for a free consultation and project quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Request a Consultation
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Enter your name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-slate-700 mb-2">
                  Project Type *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                >
                  <option value="">Select project type</option>
                  <option value="residential">Residential Construction</option>
                  <option value="commercial">Commercial Construction</option>
                  <option value="renovation">Renovation & Remodeling</option>
                  <option value="infrastructure">Infrastructure Project</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-4 rounded-lg hover:bg-blue-800 transition-colors font-semibold text-lg"
              >
                Send Inquiry
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-blue-900 text-white rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-2xl mr-4">📍</div>
                  <div>
                    <div className="font-semibold mb-1">Head Office</div>
                    <div className="text-blue-100">
                      Sundar Developer Pvt. Ltd.<br />
                      123, Construction Avenue,<br />
                      Business District, City - 400001
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-2xl mr-4">📞</div>
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <div className="text-blue-100">
                      +91 98765 43210<br />
                      +91 98765 43211
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-2xl mr-4">📧</div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <div className="text-blue-100">
                      info@sundardeveloper.com<br />
                      projects@sundardeveloper.com
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-2xl mr-4">🕒</div>
                  <div>
                    <div className="font-semibold mb-1">Office Hours</div>
                    <div className="text-blue-100">
                      Monday - Saturday: 9:00 AM - 7:00 PM<br />
                      Sunday: By Appointment
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Options */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://wa.me/919876543210"
                className="bg-green-500 text-white py-4 rounded-lg hover:bg-green-600 transition-colors font-semibold text-center flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                WhatsApp
              </a>
              <a
                href="tel:+919876543210"
                className="bg-blue-500 text-white py-4 rounded-lg hover:bg-blue-600 transition-colors font-semibold text-center flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDeveloper;