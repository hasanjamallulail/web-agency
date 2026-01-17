import React from 'react';

const Privacy: React.FC = () => {
  return (
      <div className="bg-slate-950 py-24 min-h-screen">
         <div className="max-w-3xl mx-auto px-4 prose prose-invert">
            <h1 className="text-4xl font-bold mb-8 text-white">Privacy Policy</h1>
            <p className="text-slate-400 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-white">1. Information We Collect</h2>
            <p className="text-slate-400 mb-4">
               We collect information you provide directly to us, such as when you fill out a form, request a consultation, or communicate with us via WhatsApp.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-white">2. Use of Analytics</h2>
            <p className="text-slate-400 mb-4">
               This website uses Google Analytics (GA4), Google Tag Manager, and Meta Pixel to analyze traffic and user behavior. This data helps us improve our services and ad performance.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-white">3. Data Protection</h2>
            <p className="text-slate-400 mb-4">
               We implement security measures to maintain the safety of your personal information. We do not sell, trade, or otherwise transfer your PII to outside parties.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-white">4. Contact Us</h2>
            <p className="text-slate-400">
               If you have any questions regarding this privacy policy, you may contact us using the information on our Contact page.
            </p>
         </div>
      </div>
  );
};

export default Privacy;