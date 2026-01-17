import { NavItem } from '../types';

export const navigationData: NavItem[] = [
  { 
    label: 'Home', 
    path: '/' 
  },
  { 
    label: 'Services', // Saya ganti jadi plural 'Services' biar lebih umum
    path: '/services',
    children: [
      
      { label: 'SEO Optimization', path: '/services/seo' },
      { label: 'Google Ads', path: '/services/ads' },
      { label: 'Marketplace', path: '/services/marketplace' },
      { label: 'Web App Dev', path: '/services/web-app' },
      { label: 'Social Media Mgmt', path: '/services/social-media' },
      { label: 'UI/UX Design', path: '/services/ui-ux' }
    ]
  },
  
  { 
    label: 'Our Projects', 
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