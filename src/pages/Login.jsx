

import React from 'react'
import { useState } from 'react';
import { Eye, EyeOff, LogIn } from "lucide-react";

function Login() {
 const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", phone: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.phone) newErrors.phone = "Phone number is required";
    else if (!/^[0-9]{10}$/.test(formData.phone))
      newErrors.phone = "Phone number must be 10 digits";

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(`✅ Login Successful!\nEmail: ${formData.email}\nPhone: ${formData.phone}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] animate-gradient-xy">
      <form
        onSubmit={handleSubmit}
        className="relative bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.3)] w-80 sm:w-96 animate-fade-in"
      >
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-lg">
            <LogIn className="text-white w-6 h-6" />
          </div>
        </div>
        <h2 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 mb-6">
          Welcome Back
        </h2>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-200 mb-1 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-300"
          />
          {errors.email && <p className="text-red-300 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-gray-200 mb-1 font-semibold">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-300"
          />
          {errors.phone && <p className="text-red-300 text-sm mt-1">{errors.phone}</p>}
        </div>

        {/* Password */}
        <div className="mb-6 relative">
          <label className="block text-gray-200 mb-1 font-semibold">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-300 pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-9 text-gray-300 hover:text-white transition"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
          {errors.password && <p className="text-red-300 text-sm mt-1">{errors.password}</p>}
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 hover:from-purple-600 hover:to-cyan-400 text-white font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
        >
          Login
        </button>

        <p className="text-center text-gray-300 text-sm mt-4">
          Don’t have an account?{" "}
          <span className="text-cyan-300 hover:underline cursor-pointer">Sign up</span>
        </p>
      </form>
    </div>
  )
}

export default Login
