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
         {/* Hero Title Section */}
         <section className="relative pt-32 pb-16 px-4 text-center border-b border-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950">
            <div className="max-w-4xl mx-auto">
                <nav className="flex justify-center mb-6 text-sm text-slate-500">
                    <Link to="/" className="hover:text-white transition-colors">Home</Link>
                    <span className="mx-2">/</span>
                    <span className="text-blue-500">Projects</span>
                </nav>
                <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
                   Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Growth</span>
                </h1>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                   Explore how we help brands transform their digital presence with NLP-driven strategies and engineering excellence.
                </p>
            </div>
         </section>

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