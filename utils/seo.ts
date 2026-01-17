/**
 * Utility functions to manage SEO Metadata and Structured Data in the DOM.
 * Separation of concerns: Logic here, React Lifecycle in components/Seo.tsx
 */

export const SITE_NAME = "Wargrowth Agency";
export const DEFAULT_OG_IMAGE = "https://placehold.co/1200x630/1e293b/3b82f6?text=Wargrowth+Agency";

/**
 * Updates or creates a <meta> tag in the document head.
 * @param name The value for the 'name' or 'property' attribute
 * @param content The value for the 'content' attribute
 * @param attribute The attribute key ('name' for standard meta, 'property' for OG)
 */
export const updateMetaTag = (name: string, content: string, attribute: 'name' | 'property' = 'name') => {
  let element = document.querySelector(`meta[${attribute}="${name}"]`);
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  
  element.setAttribute('content', content);
};

/**
 * Updates or creates a <link> tag (e.g., canonical).
 * @param rel The relationship type (e.g., 'canonical')
 * @param href The URL
 */
export const updateLinkTag = (rel: string, href: string) => {
  let element = document.querySelector(`link[rel="${rel}"]`);
  
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  
  element.setAttribute('href', href);
};

/**
 * Injects or updates JSON-LD Structured Data.
 * @param schema The JSON-LD object
 */
export const injectJsonLd = (schema: Record<string, any>) => {
  const SCRIPT_ID = "wargrowth-json-ld";
  let script = document.querySelector(`#${SCRIPT_ID}`);

  if (!script) {
    script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.setAttribute('type', 'application/ld+json');
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(schema);
};

/**
 * Updates the Robots meta tag.
 * @param content The robots directive (e.g., 'index, follow', 'noindex, nofollow')
 */
export const updateRobotsMeta = (content: string) => {
  updateMetaTag('robots', content, 'name');
  // Also update googlebot specific tag if needed, but 'robots' usually suffices.
  updateMetaTag('googlebot', content, 'name');
};
