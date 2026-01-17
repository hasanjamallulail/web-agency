import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  updateMetaTag, 
  updateLinkTag, 
  injectJsonLd, 
  updateRobotsMeta,
  SITE_NAME, 
  DEFAULT_OG_IMAGE 
} from '../utils/seo';

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  type?: 'website' | 'article';
  image?: string;
  schema?: Record<string, any>; // JSON-LD Structured Data
  robots?: string; // e.g., 'index, follow' or 'noindex, nofollow'
}

const Seo: React.FC<SeoProps> = ({ 
  title, 
  description, 
  canonical, 
  type = 'website',
  image = DEFAULT_OG_IMAGE,
  schema,
  robots = 'index, follow'
}) => {
  const location = useLocation();

  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    
    // Canonical Logic:
    // 1. Use provided canonical if available
    // 2. Otherwise use current URL (Origin + Pathname). 
    // IMPORTANT: omitting location.search strips query params (tracking, filters) 
    // which prevents duplicate content issues.
    // In production, ensure window.location.origin is the HTTPS domain.
    const currentUrl = canonical || `${window.location.origin}${location.pathname}`;

    // 1. Update Document Title
    document.title = fullTitle;

    // 2. Robots Meta Tag (Index/NoIndex)
    updateRobotsMeta(robots);

    // 3. Standard Meta Tags
    updateMetaTag('description', description);

    // 4. Open Graph (Facebook/LinkedIn)
    updateMetaTag('og:site_name', SITE_NAME, 'property');
    updateMetaTag('og:title', fullTitle, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:type', type, 'property');
    updateMetaTag('og:url', currentUrl, 'property');
    updateMetaTag('og:image', image, 'property');

    // 5. Twitter Card
    updateMetaTag('twitter:card', 'summary_large_image', 'name');
    updateMetaTag('twitter:title', fullTitle, 'name');
    updateMetaTag('twitter:description', description, 'name');
    updateMetaTag('twitter:image', image, 'name');

    // 6. Canonical Link
    updateLinkTag('canonical', currentUrl);

    // 7. Structured Data (JSON-LD)
    if (schema) {
      injectJsonLd(schema);
    }

  }, [title, description, canonical, type, image, schema, robots, location.pathname]);

  return null;
};

export default Seo;