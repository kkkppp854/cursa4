import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from "./components/header/Header";
import Catalog from "./containers/catalog/Catalog";
import Footer from "./components/footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Catalog />
    <Footer />
  </StrictMode>,
)
