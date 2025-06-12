import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomePage from "./containers/Catalog";

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
