// src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Sadece Routes ve Route kullanın
import './App.css'; 

// Bileşenlerin .jsx uzantılı olduğundan emin olun
import Header from './components/Header.jsx'; 
import Home from './components/Home.jsx';
import Analyze from './components/Analyze.jsx';
import About from './components/About.jsx';
import Footer from './components/Footer.jsx'; 

function App() {
  return (
    // HelmetProvider ve BrowserRouter main.jsx'te sarmalandı
    <div className="app-container">
      <Header /> 
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analysis" element={<Analyze />} />
          <Route path="/about" element={<About />} />
          {/* Gelecekteki 404 sayfaları buraya eklenebilir */}
        </Routes>
      </main>
      
      <Footer /> 
    </div>
  );
}

export default App;