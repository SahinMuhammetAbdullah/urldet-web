import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header>
      <nav className="container">
        <Link to="/" className="logo-button">
          🛡️ {t('appName')}
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <ul className="nav-links">
            <li>
              {/* NavLink, aktif sayfayı stilendirmeyi kolaylaştırır */}
              <NavLink to="/" className="nav-button">
                {t('header.navHome')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/analysis" className="nav-button">
                {t('header.navAnalyze')}
              </NavLink>
            </li>
          </ul>

          <div className="language-switcher">
            <button
              onClick={() => changeLanguage('tr')}
              className={i18n.language === 'tr' ? 'active-lang' : ''}
            >
              TR
            </button>
            <span style={{ color: 'white', opacity: 0.5 }}>|</span>
            <button
              onClick={() => changeLanguage('en')}
              className={i18n.language === 'en' ? 'active-lang' : ''}
            >
              EN
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;