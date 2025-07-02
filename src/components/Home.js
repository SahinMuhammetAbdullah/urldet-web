import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleAnalyzeClick = () => {
        navigate('/analysis');
    };

    return (
        <main id="home-content">
            <section className="hero">
                <div className="container">
                    <h1>{t('home.hero.title')}</h1>
                    <p>{t('home.hero.subtitle')}</p>
                    <button className="cta-button" onClick={handleAnalyzeClick}>
                        {t('home.hero.button')}
                    </button>
                </div>
            </section>

            <div className="container">
                <section className="section">
                    <h2>{t('home.howItWorks.title')}</h2>
                    <p style={{ textAlign: 'center', fontSize: '1.1rem', marginBottom: '2rem', color: '#666' }}>
                        {t('home.howItWorks.description')}
                    </p>

                    <div className="features">
                        <div className="feature">
                            <div className="feature-icon">🤖</div>
                            <h3>{t('home.howItWorks.feature1_title')}</h3>
                            <p>{t('home.howItWorks.feature1_desc')}</p>
                        </div>

                        <div className="feature">
                            <div className="feature-icon">🧠</div>
                            <h3>{t('home.howItWorks.feature2_title')}</h3>
                            <p>{t('home.howItWorks.feature2_desc')}</p>
                        </div>

                        <div className="feature">
                            <div className="feature-icon">⚡</div>
                            <h3>{t('home.howItWorks.feature3_title')}</h3>
                            <p>{t('home.howItWorks.feature3_desc')}</p>
                        </div>
                    </div>
                </section>

                {/* Özellikler bölümü JSON'dan beslenmediği için olduğu gibi kalabilir veya eklenebilir. */}
                <section className="section">
                    {/* JSON'dan gelen başlığı kullanıyoruz */}
                    <h2>{t('home.featuresSection.title')}</h2>

                    {/* Inline stili kaldırıp yerine className ekliyoruz */}
                    <div className="simple-features-grid">
                        <div className="simple-feature">
                            <h4>{t('home.featuresSection.feature1_title')}</h4>
                            <p>{t('home.featuresSection.feature1_desc')}</p>
                        </div>
                        <div className="simple-feature">
                            <h4>{t('home.featuresSection.feature2_title')}</h4>
                            <p>{t('home.featuresSection.feature2_desc')}</p>
                        </div>
                        <div className="simple-feature">
                            <h4>{t('home.featuresSection.feature3_title')}</h4>
                            <p>{t('home.featuresSection.feature3_desc')}</p>
                        </div>
                        <div className="simple-feature">
                            <h4>{t('home.featuresSection.feature4_title')}</h4>
                            <p>{t('home.featuresSection.feature4_desc')}</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Home;