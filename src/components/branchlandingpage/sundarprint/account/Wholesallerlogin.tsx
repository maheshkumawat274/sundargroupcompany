import React, { useState } from "react";
import { Link } from "react-router-dom";

const WholesalerLogin: React.FC = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("LOGIN DATA:", form);
    // 🔗 LOGIN API CALL
  };

  return (
    <section className="bg-rose-50 min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-md rounded-xl shadow-lg p-8"
      >
        <h2 className="text-2xl font-semibold text-center mb-8">
          Wholesaler Login
        </h2>

        {/* EMAIL */}
        <input
          className="input mb-4"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        {/* PASSWORD */}
        <input
          type="password"
          className="input mb-2"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

        {/* ACTION LINKS */}
        <div className="flex justify-between items-center mb-6 text-sm">
          <Link
            to="/branch/sundar-print/wholesaler/forgot-password"
            className="text-rose-600 hover:underline"
          >
            Forgot Password?
          </Link>

          <Link
            to="/branch/sundar-print/wholesaler/register"
            className="text-gray-700 hover:underline"
          >
            Register New Account
          </Link>
        </div>

        {/* LOGIN BUTTON */}
        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-black"
        >
          LOGIN
        </button>
      </form>
    </section>
  );
};

export default WholesalerLogin;
