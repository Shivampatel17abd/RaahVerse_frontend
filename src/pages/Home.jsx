import React from 'react'
import {
//   Home,
  Car,
  Hotel,
  Globe,
  Mic,
  Train,
  Bus,
  Menu,
  X,
} from "lucide-react";
import { useState } from 'react';

function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

 const navItems = [
    
    {
      link:"/default",
      name: "Cabs",
      icon: <Car size={18} />,
      image:
        "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=900&q=60",
      desc: "Book nearby rides quickly with trusted drivers and clean vehicles.",
    },
    {
      link:"/default",
      name: "Hotels",
      icon: <Hotel size={18} />,
      image:
        "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=900&q=60",
      desc: "Find and book your perfect stay at luxury and budget hotels.",
    },
    {
      link:"/admin",
      name: "Admin Portals",
      icon: <Globe size={18} />,
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=60",
      desc: "Access all travel tools, updates, and online services in one place.",
    },
    {
      link:"/default",
      name: "Voice Assistance",
      icon: <Mic size={18} />,
      image:
        "https://images.unsplash.com/photo-1517059224940-d4af9eec41e5?auto=format&fit=crop&w=900&q=60",
      desc: "Use AI-powered voice commands to plan and manage your trips easily.",

    },
    {
      link:"/default",
      name: "Trains",
      icon: <Train size={18} />,
      image:
        "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=900&q=60",
      desc: "Search, plan, and book your train journeys with live schedule updates.",
    },
    {
      link:"/default",
      name: "Buses",
      icon: <Bus size={18} />,
      image:
        "https://images.unsplash.com/photo-1517949908114-720226b864c1?auto=format&fit=crop&w=900&q=60",
      desc: "Book intercity and local buses at affordable prices and comfort.",
    },
    // {
    //   link:"/login",
    //   name: "login",
    //   icon: <Bus size={18} />,
    //   image:
    //     "https://images.unsplash.com/photo-1517949908114-720226b864c1?auto=format&fit=crop&w=900&q=60",
    //   desc: "Book intercity and local buses at affordable prices and comfort.",
    // },
    // {
    //   link:"/signup",
    //   name: "Signup",
    //   icon: <Bus size={18} />,
    //   image:
    //     "https://images.unsplash.com/photo-1517949908114-720226b864c1?auto=format&fit=crop&w=900&q=60",
    //   desc: "Book intercity and local buses at affordable prices and comfort.",
    // },
    
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-200">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white shadow-md fixed w-full top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold tracking-wide">TravelEase</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 font-medium">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="flex items-center space-x-2 hover:text-yellow-300 transition"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden bg-blue-700 text-white px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href="#"
                  className="flex items-center space-x-3 hover:text-yellow-300"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center pt-32 pb-20 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
          Explore. Travel. Relax.
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl">
          Book cabs, hotels, trains, and buses — all in one place. Let our voice assistant help you plan your perfect trip!
        </p>
        <button className="mt-8 bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-6 py-3 rounded-full font-semibold shadow-lg">
          Get Started
        </button>
      </section>

      {/* Section Boxes with Images */}
      <section className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 md:px-20 pb-20">
        {navItems.map((item) => (
          <div
            key={item.name}
            className="relative group rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition transform duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-56 object-cover group-hover:brightness-75 transition duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white opacity-0 group-hover:opacity-100 transition duration-300">
              <div className="mb-2">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <link rel="stylesheet" href={item.link} />
              <p className="text-sm px-3">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white text-center py-4">
        <p>© 2025 TravelEase. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default Home
