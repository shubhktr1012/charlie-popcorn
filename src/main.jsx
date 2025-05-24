import React from 'react';
import { createRoot } from 'react-dom/client';
import { ScrollProvider } from './contexts/ScrollContext';
import App from './App.jsx';
import './index.css';

// Import and register GSAP plugins
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

try {
  gsap.registerPlugin(ScrollTrigger);
  console.log('GSAP ScrollTrigger registered successfully');
} catch (e) {
  console.error('Failed to register GSAP plugins:', e);
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ScrollProvider>
      <App />
    </ScrollProvider>
  </React.StrictMode>,
)
