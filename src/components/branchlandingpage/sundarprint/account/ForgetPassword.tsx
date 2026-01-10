import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.oldPassword || !form.newPassword) {
      setError("All fields are required");
      return;
    }

    if (form.newPassword.length < 6) {
      setError("New password must be at least 6 characters");
      return;
    }

    if (form.newPassword !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    console.log("UPDATE PASSWORD DATA:", form);

    // 🔗 API CALL:
    // verify old password
    // update new password

    alert("Password updated successfully");
    navigate("/wholesaler/login");
  };

  return (
    <section className="bg-rose-50 min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-md rounded-xl shadow-lg p-8"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">
          Reset Password
        </h2>

        <p className="text-sm text-gray-600 text-center mb-6">
          Enter your old password to generate a new one.
        </p>

        {/* ERROR */}
        {error && (
          <p className="text-sm text-red-600 mb-4 text-center">
            {error}
          </p>
        )}

        {/* OLD PASSWORD */}
        <input
          type="password"
          name="oldPassword"
          className="input mb-4"
          placeholder="Old Password"
          value={form.oldPassword}
          onChange={handleChange}
        />

        {/* NEW PASSWORD */}
        <input
          type="password"
          name="newPassword"
          className="input mb-4"
          placeholder="New Password"
          value={form.newPassword}
          onChange={handleChange}
        />

        {/* CONFIRM PASSWORD */}
        <input
          type="password"
          name="confirmPassword"
          className="input mb-6"
          placeholder="Confirm New Password"
          value={form.confirmPassword}
          onChange={handleChange}
        />

        {/* UPDATE BUTTON */}
        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-black transition"
        >
          Update Password
        </button>

        {/* HELP SECTION */}
        <div className="mt-6 border-t pt-4 text-center">
          <p className="text-sm text-gray-600 mb-2">
            Forgot your old password?
          </p>

          <button
            type="button"
            onClick={() => navigate("/contact-us")}
            className="text-rose-600 font-medium hover:underline"
          >
            Contact Support
          </button>
        </div>

        {/* BACK TO LOGIN */}
        <Link
          to="/branch/sundar-print/wholesaler/login"
          className="block mt-4 text-center text-sm text-gray-500 hover:underline"
        >
          ← Back to Login
        </Link>
      </form>
    </section>
  );
};

export default ForgotPassword;
