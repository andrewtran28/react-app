import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Greeting, Food } from "./Greeting.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
    <Food />
  </StrictMode>,
)
