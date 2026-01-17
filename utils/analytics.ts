declare global {
  interface Window {
    dataLayer: any[];
    fbq: any;
    gtag: any;
  }
}

const GA_MEASUREMENT_ID = 'G-YWPPY17YZD';
const PIXEL_ID = '1099747191511280';

// Initialize Analytics (Simulated for SPA)
export const initAnalytics = () => {
  if (typeof window === 'undefined') return;

  // Initialize GA4
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);

  // Initialize Meta Pixel
  (function(f:any,b:any,e:any,v:any,n?:any,t?:any,s?:any)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)})(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  
  if (window.fbq) {
      window.fbq('init', PIXEL_ID);
      window.fbq('track', 'PageView');
  }
};

// Track Page View
export const trackPageView = (path: string) => {
  if (typeof window !== 'undefined') {
    // GA4
    if (window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, { page_path: path });
    }
    // Meta Pixel
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }
    console.log(`[Analytics] Page View: ${path}`);
  }
};

// Track Custom Event
export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    // GA4
    if (window.gtag) {
      window.gtag('event', eventName, params);
    }
    // Meta Pixel (Standard or Custom)
    if (window.fbq) {
        // Map common events or use CustomEvent
        const standardEvents = ['Contact', 'Lead', 'Purchase', 'AddToCart', 'ViewContent', 'InitiateCheckout'];
        if (standardEvents.includes(eventName)) {
             window.fbq('track', eventName, params);
        } else {
             window.fbq('trackCustom', eventName, params);
        }
    }
    console.log(`[Analytics] Event: ${eventName}`, params);
  }
};