import React from 'react';
import { IService } from '../types';
import { 
  FaSearch, 
  FaBullhorn, 
  FaStore, 
  FaCode, 
  FaUsers, 
  FaPaintBrush 
} from 'react-icons/fa';

export const servicesData: IService[] = [
  { id: 1, title: "SEO Optimization", slug: "seo", description: "Dominate Google rankings with semantic SEO.", content: "Pendekatan Semantic SEO dan Technical Audit menyeluruh.", features: ["Keyword Strategy", "Technical Audit", "On-Page SEO"], icon: <FaSearch /> },
  { id: 2, title: "Performance Ads", slug: "ads", description: "Meta & Google Ads focusing on ROI.", content: "Kampanye Ads dengan fokus pada konversi.", features: ["Google Ads", "Meta Ads", "Retargeting"], icon: <FaBullhorn /> },
  { id: 3, title: "Marketplace Optimization", slug: "marketplace", description: "Optimize Shopee & Tokopedia store.", content: "Dekorasi profesional dan optimasi judul produk.", features: ["Store Decoration", "Product SEO", "Marketplace Ads"], icon: <FaStore /> },
  { id: 4, title: "Web App Development", slug: "web-app", description: "Scalable React/Next.js applications.", content: "Website modern menggunakan teknologi terbaru.", features: ["Custom App", "Responsive UI", "API Integration"], icon: <FaCode /> },
  { id: 5, title: "Social Media Management", slug: "social-media", description: "Content that goes viral.", content: "Bangun brand awareness melalui konten kreatif.", features: ["Content Calendar", "Engagement", "Graphic Design"], icon: <FaUsers /> },
  { id: 6, title: "UI/UX Design", slug: "ui-ux", description: "Interfaces that boost conversion.", content: "Rancangan antarmuka intuitif berbasis psikologi (NLP).", features: ["Wireframing", "User Research", "Design System"], icon: <FaPaintBrush /> }
];