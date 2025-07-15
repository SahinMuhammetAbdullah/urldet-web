import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import ogImage from '../assets/og-image.png'; // Örnek resim yolu

const SEO = ({ titleKey, descriptionKey }) => {
  const { t, i18n } = useTranslation();

  const siteTitle = t('appName');
  const pageTitle = t(titleKey);
  const description = t(descriptionKey);
  const fullTitle = `${pageTitle} | ${siteTitle}`;
  
  // Sitenizin ana URL'si
  const siteUrl = 'https://urldet.masahin.dev';
  // Önizleme resminin tam URL'si
  const imageUrl = `${siteUrl}/og-image.png`; // public klasöründeki resme erişim

  // Mevcut dil için locale kodu (örn: tr_TR)
  const currentLocale = i18n.language === 'tr' ? 'tr_TR' : 'en_US';
  // Alternatif dil için locale kodu
  const alternateLocale = i18n.language === 'tr' ? 'en_US' : 'tr_TR';

  return (
    <Helmet>
      {/* Standart SEO Etiketleri */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph (Facebook, LinkedIn, WhatsApp vb. için) */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:type" content="website" />
      
      {/* --- ÇOK DİLLİ DESTEK İÇİN EN ÖNEMLİ KISIM --- */}
      <meta property="og:locale" content={currentLocale} />
      <meta property="og:locale:alternate" content={alternateLocale} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

export default SEO;