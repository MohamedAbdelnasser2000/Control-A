import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  schema?: any;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, schema }) => {
  const { t, i18n } = useTranslation();

  const defaultTitle = t('common.seo.defaultTitle');
  const defaultDescription = t('common.seo.defaultDescription');
  const defaultKeywords = t('common.seo.defaultKeywords');

  const seoTitle = title || defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoKeywords = keywords || defaultKeywords;

  const companySchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Control A",
    "url": window.location.origin,
    "logo": `${window.location.origin}/logo.png`,
    "description": defaultDescription,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Cairo",
      "addressCountry": "Egypt"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+20-123-456-7890",
      "contactType": "customer service"
    }
  };

  return (
    <Helmet>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <html lang={i18n.language} dir={i18n.language === 'ar' ? 'rtl' : 'ltr'} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:url" content={window.location.href} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify(companySchema)}
      </script>
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
