import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LoadingSpinner from './LoadingSpinner';
import AnalysisResult from './AnalysisResult';
import SEO from './SEO'; // <-- SEO bileşenini import et

// Font Awesome ikonunu import et
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChrome } from '@fortawesome/free-brands-svg-icons';

const Analyze = () => {
  const { t } = useTranslation();
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  // Eklentinin Chrome Web Mağazası'ndaki linki
  // 'YOUR_EXTENSION_ID' kısmını kendi ID'nizle değiştirmeyi unutmayın!
  const extensionStoreUrl = "https://chrome.google.com/webstore/detail/phjancankjcbmdjcdlipmhlnjhljakjf";

  const handleAnalyze = async () => {
    // Validasyon
    if (!url.trim()) {
      setError(t('analyze.errorInvalidURL'));
      return;
    }
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      setError(t('analyze.errorURLFormat'));
      return;
    }

    // UI'ı sıfırla ve yükleme durumunu başlat
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('https://urldet.masahin.dev/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: url.trim() }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ 'detail': response.statusText }));
        throw new Error(errorData.detail || `HTTP ${response.status}`);
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error('Analiz hatası:', err);
      setError(`${t('analyze.errorPrefix')} ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAnalyze();
    }
  };

  return (
    <>

      <SEO titleKey="analyze.seo.title" descriptionKey="analysis.seo.description" />
      <main id="analyze-content" className="analyze-section">
        <div className="container">



          {/* Analiz Formu Bölümü */}
          <section className="section">
            <h2>{t('analyze.title')}</h2>
            <div className="search-container">
              <div className="search-box">
                <input
                  type="url"
                  className="url-input"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={t('analyze.inputPlaceholder')}
                  disabled={isLoading}
                />
                <button
                  className="analyze-btn"
                  onClick={handleAnalyze}
                  disabled={isLoading}
                >
                  {isLoading ? t('analyze.buttonLoading') : t('analyze.button')}
                </button>
              </div>

              {isLoading && <LoadingSpinner message={t('analyze.loadingText')} />}
              {error && <div className="error" style={{ display: 'block' }}>{error}</div>}
              {result && <AnalysisResult data={result} />}
            </div>
          </section>
          {/* Banner'ı kendi başına bir kutu olarak buraya yerleştiriyoruz */}
          <div className="extension-banner">
            <div className="banner-text">
              <h3>{t('analyze.extensionBannerTitle')}</h3>
              <p>{t('analyze.extensionBannerText')}</p>
            </div>
            <a href={extensionStoreUrl} target="_blank" rel="noopener noreferrer" className="banner-button">
              <FontAwesomeIcon icon={faChrome} className="banner-icon" />
              <span>{t('analyze.extensionBannerButton')}</span>
            </a>
          </div>
          {/* --- BANNER SONU --- */}
        </div>
      </main>
    </>

  );
};

export default Analyze;