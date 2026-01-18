import React from 'react';
import LogoTicker from '../LogoTicker';

// Import Icon dari library 'react-icons'
import { FaMeta, FaGoogle, FaTiktok, FaYoutube } from 'react-icons/fa6'; // FontAwesome 6
import { SiShopee } from 'react-icons/si'; // Simple Icons
import { RiVideoLine } from 'react-icons/ri'; // Icon alternatif untuk Snack

const CertifiedSection: React.FC = () => {
  
  // Array berisi Komponen Icon (Bukan teks string lagi)
  const certifiedIcons = [
    // 1. Meta (Facebook/Instagram)
    <FaMeta title="Meta Business Partner" />,
    
    // 2. Google
    <FaGoogle title="Google Partner" />,
    
    // 3. TikTok
    <FaTiktok title="TikTok Shop" />,
    
    // 4. YouTube
    <FaYoutube title="YouTube Ads" />,
    
    // 5. Shopee
    <SiShopee title="Shopee Expert" />,

    // 6. Snack Video (Manual: Gabungan Icon + Teks biar jelas)
    <div className="flex items-center gap-2 font-sans font-bold text-2xl">
       <RiVideoLine /> 
       <span className="text-base pt-1">Snack</span>
    </div>
  ];

  return (
    <div className="bg-slate-950 border-y border-slate-900">
       <LogoTicker 
          title="Certified & Trusted By" 
          items={certifiedIcons} 
          type="icon"  // <--- PENTING: Pakai tipe 'icon'
          speed="slow" 
       />
    </div>
  );
};

export default CertifiedSection;