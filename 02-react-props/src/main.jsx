import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App saludo='Hola' nombre='Benjamín' />
    <App saludo='Hi' nombre='Abraham' />
  </StrictMode>
)
