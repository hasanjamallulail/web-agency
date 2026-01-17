import React from 'react';
import LogoTicker from '../LogoTicker';

const CertifiedSection: React.FC = () => {
  const certifiedBy = ["Meta", "Google Partner", "TikTok Shop", "YouTube Ads", "Shopee Expert"];

  return (
    <div className="bg-slate-950 border-y border-slate-900">
       <LogoTicker title="Certified & Trusted By" items={certifiedBy} type="text" speed="slow" />
    </div>
  );
};

export default CertifiedSection;