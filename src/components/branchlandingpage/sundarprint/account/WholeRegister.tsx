import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderPrint from "../HeaderPrint";

/* =====================
   COUNTRY & STATE DATA
===================== */
const countries = [
  "India",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "United Arab Emirates",
  "Singapore",
  "Other",
];

const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu & Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Tamil Nadu",
  "Telangana",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const WholesalerRegister: React.FC = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    country: "India",
    state: "",
    city: "",
    password: "",
    gstFile: null as File | null,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  /* =====================
     VALIDATION HELPERS
  ===================== */
  const onlyText = (value: string) =>
    /^[A-Za-z\s]*$/.test(value);

  const onlyNumber = (value: string) =>
    /^[0-9]*$/.test(value);

  /* =====================
     HANDLE CHANGE
  ===================== */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    // Name validation
    if (
      (name === "firstName" || name === "lastName") &&
      !onlyText(value)
    )
      return;

    // Phone validation
    if (name === "phone" && !onlyNumber(value)) return;

    setForm({ ...form, [name]: value });
  };

  /* =====================
     FILE CHANGE (GST)
  ===================== */
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.size > 5 * 1024 * 1024) {
      alert("GST file must be under 5MB");
      return;
    }
    setForm({ ...form, gstFile: file || null });
  };

  /* =====================
     SUBMIT
  ===================== */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};

    if (!form.firstName) newErrors.firstName = "First name required";
    if (!form.lastName) newErrors.lastName = "Last name required";
    if (!form.email) newErrors.email = "Email required";
    if (form.phone.length !== 10)
      newErrors.phone = "Enter valid 10 digit number";
    if (!form.password || form.password.length < 6)
      newErrors.password = "Password must be 6+ characters";

    if (form.country === "India" && !form.state)
      newErrors.state = "State required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    console.log("VALID FORM DATA:", form);
    // 🔗 API CALL HERE
  };

  return (
   <>
   <HeaderPrint/>
     <section className="bg-rose-50 min-h-screen py-20 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-5xl rounded-xl shadow-lg p-3 sm:p-8"
      >
        <h2 className="text-2xl font-semibold text-center mb-8">
          Apply For Wholesaler
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <input
            className="input"
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
          )}

          <input
            className="input"
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
          )}

          <input
            className="input"
            name="email"
            placeholder="Email*"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}

          <input
            className="input"
            name="phone"
            placeholder="Phone Number*"
            maxLength={10}
            value={form.phone}
            onChange={handleChange}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}

          <input
            className="input"
            name="company"
            placeholder="Company"
            value={form.company}
            onChange={handleChange}
          />

          <select
            className="input"
            name="country"
            value={form.country}
            onChange={(e) => {
              setForm({
                ...form,
                country: e.target.value,
                state: "",
              });
            }}
          >
            {countries.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>

          <select
            className="input"
            name="state"
            disabled={form.country !== "India"}
            value={form.state}
            onChange={handleChange}
          >
            <option value="">
              {form.country === "India"
                ? "Select State"
                : "State Disabled"}
            </option>
            {indianStates.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          {errors.state && (
            <p className="text-red-500 text-sm mt-1">{errors.state}</p>
          )}

          <input
            className="input"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
          />

          <input
            type="password"
            className="input"
            name="password"
            placeholder="Password*"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}

          {/* GST OPTIONAL */}
          <label className="flex items-center justify-center gap-3 border rounded-lg cursor-pointer bg-gray-800 text-white">
            <input type="file" hidden onChange={handleFileChange} />
            ⬆ Upload GST (Optional)
          </label>
        </div>

        <p className="text-sm text-gray-500 mt-2">
          GST file optional • Max size 5MB
        </p>

        <button
          type="submit"
          className="mt-8 w-full bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-black"
        >
          REGISTER
        </button>

        <button
          type="button"
          className="mt-4 w-full border border-gray-800 py-3 rounded-lg font-medium"
        >
          <Link to="/branch/sundar-print/wholesaler/login">ALREADY A WHOLESALER? LOGIN</Link>
        </button>
      </form>
    </section>
   </>
  );
};

export default WholesalerRegister;
