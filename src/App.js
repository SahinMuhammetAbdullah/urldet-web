import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Analyze from './components/Analyze';
import Footer from './components/Footer';
import About from './components/About'; // <-- YENİ BİLEŞENİ İMPORT ET

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analysis" element={<Analyze />} />
            <Route path="/about" element={<About />} /> {/* <-- YENİ ROTAYI EKLE */}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;