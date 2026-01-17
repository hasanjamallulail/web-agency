import React from 'react';
import Seo from '../components/Seo';

const faqs = [
  { q: "What is your pricing model?", a: "We offer both project-based and retainer models depending on your needs (SEO/Ads vs Web Dev)." },
  { q: "Do you guarantee results?", a: "While no agency can guarantee specific algorithm outcomes, we guarantee our data-driven process and have a track record of 150% average ROI increase." },
  { q: "How long does it take to see SEO results?", a: "Typically 3-6 months for significant organic traffic growth, though technical fixes can show impact sooner." },
  { q: "What industries do you specialize in?", a: "We work across Retail, E-commerce, Healthcare, and Tech startups." },
];

const FAQ: React.FC = () => {
  // FAQ Schema for Rich Results
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
      <div className="bg-slate-950 py-24 min-h-screen">
         <Seo 
            title="Frequently Asked Questions" 
            description="Common questions about Wargrowth Agency's services, pricing, and growth strategies."
            schema={faqSchema}
         />
         <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h1>
            <div className="space-y-6">
               {faqs.map((item, idx) => (
                  <div key={idx} className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-blue-500/30 transition-all">
                     <h3 className="font-bold text-lg text-white mb-2">{item.q}</h3>
                     <p className="text-slate-400">{item.a}</p>
                  </div>
               ))}
            </div>
         </div>
      </div>
  );
};

export default FAQ;