import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import Login from './pages/Login/Login'
import Products from './pages/Products/Products'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Products/>
  </StrictMode>,
)
