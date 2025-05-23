import React, { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useScroll } from '../contexts/ScrollContext';

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
        className={`nav-link ${linkClass || ''} ${
          active ? 'active' : ''
        } hover:color-primary-content transition-colors duration-200`}
        style={{ fontFamily: 'League Spartan, sans-serif' }}
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
  const observerRef = useRef<IntersectionObserver | null>(null);

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
      
      // Update URL without scrolling
      history.replaceState(null, '', `#${currentSection}`);
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

  // Scroll handler with hero section detection
  const handleScroll = useCallback(() => {
    const heroSection = document.getElementById('hero-heading');
    if (!heroSection) return;

    const heroRect = heroSection.getBoundingClientRect();
    const isPastHero = heroRect.bottom < 0;
    
    setIsScrolled(isPastHero);
    setScrolled(window.scrollY > 20);
  }, [setIsScrolled]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check in case page loads with scroll
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <motion.nav
      ref={navRef}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled 
          ? 'bg-base-100/95 shadow-md py-2 backdrop-blur-md text-base-content'
          : 'bg-transparent py-4 text-white'
      }`}
      initial={false}
      animate={{
        paddingTop: scrolled ? '0.5rem' : '1rem',
        paddingBottom: scrolled ? '0.5rem' : '1rem',
      }}
    >
      <div className="container flex items-center justify-between px-4 sm:px-8 lg:px-12">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <a href="#home" aria-label="Home" className="flex items-center">
            <img
              src={logo}
              alt="Charlie Popcorn Logo"
              width={scrolled ? 24 : 32}
              height={scrolled ? 24 : 32}
              className="object-contain transition-all duration-300 ease-in-out"
            />
          </a>
          <AnimatePresence mode="wait">
            {isHeroScrolled && (
              <motion.div 
                className="hidden lg:block ml-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { 
                    duration: 0.3,
                    ease: "easeOut"
                  }
                }}
                exit={{ 
                  opacity: 0,
                  x: -10,
                  transition: { 
                    duration: 0.2,
                    ease: "easeIn"
                  }
                }}
              >
                <span 
                  className="font-lobster font-bold text-xl"
                  style={{ 
                    fontFamily: "'Lobster', cursive",
                    color: 'oklch(55% 0.195 38.402)'
                  }}
                >
                  Charlie Popcorn
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8 font-league-spartan text-lg">
          <NavLinks 
            linkClass="cursor-pointer" 
            onClick={undefined} 
            activeSection={activeSection} 
          />
          <a
            href="https://wa.me/918827006464?text=I%20want%20to%20place%20an%20order%20for%20Charlie%20Popcorn"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-sm font-bold flex items-center gap-1 ml-4 ${
              scrolled 
                ? 'btn-primary' 
                : 'bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/30'
            }`}
          >
            Order Now <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden btn btn-ghost p-2"
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
        className={`lg:hidden fixed inset-0 z-50 bg-base-100/95 backdrop-blur-md flex flex-col transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between h-16 px-4 sm:px-8 lg:px-12">
          <a href="#home" aria-label="Home" onClick={() => setMobileMenuOpen(false)}>
            <img
              src={logo}
              alt="Charlie Popcorn Logo"
              width={32}
              height={32}
              className="object-contain"
            />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="btn btn-ghost p-2"
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
        <div className="flex flex-col items-center gap-6 mt-8 font-league-spartan text-xl">
          <NavLinks
            onClick={() => setMobileMenuOpen(false)}
            linkClass="block px-4 py-3 text-lg font-medium hover:bg-base-200 rounded-lg transition-colors duration-200 text-base-content"
            isMobile
            activeSection={activeSection}
          />
          <a
            href="https://wa.me/918827006464?text=I%20want%20to%20place%20an%20order%20for%20Charlie%20Popcorn"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg font-bold flex items-center gap-1 mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Order Now <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
