'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useScroll } from './ScrollProvider';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Flavors', href: '#flavors' },
  { name: 'How to Order', href: '#how-to-order' },
  { name: 'FAQs', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

interface NavLinksProps {
  onClick?: () => void;
  linkClass?: string;
  isMobile?: boolean;
  activeSection: string;
}

// Reusable nav‐link list
const NavLinks = ({ onClick, linkClass, isMobile = false, activeSection }: NavLinksProps) => {
  // Check if current path matches the link
  const isActive = (path: string) => {
    if (typeof window === 'undefined') return false;
    // Remove the '#' from the path for comparison with activeSection
    const sectionId = path.startsWith('#') ? path.substring(1) : path;
    return sectionId === activeSection ||
      (path === '#home' && (activeSection === 'home' || activeSection === ''));
  };

  return navigation.map((item) => {
    const active = isActive(item.href);
    return (
      <a
        key={item.name}
        href={item.href}
        onClick={(e) => {
          if (onClick) onClick();
          // Scroll to the section
          const element = document.querySelector(item.href);
          if (element) {
            e.preventDefault();
            // Update URL hash
            window.history.pushState(null, '', item.href);
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className={`nav-link font-league-spartan ${linkClass || ''} ${active ? 'underline decoration-primary decoration-2 underline-offset-4 text-base-content' : 'text-base-content/80 hover:text-primary'
          } transition-colors duration-200`}
        aria-current={active ? 'page' : undefined}
      >
        {item.name}
      </a>
    );
  });
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isScrolled: isHeroScrolled, setIsScrolled } = useScroll();

  const logo = '/images/charlie-logo.png';
  const navRef = useRef<HTMLElement>(null);

  // Set up scroll-based active section detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Adjust offset as needed

      // Find which section is in view
      const sections = navigation.map(({ href }) => ({
        id: href.substring(1),
        element: document.querySelector(href)
      })).filter(section => section.element);

      let currentSection = 'home';

      for (const section of sections) {
        if (!section.element) continue;
        const { top, height } = section.element.getBoundingClientRect();
        const sectionTop = top + window.scrollY;

        // If we've scrolled past this section's top
        if (scrollPosition >= sectionTop - 100) {
          currentSection = section.id;
        }
      }

      setActiveSection(currentSection);
      setScrolled(window.scrollY > 20);
    };

    // Initial check
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.nav
      ref={navRef}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out ${scrolled
        ? 'bg-base-100/95 shadow-md py-2 backdrop-blur-md text-base-content'
        : 'bg-transparent py-4 text-slate-800'
        }`}
      initial={false}
      animate={{
        paddingTop: scrolled ? '0.5rem' : '1rem',
        paddingBottom: scrolled ? '0.5rem' : '1rem',
      }}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8 lg:px-12">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <a href="#home" aria-label="Home" className="flex items-center gap-2">
            <div className="relative w-10 h-10">
              <img
                src={logo}
                alt="Charlie Popcorn Logo"
                className={`object-contain w-full h-full transition-all duration-300 ${scrolled ? 'scale-90' : 'scale-100'}`}
              />
            </div>
            <AnimatePresence mode="wait">
              {scrolled && (
                <motion.div
                  className="hidden lg:block ml-1"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                >
                  <span className="font-lobster font-bold text-2xl text-accent">
                    Charlie Popcorn
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </a>
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8 text-lg font-medium">
          <NavLinks
            linkClass="cursor-pointer"
            onClick={undefined}
            activeSection={activeSection}
          />
          <a
            href="https://wa.me/918827006464?text=I%20want%20to%20place%20an%20order%20for%20Charlie%20Popcorn"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-2 bg-primary text-primary-content font-bold rounded-full transition-all shadow-md hover:shadow-lg hover:scale-105 flex items-center gap-2`}
          >
            Order Now <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden p-2 rounded-full hover:bg-base-200 transition-colors"
          aria-label="Open main menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile nav panel */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 z-50 bg-base-100/95 backdrop-blur-xl flex flex-col transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex items-center justify-between h-20 px-6 sm:px-8">
          <a href="#home" aria-label="Home" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
            <img
              src={logo}
              alt="Charlie Popcorn Logo"
              width={36}
              height={36}
              className="object-contain"
            />
            <span className="font-lobster text-2xl font-bold text-accent">Charlie Popcorn</span>
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-full hover:bg-base-200 transition-colors"
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center gap-6 mt-12 p-6">
          <NavLinks
            onClick={() => setMobileMenuOpen(false)}
            linkClass="block w-full text-center px-4 py-3 text-xl font-medium hover:bg-base-200 rounded-xl transition-all duration-200 text-base-content"
            isMobile
            activeSection={activeSection}
          />
          <a
            href="https://wa.me/918827006464?text=I%20want%20to%20place%20an%20order%20for%20Charlie%20Popcorn"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-xs px-6 py-3 bg-primary text-primary-content font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all text-center flex justify-center items-center gap-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Order Now <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
