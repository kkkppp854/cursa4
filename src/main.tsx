import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <App />
    <Footer />
  </StrictMode>,
)
