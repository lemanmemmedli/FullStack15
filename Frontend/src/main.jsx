import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BasketProvider from './context/BasketContext.jsx'
import FavoriteProvider from './context/FavoriteContext.jsx'

createRoot(document.getElementById('root')).render(
  <FavoriteProvider>
  <BasketProvider>
    <App />
  </BasketProvider>
  </FavoriteProvider>,
)
