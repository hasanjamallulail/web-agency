import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import { getWhatsAppUrl, WA_MESSAGES } from '../../constants';

export const SocialMediaMeta = {
  title: 'Social Media Management',
  subtitle: 'Build a Loyal Community'
};

const SocialMediaContent: React.FC = () => {
  const features = ['Content Calendar', 'Graphic Design & Video Reels', 'Community Engagement', 'Influencer Marketing', 'Monthly Reporting'];

  return (
    <div className="grid md:grid-cols-2 gap-16 items-center">
       <div>
          <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our {SocialMediaMeta.title}?</h2>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed">
            Turn followers into customers. We create content that resonates emotionally and builds authority for your brand. We handle the entire lifecycle from strategy to posting and engagement.
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
               href={getWhatsAppUrl(WA_MESSAGES.SOCIAL_MEDIA)}
               target="_blank"
               rel="noreferrer"
               variant="primary"
               trackName="InitiateCheckout"
               trackParams={{ location: 'ServiceDetail', service: SocialMediaMeta.title }}
             >
                Grow Community <ArrowRight size={20} className="ml-2" />
             </Button>
          </div>
       </div>
       <div className="bg-slate-900 border border-slate-800 rounded-3xl h-96 flex items-center justify-center shadow-xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-pink-600/5 group-hover:bg-pink-600/10 transition-colors"></div>
          <span className="text-slate-500 text-lg font-medium">Viral Content Plan</span>
       </div>
    </div>
  );
};

export default SocialMediaContent;