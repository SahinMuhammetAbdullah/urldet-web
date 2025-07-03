import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const SEO = ({ titleKey, descriptionKey }) => {
    const { t } = useTranslation();

    const siteTitle = t('appName');
    const pageTitle = t(titleKey);
    const description = t(descriptionKey);

    // Örnek: "Proje Ekibi | URLDet - URL Güvenlik Analiz Sistemi"
    const fullTitle = `${pageTitle} | ${siteTitle}`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {/* İleride Open Graph (Facebook, LinkedIn) etiketlerini de buraya ekleyebilirsiniz */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            {/* Twitter Card etiketleri */}
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    );
};

export default SEO;
