'use client';

import React from 'react';
import { motion } from 'motion/react';

const flavors = [
  {
    name: 'Salted',
    description: 'Classic simplicity. Freshly popped corn sprinkled with just the right amount of fine sea salt.',
    color: 'bg-[#FFD700]' // Gold
  },
  {
    name: 'Tomato',
    description: 'Tangy and sweet. A zesty blend of sun-ripened tomatoes and savory spices that bursts with flavor.',
    color: 'bg-[#FF6347]' // Tomato
  },
  {
    name: 'Peri‑Peri',
    description: 'Spicy kick. A bold mix of African bird’s eye chili, lemon, and garlic for those who love heat.',
    color: 'bg-[#FF4500]' // OrangeRed
  },
  {
    name: 'Schezwan',
    description: 'Asian fusion. An exotic combination of Sichuan peppers and pungent spices for a unique fiery taste.',
    color: 'bg-[#DC143C]' // Crimson
  },
];

const cardVariants = {
  initial: { y: 0, scale: 1, zIndex: 0, rotate: 0 },
  hover: {
    y: -50,
    scale: 1.1,
    zIndex: 10,
    rotate: -5,
    transition: { type: 'spring', stiffness: 300, damping: 20 }
  }
};

export default function Flavors() {
  return (
    <section id="flavors" className="bg-base-100 py-24 px-6 overflow-hidden">
      <div className="container mx-auto text-center mb-20">
        <h2 className="font-lobster font-bold text-4xl sm:text-5xl text-accent mb-6">
          Our Flavors
        </h2>
        <p className="font-league-spartan text-xl text-base-content/80 max-w-2xl mx-auto">
          Hand-crafted varieties for every palate. Hover to discover!
        </p>
      </div>

      <div className="flex justify-center items-center h-[400px]">
        <div className="relative flex items-center justify-center w-full max-w-4xl">
          {flavors.map((flavor, index) => {
            // Create a pseudo-random vertical offset based on index to keep it consistent
            const randomY = (index % 2 === 0 ? 1 : -1) * (Math.random() * 10 + 5);

            return (
              <motion.div
                key={flavor.name}
                className={`relative -ml-12 first:ml-0 w-64 h-80 rounded-3xl shadow-xl cursor-pointer flex flex-col items-center justify-center p-6 text-center border-4 border-white ${flavor.color}`}
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
                style={{ marginTop: randomY }} // Add random vertical offset
              >
                <h3 className="font-lobster text-3xl text-white mb-4 drop-shadow-md">
                  {flavor.name}
                </h3>
                <p className="font-league-spartan text-white/90 text-lg leading-relaxed font-medium">
                  {flavor.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

