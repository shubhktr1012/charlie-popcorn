import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Flavors from './components/Flavors'
import HowToOrder from './components/HowToOrder'
import FAQs from './components/FAQs'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <div data-theme="charlie" className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <div className="content-container">
          <About /> 
          <Flavors /> 
          <HowToOrder />
        </div>
        <FAQs />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
