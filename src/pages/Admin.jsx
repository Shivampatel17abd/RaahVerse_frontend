import React from 'react'
import { motion } from "framer-motion";


function Admin() {
 const cards = [
    {
      title: "Transport",
      img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80",
      desc: "Manage cab services, assign drivers, track vehicles, and handle transport bookings for tourists.",
      links: [{name:"register cab",link:"/admin/cab"}]
    },
    {
      title: "Hotels & Stays",
      img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=500&q=60",links: [{name:"Add Hotel",link:"/admin/hotel"}],
      desc: "Manage hotels, view bookings, update availability and prices.",
      links: [{name:"Add Hotel",link:"/admin/hotel"}],
    },
    {
      title: "Tour Packages",
      img: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=500&q=60",
      desc: "Create exciting tour packages with flexible pricing and itinerary options.",
      links: [{name:"Add your pakage",link:"/default"}]
    },
    {
      title: "Guides",
      img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=500&q=60",
      desc: "Add travel guides, transport info and manage cab & train services.",
      links: [{name:"register as guid",link:"/default"}]
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-100 p-8">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-center text-indigo-700 mb-10"
      >
        Tourist Guide Admin Dashboard
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
      >
        Welcome to your admin panel — manage all travel services including
        destinations, hotels, tour packages, and guides easily from here.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {card.title}
              </h2>
              <p className="text-gray-600 mb-4">{card.desc}</p>
              <ul className="space-y-2">
                {card.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.link}
                      className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
                    >
                      ➤ {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-16 text-center text-gray-600"
      >
        <p>© 2025 TouristGuide Admin Portal — All rights reserved</p>
      </motion.div>
    </div>
  );
}

export default Admin
