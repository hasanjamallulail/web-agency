import React from 'react';
import { Search, Megaphone, BarChart, Layout, Users, Globe } from 'lucide-react';
import ServiceCard from '../components/cards/ServiceCard';
import Section from '../components/ui/Section';
import { ServiceService } from '../services/Repository';
import Seo from '../components/Seo';

const getIcon = (slug: string) => {
  switch(slug) {
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
      <Seo title="Our Services" description="Digital agency services." />
      <Section className="bg-slate-950 pt-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc) => (
            <ServiceCard 
              key={svc.id}
              slug={svc.slug}
              title={svc.title}
              desc={svc.description}
              icon={getIcon(svc.slug)}
            />
          ))}
        </div>
      </Section>
    </>
  );
};

export default Services;