import React, { useState } from "react";

type ContactForm = {
  name: string;
  email: string;
  mobile: string;
  message: string;
};

type ContactErrors = Partial<Record<keyof ContactForm, string>>;

const ContactResort = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [errors, setErrors] = useState<ContactErrors>({});

  const validate = () => {
    const err: ContactErrors = {};
    if (!formData.name) err.name = "Name is required";
    if (!formData.email) err.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      err.email = "Invalid email";
    if (!formData.mobile) err.mobile = "Mobile required";
    else if (!/^[0-9]{10}$/.test(formData.mobile))
      err.mobile = "Enter 10 digit number";
    if (!formData.message) err.message = "Message required";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", mobile: "", message: "" });
    }
  };

  return (
    <section className="relative py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block mb-4 text-sm font-semibold tracking-widest text-emerald-600 uppercase">
            Get In Touch
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Plan Your Stay at <br /> Sundar Resort
          </h2>

          <p className="mt-6 text-gray-600 text-lg max-w-xl">
            Experience comfort, serenity, and personalized hospitality.  
            Reach out to us for bookings, events, or any special requests.
          </p>

          <div className="mt-10 space-y-5 text-gray-700 text-lg">
            <p className="flex items-start gap-4">
              <span className="text-emerald-600 text-xl">📍</span>
              Lakeside Road, Pokhara, Nepal
            </p>
            <p className="flex items-center gap-4">
              <span className="text-emerald-600 text-xl">📞</span>
              +977 61-123456
            </p>
            <p className="flex items-center gap-4">
              <span className="text-emerald-600 text-xl">✉</span>
              info@sundarresort.com
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Send Us a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-5 py-4 rounded-xl border focus:ring-2 focus:ring-emerald-500 outline-none"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-5 py-4 rounded-xl border focus:ring-2 focus:ring-emerald-500 outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Mobile */}
            <div>
              <input
                type="tel"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
                className="w-full px-5 py-4 rounded-xl border focus:ring-2 focus:ring-emerald-500 outline-none"
              />
              {errors.mobile && (
                <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                rows={4}
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-5 py-4 rounded-xl border focus:ring-2 focus:ring-emerald-500 outline-none resize-none"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-emerald-600 text-white font-semibold text-lg hover:bg-emerald-700 transition shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactResort;
