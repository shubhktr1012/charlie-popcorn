'use client';

import React, { useState } from 'react';

const phoneNumber = '918827006464';

export default function HowToOrder() {
  const flavors = ['Salted', 'Tomato', 'Peri‑Peri', 'Schezwan'] as const;
  const [selected, setSelected] = useState<string[]>([]);

  const toggleFlavor = (flavor: string) => {
    setSelected((prev) =>
      prev.includes(flavor)
        ? prev.filter((f) => f !== flavor)
        : [...prev, flavor]
    );
  };

  const handleOrder = () => {
    if (selected.length === 0) return;
    const message = `Hello! I'd like to order: ${selected.join(', ')}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div id="how-to-order" className="flex flex-col h-full bg-white rounded-3xl p-8 shadow-lg border border-base-200 hover:shadow-xl transition-shadow duration-300">
      <div className="text-center mb-8">
        <h2 className="font-lobster font-bold text-3xl sm:text-4xl text-accent mb-4">
          How to Order
        </h2>
        <p className="font-league-spartan text-lg text-base-content/80">
          Select your flavors below and send your order via WhatsApp.
        </p>
      </div>

      <div className="space-y-4 flex-grow">
        {flavors.map((flavor: string) => (
          <label
            key={flavor}
            className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-200 border-2 ${selected.includes(flavor)
              ? 'bg-primary/10 border-primary'
              : 'border-transparent hover:border-base-300'
              }`}
          >
            <input
              type="checkbox"
              className="w-6 h-6 rounded border-2 border-primary text-primary focus:ring-primary focus:ring-offset-base-100 transition-colors cursor-pointer"
              checked={selected.includes(flavor)}
              onChange={() => toggleFlavor(flavor)}
            />
            <span className="font-league-spartan text-lg font-medium text-base-content">
              {flavor}
            </span>
          </label>
        ))}
      </div>

      <button
        className={`w-full mt-8 py-4 text-lg font-bold bg-primary text-primary-content rounded-xl shadow-lg transform transition-all duration-300 ${selected.length === 0
          ? 'opacity-50 cursor-not-allowed grayscale'
          : 'hover:shadow-xl hover:scale-105'
          }`}
        onClick={handleOrder}
        disabled={selected.length === 0}
      >
        Order via WhatsApp
      </button>
    </div>
  );
}