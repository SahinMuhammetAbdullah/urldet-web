// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Global CSS dosyanız

// Gerekli Sarmalayıcılar (Provider'lar)
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n.js'; // i18n yapılandırma dosyanızın yolu

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        {/* I18nextProvider, çeviri sisteminin çalışması için en üstte olmalı */}
        <I18nextProvider i18n={i18n}>
            {/* Router, sayfa geçişlerini yönetir */}
            <BrowserRouter>
                {/* HelmetProvider, SEO başlıklarını yönetir */}
                <HelmetProvider>
                    {/* Uygulamanın ana bileşeni */}
                    <App />
                </HelmetProvider>
            </BrowserRouter>
        </I18nextProvider>
    </React.StrictMode>,
  );
}