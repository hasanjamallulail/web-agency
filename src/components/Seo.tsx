import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  type?: 'website' | 'article';
  image?: string;
  schema?: Record<string, any>; // JSON-LD Structured Data
  robots?: string;
}

const Seo: React.FC<SeoProps> = ({ 
  title, 
  description, 
  canonical, 
  type = 'website',
  image = 'https://wargrowth.vercel.app/assets/og-image.jpg', // Ganti default image Anda
  schema,
  robots = 'index, follow'
}) => {
  const location = useLocation();
  // Ambil URL otomatis jika canonical tidak diisi manual
  const siteUrl = 'https://wargrowth.vercel.app'; 
  const currentUrl = canonical || `${siteUrl}${location.pathname}`;

  return (
    <Helmet>
      {/* 1. Standard Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={currentUrl} />

      {/* 2. Open Graph (Facebook/LinkedIn/WhatsApp) */}
      <meta property="og:site_name" content="WarGrowth Agency" />
      <meta property="og:title" content={`${title} | WarGrowth Agency`} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={image} />

      {/* 3. Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | WarGrowth Agency`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* 4. Structured Data (JSON-LD) - Fitur Canggih Google */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default Seo;