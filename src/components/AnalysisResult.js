import React from 'react';
import { useTranslation } from 'react-i18next';

const AnalysisResult = ({ data }) => {
    const { t } = useTranslation();

    const getThreatInfo = (type) => {
        const types = {
            'phishing': { icon: '🎣', title: 'Phishing (Kimlik Avı)' },
            'defacement': { icon: '💥', title: 'Website Defacement (Site Tahrifatı)' },
            'spam': { icon: '📧', title: 'Spam İçerik' },
            'malware': { icon: '🦠', title: 'Malware (Kötü Amaçlı Yazılım)' }
        };
        return types[type] || { icon: '⚠️', title: type };
    }

    const { icon, title: threatTitle } = data.is_malicious ? getThreatInfo(data.malware_type) : {};
    
    const resultType = data.is_malicious ? 'malicious' : 'safe';
    const resultIcon = data.is_malicious ? icon : '✅';
    const resultTitle = data.is_malicious ? threatTitle : t('result.safe');
    
    const riskLevel = data.malicious_probability > 0.8 ? 'Yüksek' :
                      data.malicious_probability > 0.6 ? 'Orta' :
                      data.malicious_probability > 0.4 ? 'Düşük' : 'Minimal';
    
    const riskColor = riskLevel === 'Yüksek' ? '#ff4757' : 
                      riskLevel === 'Orta' ? '#ff6348' :
                      riskLevel === 'Düşük' ? '#ffa502' : '#2ed573';

    return (
        <div className={`result ${resultType}`} style={{ display: 'block' }}>
            <div className="result-header">
                <span className="result-icon">{resultIcon}</span>
                <div>
                    <h3>{resultTitle}</h3>
                </div>
            </div>

            <div className="result-details">
                 <div className="detail-card">
                    <h4>🛡️ {t('result.status')}</h4>
                    <p><strong>{t('result.status')}:</strong> {data.is_malicious ? t('result.malicious') : t('result.safe')}</p>
                    <p><strong>{t('result.riskLevel')}:</strong> <span style={{ color: riskColor, fontWeight: 'bold' }}>{riskLevel}</span></p>
                </div>
                
                <div className="detail-card">
                    <h4>📊 {t('result.probabilities')}</h4>
                    <p><strong>{t('result.safeProb')}:</strong> %{(data.benign_probability * 100).toFixed(1)}</p>
                    <p><strong>{t('result.maliciousProb')}:</strong> %{(data.malicious_probability * 100).toFixed(1)}</p>
                </div>
                
                <div className="detail-card">
                    <h4>🎯 {t('result.threatCategory')}</h4>
                    <p><strong>{t('result.type')}:</strong> {data.malware_type ? getThreatInfo(data.malware_type).title : 'N/A'}</p>
                    <p><strong>{t('result.description')}:</strong> {data.malware_type ? getThreatInfo(data.malware_type).title : 'N/A'}</p>
                </div>
                
                <div className="detail-card">
                    <h4>🔗 {t('result.analyzedURL')}</h4>
                    <p style={{ wordBreak: 'break-all', fontFamily: 'monospace', background: 'rgba(0,0,0,0.1)', padding: '0.5rem', borderRadius: '5px' }}>{data.url}</p>
                </div>

                {data.is_malicious && (
                  <div className="detail-card" style={{ background: 'rgba(255, 0, 0, 0.2)', border: '2px solid rgba(255, 0, 0, 0.3)' }}>
                      <h4>⚠️ {t('result.safetyWarningTitle')}</h4>
                      <p>{t('result.safetyWarningText')}</p>
                  </div>
                )}
            </div>
        </div>
    );
};

export default AnalysisResult;