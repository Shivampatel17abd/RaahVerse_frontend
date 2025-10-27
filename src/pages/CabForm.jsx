import React from 'react'
import { useState } from 'react';

function CabForm() {
   const [formData, setFormData] = useState({
    ownerName: "",
    driverName: "",
    vehicleNum: "",
    vehiclePic: null,
    driverPic: null,
    ownerAadhaar: null,
    driverAadhaar: null,
    driverLicense: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) setFormData({ ...formData, [name]: files[0] });
    else setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    console.log(formData);
  };

  const previewImage = (file) => (file ? URL.createObjectURL(file) : null);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center p-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-800/70 via-purple-800/60 to-blue-800/70 backdrop-blur-sm"></div>

      {/* Main Form Container */}
      <div className="relative bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl shadow-2xl p-10 w-full max-w-5xl flex flex-col md:flex-row items-center gap-6 z-10">
        {/* Left Illustration */}
        <div className="hidden md:flex flex-1 justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/743/743131.png"
            alt="Vehicle illustration"
            className="w-72 h-72 animate-bounce-slow"
          />
        </div>

        {/* Right Side Form */}
        <div className="flex-1 w-full text-white">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-yellow-300 to-blue-400 drop-shadow-lg">
            Vehicle Registration Form
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Owner Name */}
            <div>
              <label className="block font-semibold mb-1">Owner Name</label>
              <input
                type="text"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                required
                placeholder="Enter owner name"
                className="w-full p-2 rounded-lg bg-white/20 text-white placeholder-gray-200 border border-white/40 focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>

            {/* Driver Name */}
            <div>
              <label className="block font-semibold mb-1">Driver Name</label>
              <input
                type="text"
                name="driverName"
                value={formData.driverName}
                onChange={handleChange}
                required
                placeholder="Enter driver name"
                className="w-full p-2 rounded-lg bg-white/20 text-white placeholder-gray-200 border border-white/40 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            {/* Vehicle Number */}
            <div>
              <label className="block font-semibold mb-1">Vehicle Number</label>
              <input
                type="text"
                name="vehicleNum"
                value={formData.vehicleNum}
                onChange={handleChange}
                required
                placeholder="Enter vehicle number"
                className="w-full p-2 rounded-lg bg-white/20 text-white placeholder-gray-200 border border-white/40 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </div>

            {/* Upload Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "vehiclePic", label: "Vehicle Picture" },
                { name: "driverPic", label: "Driver Picture" },
                { name: "ownerAadhaar", label: "Owner Aadhaar Picture" },
                { name: "driverAadhaar", label: "Driver Aadhaar Picture" },
                { name: "driverLicense", label: "Driver License Picture" },
              ].map((item) => (
                <div key={item.name}>
                  <label className="block font-semibold mb-1">{item.label}</label>
                  <input
                    type="file"
                    accept="image/*"
                    name={item.name}
                    onChange={handleChange}
                    className="w-full p-2 rounded-lg bg-white/20 text-white border border-white/40 focus:outline-none focus:ring-2 focus:ring-pink-300"
                  />
                  {formData[item.name] && (
                    <img
                      src={previewImage(formData[item.name])}
                      alt={item.label}
                      className="mt-2 w-full h-36 object-cover rounded-lg border border-white/30 shadow-md"
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 mt-4 font-bold rounded-lg text-lg bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-blue-500 hover:to-pink-500 transition-all shadow-xl"
            >
              Submit Details
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CabForm
