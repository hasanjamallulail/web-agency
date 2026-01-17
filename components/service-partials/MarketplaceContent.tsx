import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import { getWhatsAppUrl, WA_MESSAGES } from '../../constants';

export const MarketplaceMeta = {
  title: 'Marketplace Optimization',
  subtitle: 'Win on Shopee & Tokopedia'
};

const MarketplaceContent: React.FC = () => {
  const features = ['Store Decoration', 'Product SEO Copywriting', 'Chat Response Optimization', 'Marketplace Ads Management', 'Flash Sale Strategy'];

  return (
    <div className="grid md:grid-cols-2 gap-16 items-center">
       <div>
          <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our {MarketplaceMeta.title}?</h2>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed">
            Stand out in the crowded marketplace. We optimize your store decoration, product listings, and ad spend to ensure you capture the high-intent traffic on platforms like Shopee and Tokopedia.
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
               href={getWhatsAppUrl(WA_MESSAGES.MARKETPLACE)}
               target="_blank"
               rel="noreferrer"
               variant="primary"
               trackName="InitiateCheckout"
               trackParams={{ location: 'ServiceDetail', service: MarketplaceMeta.title }}
             >
                Optimize Store <ArrowRight size={20} className="ml-2" />
             </Button>
          </div>
       </div>
       <div className="bg-slate-900 border border-slate-800 rounded-3xl h-96 flex items-center justify-center shadow-xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-orange-600/5 group-hover:bg-orange-600/10 transition-colors"></div>
          <span className="text-slate-500 text-lg font-medium">Marketplace Analytics</span>
       </div>
    </div>
  );
};

export default MarketplaceContent;