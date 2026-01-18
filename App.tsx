import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// Import Layout & Pages
import Layout from './src/components/Layout';
import Home from './src/pages/Home';
import Services from './src/pages/Services';

// ✅ PERBAIKAN: Arahkan ke file Page, BUKAN ke ServiceCard
import ServiceDetail from './src/pages/ServiceDetail'; 

import Projects from './src/pages/Projects';
import About from './src/pages/About';
import Contact from './src/pages/Contact';
import FAQ from './src/pages/FAQ';
import Privacy from './src/pages/Privacy';
import Sitemap from './src/pages/Sitemap';
import { initAnalytics } from './src/utils/analytics';


const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <Router>
      {/* 2. GLOBAL SEO SETTING */}
      {/* Ini akan membuat judul halaman otomatis: "Nama Halaman | WarGrowth" */}
      <Helmet 
        titleTemplate="%s | WarGrowth Agency" 
        defaultTitle="WarGrowth Agency - Jasa Website & Digital Marketing"
      >
         <meta name="description" content="Agency digital marketing dan pembuatan website terpercaya untuk UMKM dan perusahaan." />
      </Helmet>

      <ScrollToTop />
      
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/sitemap" element={<Sitemap />} />
          
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
