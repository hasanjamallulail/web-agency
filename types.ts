import React from 'react';

// --- Core Interfaces ---

export interface IService {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode; // Optional because icon might be handled by a mapper
  link?: string;
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
