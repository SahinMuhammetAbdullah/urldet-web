import { useTranslation } from 'react-i18next';

const AnalysisResult = ({ data }) => {
    const { t } = useTranslation();

    // Bu yardımcı fonksiyonu JSON dosyalarından beslenecek şekilde güncelleyebiliriz
    // veya basit tutmak için burada bırakabiliriz. Şimdilik burada kalsın.
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
    
    const riskLevel = data.malicious_probability > 0.8 ? t('riskLevels.high') :
                      data.malicious_probability > 0.6 ? t('riskLevels.medium') :
                      data.malicious_probability > 0.4 ? t('riskLevels.low') : t('riskLevels.minimal');
    
    // Risk seviyesi metninin rengini arka plana göre ayarla
    let riskTextColor;
    if (data.is_malicious) {
        riskTextColor = '#FFFFFF'; // Kırmızı/turuncu arka plan için beyaz
    } else {
        riskTextColor = '#145A32'; // Yeşil arka plan için koyu yeşil
    }

    return (
        <div className={`result ${resultType}`} style={{ display: 'block' }}>
            <div className="result-header">
                <span className="result-icon">{resultIcon}</span>
                <div>
                    <h3>{resultTitle}</h3>
                </div>
            </div>

            <div className="result-details">
                {/* --- 1. Güvenlik Durumu Kartı (Her zaman görünür) --- */}
                <div className="detail-card">
                    <h4>🛡️ {t('result.status')}</h4>
                    <p><strong>{t('result.status')}:</strong> {data.is_malicious ? t('result.malicious') : t('result.safe')}</p>
                    <p><strong>{t('result.riskLevel')}:</strong> <span style={{ color: riskTextColor, fontWeight: 'bold' }}>{riskLevel}</span></p>
                </div>
                
                {/* --- 2. Güvenlik Skorları Kartı (Her zaman görünür) --- */}
                <div className="detail-card">
                    <h4>📊 {t('result.probabilities')}</h4>
                    <p><strong>{t('result.safeProb')}:</strong> %{(data.benign_probability * 100).toFixed(1)}</p>
                    <p><strong>{t('result.maliciousProb')}:</strong> %{(data.malicious_probability * 100).toFixed(1)}</p>
                </div>
                
                {/* --- 3. Tehdit Kategorisi Kartı (SADECE zararlıysa görünür) --- */}
                {data.is_malicious && (
                  <div className="detail-card">
                      <h4>🎯 {t('result.threatCategory')}</h4>
                      <p><strong>{t('result.type')}:</strong> {data.malware_type ? getThreatInfo(data.malware_type).title : 'N/A'}</p>
                  </div>
                )}
                
                {/* --- 4. Analiz Edilen URL Kartı (Her zaman görünür) --- */}
                <div className="detail-card">
                    <h4>🔗 {t('result.analyzedURL')}</h4>
                    <p style={{ wordBreak: 'break-all', fontFamily: 'monospace', background: 'rgba(0,0,0,0.1)', padding: '0.5rem', borderRadius: '5px' }}>{data.url}</p>
                </div>
                
                {/* --- 5. Güvenlik Uyarısı Kartı (SADECE zararlıysa görünür) --- */}
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