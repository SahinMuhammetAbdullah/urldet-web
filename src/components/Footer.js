import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container footer-container">
        <p>
          {t('footer.copyright', { year: currentYear })}
        </p>
        <p>
          {t('footer.developer')} <a href="https://github.com/SahinMuhammetAbdullah" target="_blank" rel="noopener noreferrer">Muhammet Abdullah Şahin</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;