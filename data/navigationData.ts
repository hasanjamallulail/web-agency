import { NavItem } from '../types';

export const navigationData: NavItem[] = [
  { 
    label: 'Home', 
    path: '/' 
  },
  { 
    label: 'Service', 
    path: '/services',
    children: [
      { label: 'All Services', path: '/services' },
      { label: 'SEO', path: '/services/seo' },
      { label: 'Ads', path: '/services/ads' },
      { label: 'Marketplace', path: '/services/marketplace' },
      { label: 'Web App', path: '/services/web-app' },
      { label: 'Sosial Media Management', path: '/services/social-media' },
      { label: 'UI/UX Design', path: '/services/ui-ux' }
    ]
  },
  // Specific links asked to be on Top Navbar
  { label: 'SEO', path: '/services/seo' },
  { label: 'Ads', path: '/services/ads' },
  { label: 'Marketplace', path: '/services/marketplace' },
  { label: 'Web App', path: '/services/web-app' },
  { label: 'Sosial Media Management', path: '/services/social-media' },
  { 
    label: 'Our Project', 
    path: '/projects' 
  },
  { 
    label: 'About', 
    path: '/about' 
  },
  {
    label: 'Testimonial',
    path: '/#testimonials'
  },
  { 
    label: 'Contact', 
    path: '/contact' 
  },
];