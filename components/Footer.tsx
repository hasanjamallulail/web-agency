import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, Mail, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-slate-400 pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded flex items-center justify-center text-white font-bold shadow-lg shadow-blue-900/50">W</div>
              <span className="font-bold text-xl text-white">Wargrowth</span>
            </div>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed">
              PT. Bahagia Tumbuh Bersama. We help businesses grow through data-driven digital strategies and human-centric design.
            </p>
            <div className="space-y-4 text-sm">
               <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 text-blue-500" />
                  <span>Jakarta Selatan, Indonesia</span>
               </div>
               <div className="flex items-center gap-3">
                  <Mail size={18} className="text-blue-500" />
                  <a href="mailto:hello@wargrowth.com" className="hover:text-white transition-colors">hello@wargrowth.com</a>
               </div>
               <div className="flex items-center gap-3">
                  <Clock size={18} className="text-blue-500" />
                  <span>Mon - Fri: 09:00 - 17:00</span>
               </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Services</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services/seo" className="hover:text-blue-400 transition-colors">SEO Optimization</Link></li>
              <li><Link to="/services/ads" className="hover:text-blue-400 transition-colors">Performance Ads</Link></li>
              <li><Link to="/services/marketplace" className="hover:text-blue-400 transition-colors">Marketplace Mgmt</Link></li>
              <li><Link to="/services/web-app" className="hover:text-blue-400 transition-colors">Web App Development</Link></li>
              <li><Link to="/services/social-media" className="hover:text-blue-400 transition-colors">Social Media Mgmt</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-blue-400 transition-colors">Our Projects</Link></li>
              <li><Link to="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-blue-400 transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
             <h3 className="text-white font-bold mb-6 text-lg">Legal & Help</h3>
             <ul className="space-y-3 text-sm mb-8">
                <li><Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/faq" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
             </ul>
             
             <h4 className="text-white text-sm font-bold mb-4">Follow Us</h4>
             <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all text-slate-400"><Instagram size={18}/></a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all text-slate-400"><Linkedin size={18}/></a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all text-slate-400"><Twitter size={18}/></a>
             </div>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-sm text-slate-600">
             © {new Date().getFullYear()} PT. Bahagia Tumbuh Bersama. All rights reserved.
           </p>
           <p className="text-sm text-slate-500 font-semibold flex items-center gap-1">
             Copyright <span className="text-red-500">♥️</span> Wargrowth Agency
           </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;