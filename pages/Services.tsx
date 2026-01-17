import React from 'react';
import { Search, Megaphone, BarChart, Layout, Users, Globe } from 'lucide-react';
import ServiceCard from '../components/cards/ServiceCard';
import Section from '../components/ui/Section';
import { ServiceService } from '../services/Repository';
import Seo from '../components/Seo';

// Helper function duplicate (Ideally move to a shared helper util)
const getIcon = (id: string) => {
  switch(id) {
    case 'seo': return <Search className="w-8 h-8"/>;
    case 'ads': return <Megaphone className="w-8 h-8"/>;
    case 'marketplace': return <BarChart className="w-8 h-8"/>;
    case 'web-app': return <Layout className="w-8 h-8"/>;
    case 'social-media': return <Users className="w-8 h-8"/>;
    case 'ui-ux': return <Globe className="w-8 h-8"/>;
    default: return <Search className="w-8 h-8"/>;
  }
};

const Services: React.FC = () => {
  const services = ServiceService.getAll();

  return (
    <>
      <Seo 
        title="Our Services - SEO, Ads, Web Dev"
        description="Comprehensive digital growth services including SEO Optimization, Performance Ads, Marketplace Management, and Web App Development."
      />
      <Section className="bg-slate-950 border-b border-slate-900" fullWidth>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Our Services</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Holistic growth solutions powered by data, technology, and human psychology.
            </p>
         </div>
      </Section>

      <Section>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc) => (
              <ServiceCard 
                key={svc.id}
                id={svc.id}
                title={svc.title}
                desc={svc.description}
                icon={getIcon(svc.id)}
              />
            ))}
         </div>
      </Section>
    </>
  );
};

export default Services;