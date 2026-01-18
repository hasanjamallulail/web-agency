import { ReactNode } from 'react';

export interface IService {
  id: number;
  title: string;
  slug: string;        // Kunci utama URL
  description: string; // Deskripsi singkat
  content: string;     // Konten lengkap untuk halaman detail
  features?: string[]; // List fitur (opsional)
  icon?: ReactNode;    // Icon
  image?: string;      // Gambar banner (opsional)
}

export interface IClient {
  name: string;
  logo: string; 
}

export interface IProject {
  name: string;
  category: string;
  image?: string;
  featured: boolean; // Mandatory
}

export interface ITestimonial {
  id: number;
  name: string;
  role?: string;
  company: string;
  content: string; // Renamed from quote for clarity
  image?: string;
}

export interface IFounder {
  name: string;
  role: string;
  bio: string;
  image: string; // Initials or URL
  socials: {
    linkedin?: string;
    instagram?: string;
    twitter?: string;
  };
}

export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
