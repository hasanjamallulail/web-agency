import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Section from '../components/ui/Section';
import Seo from '../components/Seo';
import CtaSection from '../components/sections/CtaSection';

import { ServiceService } from '../services/Repository';

// IMPORT PARTIALS
import SeoContent, { SeoMeta } from '../components/service-partials/SeoContent';
import AdsContent, { AdsMeta } from '../components/service-partials/AdsContent';
import MarketplaceContent, { MarketplaceMeta } from '../components/service-partials/MarketplaceContent';
import WebAppContent, { WebAppMeta } from '../components/service-partials/WebAppContent';
import SocialMediaContent, { SocialMediaMeta } from '../components/service-partials/SocialMediaContent';
import UiUxContent, { UiUxMeta } from '../components/service-partials/UiUxContent';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // AMBIL DATA UTAMA
  const baseData = ServiceService.getBySlug(slug);

  /**
   * MAPPER PARTIAL
   * Perbaikan: Gunakan parameter 'currentSlug' di dalam switch agar lebih konsisten
   */
  const getServiceContent = (currentSlug?: string) => {
    switch (currentSlug) { // ✅ Gunakan parameter ini, jangan langsung 'slug' luar
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

  const partial = getServiceContent(slug);

  // PROTEKSI JIKA DATA TIDAK DITEMUKAN DI REPOSITORY
  if (!baseData) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-[60vh] bg-slate-950 text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-500 mb-4">Service Not Found</h1>
          <p className="mb-6 text-slate-400">Layanan "{slug}" tidak ditemukan.</p>
          <Link to="/services" className="bg-blue-600 px-6 py-2 rounded-full hover:bg-blue-700 transition">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  // Prioritaskan metadata dari partial, jika tidak ada pakai data dasar
  const displayTitle = partial?.meta.title || baseData.title;
  const displaySubtitle = partial?.meta.subtitle || baseData.description;

  return (
    <>
      <Seo 
        title={displayTitle}
        description={`Professional ${displayTitle} services by Wargrowth Agency. ${displaySubtitle}`}
      />

      {/* --- HERO SECTION --- */}
      <section className="bg-slate-950 border-b border-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 bg-[radial-gradient(#3b82f61a_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <Link to="/services" className="text-blue-400 mb-6 inline-block hover:text-blue-300 transition-colors">
             ← Back to Services
           </Link>
           <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
             {displayTitle}
           </h1>
           <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed">
             {displaySubtitle}
           </p>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <Section className="bg-slate-950 text-white pb-24">
        <div className="max-w-7xl mx-auto">
          {/* JIKA KOMPONEN KHUSUS ADA, TAMPILKAN. JIKA TIDAK, PAKAI TAMPILAN STANDAR */}
          {partial ? (
            partial.Component
          ) : (
            <div className="max-w-3xl bg-slate-900/50 p-8 rounded-3xl border border-slate-800">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Service Overview</h2>
              <p className="text-slate-300 text-lg leading-loose mb-8">
                {baseData.content}
              </p>
              {baseData.features && (
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {baseData.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-400">
                      <span className="text-blue-500 text-xl">✓</span> {f}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          <div className="mt-20 border-t border-slate-900 pt-16">
             <CtaSection />
          </div>
        </div>
      </Section>
    </>
  );
};

export default ServiceDetail;