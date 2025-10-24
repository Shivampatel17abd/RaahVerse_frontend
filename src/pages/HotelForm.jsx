import React from 'react'
import { Building2, UploadCloud } from "lucide-react";
import { useState } from 'react';

function HotelForm() {
    const [formData, setFormData] = useState({
    ownerName: "",
    aadhar: "",
    gst: "",
    address: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.ownerName) newErrors.ownerName = "Owner name is required";
    if (!formData.aadhar) newErrors.aadhar = "Aadhar number is required";
    else if (!/^[0-9]{12}$/.test(formData.aadhar))
      newErrors.aadhar = "Must be 12 digits";
    if (!formData.gst) newErrors.gst = "GST number is required";
    else if (!/^[0-9A-Z]{15}$/.test(formData.gst))
      newErrors.gst = "Must be 15 alphanumeric characters";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.image) newErrors.image = "Hotel image is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(`🏨 Hotel Info Submitted!\nOwner: ${formData.ownerName}`);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-800/70 via-blue-900/70 to-amber-800/70"></div>

      <form
        onSubmit={handleSubmit}
        className="relative z-10 bg-white/10 backdrop-blur-2xl border border-white/30 p-8 rounded-3xl shadow-[0_8px_50px_rgba(0,0,0,0.4)] w-80 sm:w-[28rem] animate-fade-in transition-all duration-500 hover:scale-[1.02]"
      >
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full shadow-lg">
            <Building2 className="text-white w-6 h-6" />
          </div>
        </div>

        <h2 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-emerald-300 to-blue-400 mb-6 drop-shadow-lg">
          Hotel Registration
        </h2>

        {/* Owner Name */}
        <div className="mb-4">
          <label className="block text-gray-100 mb-1 font-semibold">Owner Name</label>
          <input
            type="text"
            name="ownerName"
            placeholder="Enter owner name"
            value={formData.ownerName}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-gray-200 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition duration-300"
          />
          {errors.ownerName && (
            <p className="text-red-300 text-sm mt-1">{errors.ownerName}</p>
          )}
        </div>

        {/* Aadhar */}
        <div className="mb-4">
          <label className="block text-gray-100 mb-1 font-semibold">Aadhar Card No</label>
          <input
            type="text"
            name="aadhar"
            placeholder="Enter 12-digit Aadhar number"
            value={formData.aadhar}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-gray-200 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition duration-300"
          />
          {errors.aadhar && (
            <p className="text-red-300 text-sm mt-1">{errors.aadhar}</p>
          )}
        </div>

        {/* GST */}
        <div className="mb-4">
          <label className="block text-gray-100 mb-1 font-semibold">GST No</label>
          <input
            type="text"
            name="gst"
            placeholder="Enter 15-character GST number"
            value={formData.gst}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-gray-200 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition duration-300"
          />
          {errors.gst && <p className="text-red-300 text-sm mt-1">{errors.gst}</p>}
        </div>

        {/* Address */}
        <div className="mb-4">
          <label className="block text-gray-100 mb-1 font-semibold">Address</label>
          <textarea
            name="address"
            placeholder="Enter hotel address"
            value={formData.address}
            onChange={handleChange}
            rows="3"
            className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-gray-200 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition duration-300"
          ></textarea>
          {errors.address && (
            <p className="text-red-300 text-sm mt-1">{errors.address}</p>
          )}
        </div>

        {/* Image Upload */}
        <div className="mb-6">
          <label className="block text-gray-100 mb-2 font-semibold">Hotel Image</label>
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-white/40 rounded-xl p-4 bg-white/10 hover:bg-white/20 transition-all duration-300 cursor-pointer">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
              id="hotelImage"
            />
            <label htmlFor="hotelImage" className="flex flex-col items-center gap-2">
              <UploadCloud className="text-white w-6 h-6" />
              <span className="text-gray-100 text-sm">Upload Hotel Picture</span>
            </label>
          </div>
          {preview && (
            <div className="mt-4 rounded-xl border border-white/40 p-1 bg-gradient-to-r from-emerald-400/30 via-amber-400/30 to-blue-400/30 shadow-xl">
              <img
                src={preview}
                alt="Hotel Preview"
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
          )}
          {errors.image && <p className="text-red-300 text-sm mt-1">{errors.image}</p>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-gradient-to-r from-emerald-400 via-amber-400 to-blue-500 hover:from-blue-500 hover:to-emerald-400 text-white font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
        >
          Submit Info
        </button>
      </form>
    </div>
  )
}

export default HotelForm
