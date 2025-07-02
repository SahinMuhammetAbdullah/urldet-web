import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Analyze from './components/Analyze';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analysis" element={<Analyze />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;