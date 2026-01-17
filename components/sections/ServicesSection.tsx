import React from 'react';
import { Search, Megaphone, BarChart, Layout, Users, Globe } from 'lucide-react';
import Section from '../ui/Section';
import ServiceCard from '../cards/ServiceCard';
import { ServiceService } from '../../services/Repository';

// Helper function to map string IDs to Lucide Icons
const getIcon = (id: string) => {
  switch(id) {
    case 'seo': return <Search className="w-6 h-6"/>;
    case 'ads': return <Megaphone className="w-6 h-6"/>;
    case 'marketplace': return <BarChart className="w-6 h-6"/>;
    case 'web-app': return <Layout className="w-6 h-6"/>;
    case 'social-media': return <Users className="w-6 h-6"/>;
    case 'ui-ux': return <Globe className="w-6 h-6"/>;
    default: return <Search className="w-6 h-6"/>;
  }
};

const ServicesSection: React.FC = () => {
  const services = ServiceService.getAll();

  return (
    <Section id="services" className="bg-slate-950">
       <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Expertise</h2>
          <p className="mt-4 text-slate-400">Comprehensive solutions for the digital age</p>
       </div>
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
  );
};

export default ServicesSection;