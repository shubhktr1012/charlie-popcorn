import React from 'react';
const logo = '/images/charlie-logo.png';

const footerNav = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Flavors', href: '#flavors' },
  { name: 'How to Order', href: '#order' },
  { name: 'FAQs', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-accent text-primary-content py-12 px-6 sm:px-8 lg:px-12 border-t border-accent-content/10">
      <div className="container mx-auto flex flex-col items-center gap-8 md:gap-12">
        {/* Top: Logo and Nav */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8 md:gap-0">
          {/* Logo and Brand */}
          <a
            href="#home"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-200 group"
          >
            <div className="bg-base-100/10 p-2 rounded-xl group-hover:bg-base-100/20 transition-colors">
              <img
                src={logo}
                alt="Charlie Popcorn Logo"
                className="h-10 w-10 object-contain"
              />
            </div>
            <span className="font-lobster text-2xl font-bold text-base-100 tracking-wide">
              Charlie Popcorn
            </span>
          </a>

          {/* Nav Links */}
          <nav>
            <ul className="flex flex-wrap items-center justify-center md:justify-end gap-x-8 gap-y-4">
              {footerNav.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-league-spartan text-base-100/80 hover:text-base-100 hover:underline decoration-2 underline-offset-4 transition-all duration-200 font-medium text-lg"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-base-100/10" />

        {/* Bottom: Copyright and Socials placeholder */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4 text-center sm:text-left">
          <p className="font-league-spartan text-sm text-base-100/60">
            © {new Date().getFullYear()} Charlie Popcorn. All rights reserved.
          </p>
          <p className="font-league-spartan text-sm text-base-100/60 hidden sm:block">
            Handcrafted with love ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}