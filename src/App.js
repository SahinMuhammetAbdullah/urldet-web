import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';

// BİLEŞENLERİN İMPORT EDİLDİĞİNDEN EMİN OLUN
import Header from './components/Header'; // <-- BU SATIR EKSİK OLABİLİR
import Home from './components/Home';
import Analyze from './components/Analyze';
import About from './components/About';
import Footer from './components/Footer'; // <-- BU SATIR EKSİK OLABİLİR

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="app-container">
          {/* Header burada çağrılıyor, bu yüzden yukarıda import edilmeli */}
          <Header /> 
          
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/analysis" element={<Analyze />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          
          {/* Footer burada çağrılıyor, bu yüzden yukarıda import edilmeli */}
          <Footer /> 
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;