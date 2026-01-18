import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Button from '../ui/Button'; // Pastikan file Button.tsx ada di folder ini
// ✅ Gunakan relative path jika @/ belum di-setting
import { getWhatsAppUrl, WA_MESSAGES } from '../../../constants';

export const AdsMeta = {
  title: 'Performance Ads',
  subtitle: 'High ROI Campaigns'
};

const AdsContent: React.FC = () => {
  const features = [
    'Facebook & Instagram Ads', 
    'Google Search & Display', 
    'TikTok Ads Strategy', 
    'A/B Testing Creatives', 
    'Pixel & Analytics Setup'
  ];

  return (
    <div className="grid md:grid-cols-2 gap-16 items-center">
       <div>
          <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our {AdsMeta.title}?</h2>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed">
            Stop burning money. We use data-driven targeting and psychological hooks to ensure every Rupiah spent brings value. We focus on ROAS (Return on Ad Spend), not just clicks.
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
                // Jika constants belum siap, kamu bisa hardcode dulu untuk testing:
                // href="https://wa.me/62812345678"
                href={getWhatsAppUrl(WA_MESSAGES.ADS)}
                target="_blank"
                variant="primary"
             >
                Start Campaign <ArrowRight size={20} className="ml-2" />
             </Button>
          </div>
       </div>
       <div className="bg-slate-900 border border-slate-800 rounded-3xl h-96 flex items-center justify-center shadow-xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-purple-600/5 group-hover:bg-purple-600/10 transition-colors"></div>
          <span className="text-slate-500 text-lg font-medium">Ad Performance Dashboard</span>
       </div>
    </div>
  );
};

export default AdsContent;