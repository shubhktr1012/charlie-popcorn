import React from 'react'
import { createRoot } from 'react-dom/client'
import { ScrollProvider } from './contexts/ScrollContext'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ScrollProvider>
      <App />
    </ScrollProvider>
  </React.StrictMode>,
)
