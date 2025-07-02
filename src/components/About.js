import React from 'react';
import { useTranslation } from 'react-i18next';
import { teamMembers, advisors } from '../data/teamData';

// Font Awesome bileşenlerini ve ikonları import et
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

// İkon adını gerçek ikon objesine çeviren bir map (harita)
const iconMap = {
  'user-tie': faUserTie,
  'user-graduate': faUserGraduate
};

// Tek bir kişi kartı oluşturan yardımcı bileşen
const PersonCard = ({ name, roleKey, socialLink, icon }) => {
  const { t } = useTranslation();
  
  // Veriden gelen ikon adına göre doğru ikonu seç
  const selectedIcon = iconMap[icon] || faUserTie; // Eğer ikon bulunamazsa varsayılan olarak faUserTie kullan

  return (
    <div className="team-card">
      <div className="icon-container">
        {/* FontAwesomeIcon bileşenini kullanıyoruz */}
        <FontAwesomeIcon icon={selectedIcon} className="team-icon" />
      </div>
      <h4>{name}</h4>
      <p className="team-role">{t(roleKey)}</p>
      <a href={socialLink} target="_blank" rel="noopener noreferrer" className="social-link">
        Profil
      </a>
    </div>
  );
};

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <section className="section">
        <h2>{t('about.pageTitle')}</h2>

        <div className="team-section">
          <h3>{t('about.teamTitle')}</h3>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <PersonCard key={index} {...member} />
            ))}
          </div>
        </div>

        <div className="team-section">
          <h3>{t('about.advisorsTitle')}</h3>
          <div className="team-grid">
            {advisors.map((advisor, index) => (
              <PersonCard key={index} {...advisor} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;