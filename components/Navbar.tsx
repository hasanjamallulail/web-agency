import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import Button from './ui/Button';
import { trackEvent } from '../utils/analytics';
import { getWhatsAppUrl } from '../constants';
import { NavigationService } from '../services/Repository';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  // State to track which mobile dropdown is open (by label name)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const location = useLocation();

  const navLinks = NavigationService.getAll();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    // Handle anchor links or sub-paths
    if (path.includes('#')) return location.hash === path.substring(path.indexOf('#'));
    return location.pathname.startsWith(path);
  };

  const toggleMobileDropdown = (label: string) => {
    if (mobileDropdownOpen === label) {
      setMobileDropdownOpen(null);
    } else {
      setMobileDropdownOpen(label);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-[0_0_15px_rgba(37,99,235,0.5)] group-hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] transition-all">W</div>
              <span className="font-bold text-xl tracking-tight text-white group-hover:text-blue-400 transition-colors">Wargrowth</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                <Link
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive(link.path) ? 'text-blue-400 drop-shadow-[0_0_5px_rgba(96,165,250,0.5)]' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
                
                {/* Dynamic Mega Menu / Dropdown */}
                {link.children && link.children.length > 0 && (
                  <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                     <div className="rounded-lg shadow-2xl shadow-black/50 ring-1 ring-slate-800 overflow-hidden bg-slate-900 p-2">
                        <div className="flex flex-col gap-1">
                          {link.children.map((sub) => (
                             <Link 
                               key={sub.label} 
                               to={sub.path} 
                               className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-blue-400 rounded-md transition-colors"
                             >
                               {sub.label}
                             </Link>
                          ))}
                        </div>
                     </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex">
             <Button 
               href={getWhatsAppUrl()}
               target="_blank"
               rel="noreferrer"
               trackName="InitiateCheckout"
               trackParams={{ location: 'Navbar-Desktop' }}
               className="!px-5 !py-2.5 !text-sm"
               variant="primary"
             >
               Consult Now
             </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 animate-fade-in-down max-h-screen overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => {
              // Check if item has children (Submenu)
              if (link.children && link.children.length > 0) {
                return (
                  <div key={link.label} className="space-y-1">
                    <div className="flex items-center justify-between pr-2">
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 flex-1"
                      >
                        {link.label}
                      </Link>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleMobileDropdown(link.label);
                        }}
                        className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
                        aria-label={`Toggle ${link.label} Submenu`}
                      >
                        {mobileDropdownOpen === link.label ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </button>
                    </div>
                    {/* Expandable Submenu */}
                    {mobileDropdownOpen === link.label && (
                      <div className="pl-6 space-y-1 bg-slate-950/50 rounded-md mt-1 mb-2 animate-slide-down">
                        {link.children.map((sub) => (
                          <Link 
                            key={sub.label} 
                            to={sub.path} 
                            onClick={() => setIsOpen(false)} 
                            className="block px-3 py-2 text-sm text-slate-500 hover:text-blue-400"
                          >
                            - {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              // Standard Link
              return (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
                >
                  {link.label}
                </Link>
              );
            })}
             <div className="mt-4 px-2 pb-4">
               <Button 
                 href={getWhatsAppUrl()}
                 target="_blank"
                 rel="noreferrer"
                 trackName="InitiateCheckout"
                 trackParams={{ location: 'Navbar-Mobile' }}
                 className="w-full"
                 variant="primary"
               >
                 Consult via WhatsApp
               </Button>
             </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;