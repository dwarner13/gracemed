import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  keywords?: string;
  ogType?: string;
  ogImage?: string;
  schemaData?: Record<string, any>;
}

const SEO = ({
  title,
  description,
  canonicalUrl,
  keywords,
  ogType = 'website',
  ogImage = '/images/carpet-installation-edmonton-og.jpg',
  schemaData,
}: SEOProps) => {
  const siteUrl = 'https://carpetinstallationedmonton.ca';
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  const fullOgImageUrl = `${siteUrl}${ogImage}`;
  
  // Default schema for local carpet installation business
  const defaultSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Carpet Installers Edmonton',
    description: 'Professional carpet installation, stair carpet installation, carpet repair, and commercial carpet installation in Edmonton.',
    url: siteUrl,
    telephone: '587-568-1929',
    email: 'carpetinstallersedmonton@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Edmonton',
      addressRegion: 'AB',
      addressCountry: 'CA'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '53.5461',
      longitude: '-113.4938'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '15:00'
      }
    ],
    areaServed: [
      'Edmonton',
      'St. Albert',
      'Sherwood Park'
    ],
    makesOffer: [
      'Carpet Installation Edmonton',
      'Stair Carpet Installation',
      'Carpet Repair',
      'Commercial Carpet Installation'
    ]
  };

  const finalSchema = schemaData || defaultSchema;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImageUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImageUrl} />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;