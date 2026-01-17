import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Section from '../components/ui/Section';
import Seo from '../components/Seo';

// Import Partials
import SeoContent, { SeoMeta } from '../components/service-partials/SeoContent';
import AdsContent, { AdsMeta } from '../components/service-partials/AdsContent';
import MarketplaceContent, { MarketplaceMeta } from '../components/service-partials/MarketplaceContent';
import WebAppContent, { WebAppMeta } from '../components/service-partials/WebAppContent';
import SocialMediaContent, { SocialMediaMeta } from '../components/service-partials/SocialMediaContent';
import UiUxContent, { UiUxMeta } from '../components/service-partials/UiUxContent';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Mapper to get component and meta data based on slug
  const getServiceContent = (slug?: string) => {
    switch (slug) {
      case 'seo':
        return { Component: <SeoContent />, meta: SeoMeta };
      case 'ads':
        return { Component: <AdsContent />, meta: AdsMeta };
      case 'marketplace':
        return { Component: <MarketplaceContent />, meta: MarketplaceMeta };
      case 'web-app':
        return { Component: <WebAppContent />, meta: WebAppMeta };
      case 'social-media':
        return { Component: <SocialMediaContent />, meta: SocialMediaMeta };
      case 'ui-ux':
        return { Component: <UiUxContent />, meta: UiUxMeta };
      default:
        return null;
    }
  };

  const content = getServiceContent(slug);

  if (!content) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-[50vh] bg-slate-950">
        <Seo 
          title="Service Not Found" 
          description="The requested service could not be found." 
          robots="noindex, nofollow" 
        />
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-500 mb-4">Service Not Found</h1>
          <Link to="/services" className="text-blue-500 underline hover:text-blue-400">Back to Services</Link>
        </div>
      </div>
    );
  }

  const { Component, meta } = content;

  return (
    <>
      <Seo 
        title={meta.title}
        description={`Professional ${meta.title} services by Wargrowth Agency. ${meta.subtitle}`}
        robots="index, follow"
      />
      {/* Dynamic Hero Section based on Meta Data */}
      <section className="bg-slate-950 border-b border-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/10 bg-[radial-gradient(#3b82f61a_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <Link to="/services" className="text-blue-400 mb-4 inline-block hover:underline">← Back to Services</Link>
           <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">{meta.title}</h1>
           <p className="text-xl md:text-2xl text-slate-400 max-w-2xl">{meta.subtitle}</p>
        </div>
      </section>

      {/* Specific Partial Content */}
      <Section className="bg-slate-950">
        {Component}
      </Section>
    </>
  );
};

export default ServiceDetail;