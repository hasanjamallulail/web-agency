import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import { getWhatsAppUrl, WA_MESSAGES } from '../../constants';

export const UiUxMeta = {
  title: 'UI/UX Design',
  subtitle: 'Psychology-Driven Interfaces'
};

const UiUxContent: React.FC = () => {
  const features = ['User Research & Personas', 'Wireframing & Prototyping', 'High-Fidelity UI Design', 'Design System Creation', 'Usability Testing'];

  return (
    <div className="grid md:grid-cols-2 gap-16 items-center">
       <div>
          <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our {UiUxMeta.title}?</h2>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed">
            We design interfaces that are not just beautiful but psychologically optimized to reduce friction, increase trust, and boost conversion rates. We ensure your users love using your product.
          </p>
          <ul className="space-y-4">
             {features.map((feature, idx) => (
               <li key={idx} className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0" />
                  <span className="text-slate-300 font-medium">{feature}</span>
               </li>
             ))}
          </ul>
          <div className="mt-10">
             <Button 
               href={getWhatsAppUrl(WA_MESSAGES.UI_UX)}
               target="_blank"
               rel="noreferrer"
               variant="primary"
               trackName="InitiateCheckout"
               trackParams={{ location: 'ServiceDetail', service: UiUxMeta.title }}
             >
                Design My Project <ArrowRight size={20} className="ml-2" />
             </Button>
          </div>
       </div>
       <div className="bg-slate-900 border border-slate-800 rounded-3xl h-96 flex items-center justify-center shadow-xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-indigo-600/5 group-hover:bg-indigo-600/10 transition-colors"></div>
          <span className="text-slate-500 text-lg font-medium">Interactive Prototype</span>
       </div>
    </div>
  );
};

export default UiUxContent;