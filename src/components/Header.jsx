import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'; // <-- 1. ReactDOM'u import edin
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  // --- Mobil Menü JSX'ini bir değişkene alıyoruz ---
  const mobileMenu = (
    <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
      <NavLink to="/" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>{t('header.navHome')}</NavLink>
      <NavLink to="/analysis" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>{t('header.navAnalyze')}</NavLink>
      <NavLink to="/about" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>{t('about.navLink')}</NavLink>
      <div className="mobile-language-switcher">
        <button onClick={() => changeLanguage('tr')}>Türkçe</button>
        <button onClick={() => changeLanguage('en')}>English</button>
      </div>
    </div>
  );

  return (
    <header>
      <nav className="container">
        <Link to="/" className="logo-link" onClick={() => setIsMenuOpen(false)}>
          <img src="/favicon-96x96.png" alt={t('appName') + " Logo"} className="logo-image" />
          <span className="logo-text">{t('appName')}</span>
        </Link>

        {/* --- Masaüstü Navigasyon --- */}
        <div className="desktop-nav">
          <ul className="nav-links">
            <li><NavLink to="/" className="nav-button">{t('header.navHome')}</NavLink></li>
            <li><NavLink to="/analysis" className="nav-button">{t('header.navAnalyze')}</NavLink></li>
            <li><NavLink to="/about" className="nav-button">{t('about.navLink')}</NavLink></li>
          </ul>
          <div className="language-switcher">
            <button onClick={() => changeLanguage('tr')} className={i18n.language === 'tr' ? 'active-lang' : ''}>TR</button>
            <span>|</span>
            <button onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? 'active-lang' : ''}>EN</button>
          </div>
        </div>

        {/* --- Mobil Menü Butonu --- */}
        <button className="mobile-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* 
          --- 2. MOBİL MENÜYÜ PORTAL İLE RENDER EDİN ---
          Burada, mobil menü DOM'a doğrudan eklenmiyor.
          React'e, "mobileMenu" değişkenindeki JSX'i alıp
          HTML'deki "menu-portal" id'li div'in içine render etmesini söylüyoruz.
        */}
        {ReactDOM.createPortal(mobileMenu, document.getElementById('menu-portal'))}

      </nav>
    </header>
  );
};

export default Header;