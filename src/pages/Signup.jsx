

import React from 'react'
import { Eye, EyeOff, UserPlus } from "lucide-react"; 
import { useState } from 'react';

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
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

    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Please confirm your password";
    else if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(
        `✅ Signup Successful!\nEmail: ${formData.email}\nPhone: ${formData.phone}`
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] animate-gradient-xy">
      <form
        onSubmit={handleSubmit}
        className="relative bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.3)] w-80 sm:w-96 animate-fade-in"
      >
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-lg">
            <UserPlus className="text-white w-6 h-6" />
          </div>
        </div>
        <h2 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 mb-6">
          Create Account
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
        <div className="mb-4 relative">
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

        {/* Confirm Password */}
        <div className="mb-6 relative">
          <label className="block text-gray-200 mb-1 font-semibold">Confirm Password</label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-300 pr-10"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-9 text-gray-300 hover:text-white transition"
          >
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
          {errors.confirmPassword && (
            <p className="text-red-300 text-sm mt-1">{errors.confirmPassword}</p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 hover:from-purple-600 hover:to-cyan-400 text-white font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
        >
          Sign Up
        </button>

        <p className="text-center text-gray-300 text-sm mt-4">
          Already have an account?{" "}
          <span className="text-cyan-300 hover:underline cursor-pointer">Login</span>
        </p>
      </form>
    </div>
  )
}

export default Signup
