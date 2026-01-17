import React from 'react';

// Partials / Components
import Hero from '../components/sections/Hero';
import CertifiedSection from '../components/sections/CertifiedSection';
import GrowthFramework from '../components/sections/GrowthFramework';
import ServicesSection from '../components/sections/ServicesSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import FoundersSlider from '../components/sections/FoundersSlider';
import PortfolioSection from '../components/sections/PortfolioSection';
import ClientsSection from '../components/sections/ClientsSection';
import MediaSection from '../components/sections/MediaSection';
import CtaSection from '../components/sections/CtaSection';
import Seo from '../components/Seo';

const Home: React.FC = () => {
  // Schema.org for Local Business / Agency
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Wargrowth Agency",
    "image": "https://wargrowth.com/logo.png",
    "url": "https://wargrowth.com",
    "telephone": "+6281213772360",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jakarta Selatan",
      "addressRegion": "DKI Jakarta",
      "addressCountry": "ID"
    },
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://instagram.com/wargrowth",
      "https://linkedin.com/company/wargrowth"
    ]
  };

  return (
    <>
      <Seo 
        title="Growth Agency & UI/UX Expert"
        description="Wargrowth Agency helps brands scale with NLP-based marketing, SEO, Ads, and Psychology-driven UI/UX Design. Based in Jakarta."
        schema={homeSchema}
      />
      <Hero />
      <CertifiedSection />
      <GrowthFramework />
      <ServicesSection />
      {/* Testimonials kept on Home for social proof, but link removed from Nav */}
      <TestimonialsSection />
      <FoundersSlider darkBg={true} />
      {/* Reusable Portfolio Section in Slider Mode */}
      <PortfolioSection 
         mode="slider" 
         title="Our Recent Work" 
         subtitle="See how we help brands scale"
      />
      <ClientsSection />
      <CtaSection />
      <MediaSection />
    </>
  );
};

export default Home;