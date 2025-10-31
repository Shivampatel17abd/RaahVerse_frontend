import React from 'react'
import { motion } from "framer-motion";
import { Plane, MapPin, Camera, Globe2 } from "lucide-react";

function Default() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-100 relative overflow-hidden">
      {/* Background world map image */}
      <motion.img
        src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1500&q=80"
        alt="Travel background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/80"></div>

      {/* Floating icons animation */}
      <motion.div
        className="absolute top-20 left-10 text-indigo-400"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Plane size={48} />
      </motion.div>

      <motion.div
        className="absolute bottom-24 right-16 text-blue-500"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <MapPin size={42} />
      </motion.div>

      <motion.div
        className="absolute top-32 right-24 text-pink-400"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <Camera size={46} />
      </motion.div>

      <motion.div
        className="absolute bottom-16 left-16 text-indigo-600"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Globe2 size={64} />
      </motion.div>

      {/* Main text section */}
      <div className="z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-extrabold text-indigo-700 mb-6"
        >
          🌍 Coming Soon
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-gray-700 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
        >
          We’re preparing something wonderful for explorers and dreamers —  
          your next journey begins here. Stay tuned for our grand launch!
        </motion.p>

        {/* Scrolling text animation */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="text-indigo-500 font-semibold text-lg tracking-wide whitespace-nowrap"
        >
          ✈️ Discover the world · 🏝️ Find hidden gems · 🗺️ Plan your adventure · 🌄 Travel. Explore. Live. · ✈️
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 text-gray-500 text-sm text-center"
      >
        <p>© 2025 Travel Explorer — New adventures loading...</p>
      </motion.div>
    </div>
  )
}

export default Default
