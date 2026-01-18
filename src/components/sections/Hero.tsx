import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import { getWhatsAppUrl } from '@/constants';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-slate-950 pt-24 pb-24 lg:pt-40 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff1a_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-semibold tracking-wide backdrop-blur-sm">
           🚀 The #1 Growth Agency in Indonesia
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold text-white tracking-tight mb-8 leading-tight">
          Scale Your Business <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">
            With Data-Driven AI
          </span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          We combine NLP psychology, modern UI/UX, and rigorous analytics to turn your visitors into loyal customers. <br/><span className="text-white font-semibold">Don't just exist online—dominate your market.</span>
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Button 
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            trackName="InitiateCheckout"
            trackParams={{ location: 'Hero' }}
            variant="primary"
            className="text-lg px-10 py-5"
          >
            Consult with Us <ArrowRight size={20} className="ml-2" />
          </Button>
          <Button 
            href="#services"
            variant="outline"
            className="text-lg px-10 py-5"
          >
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;