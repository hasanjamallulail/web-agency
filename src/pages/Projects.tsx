import React from 'react';
import { Link } from 'react-router-dom';
import PortfolioSection from '../components/sections/PortfolioSection'; // Unified Component
import CtaSection from '../components/sections/CtaSection';
import ClientsSection from '../components/sections/ClientsSection';
import Seo from '../components/Seo';

const Projects: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen">
         <Seo 
            title="Our Projects & Case Studies" 
            description="Explore our portfolio of successful projects with Hyundai, Telkomsel, UI, and more. See how Wargrowth drives real business results."
         />

         {/* Single Unified Component handling Gallery Mode */}
         <PortfolioSection 
            mode="gallery" 
            title="Our Success Stories" 
            subtitle="We don't just promise results; we engineer them. Explore our portfolio of data-driven growth." 
         />

         {/* Social Proof (Clients) */}
         <ClientsSection />

         {/* CTA */}
         <CtaSection />
    </div>
  );
};

export default Projects;