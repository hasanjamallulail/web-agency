import React from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { getWhatsAppUrl } from '../../constants';

const CtaSection: React.FC = () => {
  return (
    <Section className="bg-slate-950 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-slate-950 z-0"></div>
      
      <div className="text-center max-w-4xl mx-auto relative z-10 px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">
           Ready to <span className="text-blue-500">dominate</span> your market?
        </h2>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
           Stop guessing with vanity metrics. Start growing with a data-driven engineering approach.
        </p>
        <Button 
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noreferrer"
          variant="primary"
          trackName="InitiateCheckout"
          trackParams={{ location: 'FooterCTA' }}
          className="shadow-[0_0_20px_rgba(37,99,235,0.5)]"
        >
           Chat on WhatsApp
        </Button>
      </div>
    </Section>
  );
};

export default CtaSection;