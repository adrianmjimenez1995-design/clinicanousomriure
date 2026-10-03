import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
// Tipografies servides des de la mateixa web (sense Google Fonts: més privacitat i sense dependències externes)
import '@fontsource-variable/fraunces/opsz.css'
import '@fontsource-variable/fraunces/opsz-italic.css'
import '@fontsource-variable/plus-jakarta-sans/wght.css'
import '@/index.css'

const root = document.getElementById('root')

// Si la pàgina ja ve generada en HTML (prerender), React s'hi enganxa; si no, la pinta de zero
if (root.hasChildNodes()) {
  ReactDOM.hydrateRoot(root, <App />)
} else {
  ReactDOM.createRoot(root).render(<App />)
}
