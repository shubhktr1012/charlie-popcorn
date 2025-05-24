import React from 'react';

export default function Hero() {
  return (
    <section className="hero-background relative pt-40 pb-0 px-6 sm:px-8 lg:px-12 min-h-[90vh] flex items-center w-full">
      {/* Gradient overlay for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-base-100 to-transparent -z-10" />
      <div className="mx-auto max-w-6xl w-full flex flex-col-reverse lg:flex-row items-center gap-12 text-center lg:text-left mt-12">
        {/* Text Content */}
        <div className="flex-1">
          <h1 
            id="hero-heading"
            className="font-lobster font-bold text-[clamp(2.5rem,5vw,4rem)] sm:text-[clamp(4rem,6vw,6rem)] mb-4"
            style={{ 
              fontFamily: "'Lobster', cursive",
              color: 'oklch(55% 0.195 38.402)'
            }}
          >
            Charlie Popcorn
          </h1>
          <p 
            style={{ fontFamily: 'League Spartan, sans-serif' }} 
            className="text-base-content text-lg sm:text-xl mb-8"
          >
            Fresh, fun, and full of flavor! Discover the magic of gourmet popcorn, hand‑crafted for every occasion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="https://wa.me/918827006464?text=I%20want%20to%20place%20an%20order%20for%20Charlie%20Popcorn"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg font-bold"
              aria-label="Order now"
            >
              Order Now <span aria-hidden="true">→</span>
            </a>
            <a 
              href="#flavors" 
              className="btn btn-outline btn-primary btn-lg font-bold" 
              aria-label="See flavors"
            >
              See Flavors
            </a>
          </div>
        </div>
        {/* Mockup Image */}
        <div className="flex-1 flex justify-center lg:justify-end mb-8 lg:mb-0">
          <img 
            src="/images/packets-hero.png" 
            alt="Charlie Popcorn Bags Mockup" 
            className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl w-full h-auto drop-shadow-2xl rounded-xl" 
          />
        </div>
      </div>
    </section>
  );
}
