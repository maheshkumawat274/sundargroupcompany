import React, { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

type Errors = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

const ContactHome: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  // ---------- VALIDATION ----------
  const validate = () => {
    const newErrors: Errors = {};

    // Name: only letters & space
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = "Name should contain only letters";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    // Phone: only numbers, 10 digits
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    // Message
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ---------- SUBMIT ----------
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });

    setTimeout(() => setSubmitted(false), 3000);
  };

  // ---------- INPUT CHANGE ----------
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Prevent numbers in name
    if (name === "name" && /[^A-Za-z\s]/.test(value)) return;

    // Prevent text in phone
    if (name === "phone" && /[^0-9]/.test(value)) return;

    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="w-full bg-[#f8fafc] py-4 md:py-14 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}
        <div className="flex flex-col gap-12">
          <div className="space-y-4 max-w-xl">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
              Get in Touch
            </h2>
            <div className="w-16 h-1 bg-[#345570]" />
            <p className="text-gray-600 text-lg">
              Let’s connect and build something meaningful together. Our team is
              always ready to assist you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl">
            <InfoCard icon={<MapPin />} title="Address" text="Sundar Group, India" />
            <InfoCard icon={<Mail />} title="Email" text="contact@sundargroup.com" />
            <InfoCard
              icon={<Phone />}
              title="Phone"
              text="+91 90000 00000"
              full
            />
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white p-2 md:p-10 rounded-2xl shadow-md">
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <Field
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />

            {/* Email */}
            <Field
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />

            {/* Phone */}
            <Field
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
            />

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={`w-full rounded-lg border px-4 py-3 outline-none ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#345570] text-white py-3 rounded-lg hover:opacity-90"
            >
              Send Message
            </button>

            {submitted && (
              <p className="text-green-600 text-center text-sm">
                ✅ Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactHome;

// ---------- REUSABLE COMPONENTS ----------
const InfoCard = ({
  icon,
  title,
  text,
  full,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  full?: boolean;
}) => (
  <div
    className={`bg-white p-6 rounded-xl border shadow-sm flex gap-4 ${
      full ? "sm:col-span-2" : ""
    }`}
  >
    <div className="text-[#345570]">{icon}</div>
    <div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-gray-600">{text}</p>
    </div>
  </div>
);

interface FieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
}

const Field = ({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
}: FieldProps) => (
  <div>
    <label className="block text-sm font-medium mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full rounded-lg border px-4 py-3 outline-none ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);
