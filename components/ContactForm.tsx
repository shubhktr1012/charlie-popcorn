'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    const message = `Hello! Please callback on this number: ${phone}`;
    const url = `https://wa.me/918827006464?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setPhone('');
  };

  return (
    <section id="contact" className="py-20 px-6 sm:px-8 lg:px-12 bg-base-100">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-base-200/50 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">

          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-8 -mt-8 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/10 rounded-tr-full -ml-8 -mb-8 pointer-events-none" />

          <div className="relative z-10 text-center space-y-8">
            <div className="space-y-4">
              <span className="font-league-spartan text-sm font-bold uppercase tracking-widest text-accent/80">
                Contact Us
              </span>
              <h2 className="font-lobster font-bold text-4xl sm:text-5xl text-accent">
                Stay in Touch
              </h2>
              <p className="font-league-spartan text-lg sm:text-xl text-base-content/80 max-w-lg mx-auto leading-relaxed">
                Have questions or need us to call you back? Drop your mobile number below, and we'll reach out soon!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 sm:space-y-0 sm:flex sm:gap-4">
              <input
                type="tel"
                placeholder="Enter your mobile number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full px-6 py-4 text-lg bg-base-100 border-2 border-base-300 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300 rounded-2xl font-league-spartan outline-none placeholder:text-base-content/40 shadow-inner"
              />

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 text-lg font-bold bg-primary text-primary-content rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 whitespace-nowrap"
              >
                Call Me
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
