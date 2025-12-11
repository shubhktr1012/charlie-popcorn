'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="hero-background relative pt-28 pb-12 px-6 sm:px-8 lg:px-12 min-h-[85vh] flex items-center w-full overflow-hidden">
      {/* Gradient overlay for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-base-100 to-transparent -z-10" />

      <div className="mx-auto max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 text-center lg:text-left">
        {/* Text Content */}
        <motion.div
          className="flex-1 z-10"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1
            id="hero-heading"
            className="font-lobster font-bold text-[clamp(2.5rem,5vw,5rem)] leading-none mb-6 text-accent drop-shadow-sm"
          >
            Charlie Popcorn
          </h1>
          <p className="font-league-spartan text-base-content/90 text-lg sm:text-xl lg:text-2xl mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Fresh, fun, and full of flavor! Discover the magic of gourmet popcorn, hand‑crafted for every occasion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="https://wa.me/918827006464?text=I%20want%20to%20place%20an%20order%20for%20Charlie%20Popcorn"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-content text-lg px-8 py-3.5 rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 active:scale-95"
              aria-label="Order now"
            >
              Order Now <span aria-hidden="true">→</span>
            </a>
            <a
              href="#flavors"
              className="border-2 border-primary text-primary text-lg px-8 py-3.5 rounded-xl font-bold hover:bg-primary hover:text-primary-content transition-all flex items-center justify-center active:scale-95"
              aria-label="See flavors"
            >
              See Flavors
            </a>
          </div>
        </motion.div>

        {/* Mockup Image */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <img
            src="/images/packets-hero.png"
            alt="Charlie Popcorn Bags Mockup"
            className="w-full max-w-[280px] sm:max-w-[380px] lg:max-w-[540px] h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500 ease-out"
          />
        </motion.div>
      </div>
    </section>
  );
}
