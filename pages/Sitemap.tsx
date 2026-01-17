import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
// PERBAIKAN: Hapus icon yang tidak dipakai agar tidak error
import { FaHome, FaLayerGroup, FaShieldAlt } from 'react-icons/fa';

const Sitemap: React.FC = () => {
  // Struktur Link
  const sitemapData = [
    {
      category: "Main Pages",
      icon: <FaHome className="text-blue-500" />,
      links: [
        { name: "Home", url: "/" },
        { name: "About Us", url: "/about" },
        { name: "Our Projects", url: "/projects" },
        { name: "Contact Us", url: "/contact" },
      ]
    },
    {
      category: "Our Services",
      icon: <FaLayerGroup className="text-purple-500" />,
      links: [
        { name: "All Services", url: "/services" },
        { name: "SEO Optimization", url: "/services/seo" },
        { name: "Google & Meta Ads", url: "/services/ads" },
        { name: "Marketplace Management", url: "/services/marketplace" },
        { name: "Web & App Development", url: "/services/web-app" },
        { name: "Social Media Management", url: "/services/social-media" },
        { name: "UI/UX Design", url: "/services/ui-ux" },
      ]
    },
    {
      category: "Support & Legal",
      icon: <FaShieldAlt className="text-green-500" />,
      links: [
        { name: "FAQ", url: "/faq" },
        { name: "Privacy Policy", url: "/privacy" },
        { name: "Terms of Service", url: "/terms" },
      ]
    }
  ];

  return (
    <>
      <Seo 
        title="Sitemap"
        description="Complete overview of all pages available on WarGrowth Agency website."
      />

      <section className="bg-slate-950 min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sitemap
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Navigasi lengkap untuk menjelajahi seluruh layanan dan informasi di WarGrowth Agency.
            </p>
          </div>

          {/* Grid Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {sitemapData.map((section, index) => (
              <div key={index} className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xl">{section.icon}</span>
                  <h2 className="text-xl font-bold text-white">
                    {section.category}
                  </h2>
                </div>
                
                <ul className="space-y-4">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <Link 
                        to={link.url} 
                        className="text-slate-400 hover:text-blue-400 hover:translate-x-2 transition-all duration-300 inline-block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* XML Link */}
          <div className="mt-16 text-center border-t border-slate-900 pt-8">
            <p className="text-slate-500 text-sm">
              Looking for XML Sitemap? <a href="/sitemap.xml" className="text-blue-500 underline" target="_blank" rel="noreferrer">Click here</a>
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default Sitemap;