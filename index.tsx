import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./src/styles/global.css";

// 1. Import Provider SEO
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
);