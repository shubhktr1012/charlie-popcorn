'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      className="relative py-12 lg:py-24 px-6 sm:px-8 lg:px-16 bg-base-100 overflow-hidden"
    >
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left column: brand story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center md:text-left"
          >
            <span className="font-league-spartan inline-block text-sm uppercase tracking-wider text-accent font-bold bg-accent/10 px-3 py-1 rounded-full">
              Our Story
            </span>
            <h2 className="font-lobster text-4xl sm:text-5xl lg:text-6xl font-bold text-base-content leading-tight mb-4">
              Handcrafted Excellence
            </h2>
            <p className="font-league-spartan text-lg sm:text-xl text-base-content/80 leading-relaxed max-w-2xl mx-auto md:mx-0">
              At Charlie’s, we believe that every bite should be an experience.
              Our journey began with a passion for creating popcorn that’s not just delicious, but memorable.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6 max-w-lg mx-auto md:mx-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4 group"
              >
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                  <span className="text-xl md:text-2xl font-bold text-primary">10+</span>
                </div>
                <div>
                  <h3 className="font-league-spartan text-base md:text-lg font-bold text-base-content">
                    Years
                  </h3>
                  <p className="font-league-spartan text-sm md:text-base text-base-content/60">
                    Experience
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4 group"
              >
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-secondary/10 group-hover:bg-secondary/20 transition-colors flex items-center justify-center">
                  <span className="text-xl md:text-2xl font-bold text-secondary">4+</span>
                </div>
                <div>
                  <h3 className="font-league-spartan text-base md:text-lg font-bold text-base-content">
                    Flavors
                  </h3>
                  <p className="font-league-spartan text-sm md:text-base text-base-content/60">
                    To Discover
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right column: brand values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8 mt-8 md:mt-0"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md duration-300">
              <h3 className="text-xl font-bold text-base-content mb-6 font-league-spartan flex items-center gap-2">
                <span className="w-2 h-8 bg-accent rounded-full"></span>
                What Makes Us Different
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    iconBg: 'bg-accent/10',
                    iconColor: 'text-accent',
                    text: 'Handcrafted in small batches for perfect texture',
                  },
                  {
                    iconBg: 'bg-secondary/10',
                    iconColor: 'text-secondary',
                    text: 'Only the finest, natural ingredients',
                  },
                  {
                    iconBg: 'bg-primary/10',
                    iconColor: 'text-primary',
                    text: 'Sustainable and eco‑friendly practices',
                  },
                ].map(({ iconBg, iconColor, text }, i) => (
                  <li key={i} className="flex items-start gap-4 p-2 rounded-xl hover:bg-base-100/50 transition-colors">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full ${iconBg} flex items-center justify-center mt-0.5`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-4 h-4 ${iconColor}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="font-league-spartan text-base-content/80 text-lg leading-snug">
                      {text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-6 sm:p-8 border border-primary/5">
              <h3 className="font-league-spartan text-xl font-bold text-base-content mb-3">
                Our Promise
              </h3>
              <p className="font-league-spartan text-lg text-base-content/80 leading-relaxed italic">
                &ldquo;We promise to deliver popcorn that’s not just a snack, but an experience.
                Each flavor is crafted with care.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
