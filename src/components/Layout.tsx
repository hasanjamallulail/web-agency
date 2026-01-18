import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import SocialProofWidget from './SocialProofWidget';
import AiConsultant from './AiConsultant';

// Kita bungkus dalam try-catch atau optional, jaga-jaga kalau file analytics belum dibuat
import { trackPageView } from '../utils/analytics';

const Layout: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      
      {/* Floating Partials */}
      <SocialProofWidget />
      <AiConsultant />
    </div>
  );
};

export default Layout;