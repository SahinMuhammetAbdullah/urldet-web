import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LoadingSpinner from './LoadingSpinner';
import AnalysisResult from './AnalysisResult';

const Analyze = () => {
  const { t } = useTranslation();
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const handleAnalyze = async () => {
    if (!url.trim()) {
      setError(t('analyze.errorInvalidURL'));
      return;
    }
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      setError(t('analyze.errorURLFormat'));
      return;
    }

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
    if (e.key === 'Enter') handleAnalyze();
  };

  return (
    <main id="analyze-content" className="analyze-section" style={{ display: 'block' }}>
      <div className="container">
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
      </div>
    </main>
  );
};

export default Analyze;