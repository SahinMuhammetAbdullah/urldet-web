import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Dil çevirilerini import ediyoruz
import translationEN from './locales/en/translation.json';
import translationTR from './locales/tr/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  tr: {
    translation: translationTR
  }
};

i18n
  .use(LanguageDetector) // Tarayıcı dilini tespit et
  .use(initReactI18next) // i18next'i react-i18next'e bağla
  .init({
    resources,
    fallbackLng: 'en', // Eğer tespit edilen dil yoksa İngilizce kullan
    debug: true, // Geliştirme aşamasında konsola bilgi basar

    interpolation: {
      escapeValue: false // React zaten XSS'e karşı koruma sağlar
    },
    detection: {
      // Dil tespiti için öncelik sırası
      order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'], // Tespit edilen dili nereye kaydedeceği
    }
  });

export default i18n;