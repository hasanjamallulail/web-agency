import { Building2, Calendar, Wallet } from 'lucide-react';

// Data segmen pasar
export const segmentsData = [
  "Government",
  "State-Owned Enterprises (BUMN)",
  "Corporations",
  "Established SMEs"
];

// Data statistik utama
export const statsData = [
  {
    id: 1,
    label: "Companies Served",
    value: "76+",
    icon: Building2, // Simpan referensi komponennya saja
    description: "Diverse portfolio across various industries.",
    color: "from-blue-500/20 to-transparent",
    iconColor: "text-blue-400"
  },
  {
    id: 2,
    label: "Established Since",
    value: "2021",
    icon: Calendar, 
    description: "Consistently delivering high-impact growth.",
    color: "from-purple-500/20 to-transparent",
    iconColor: "text-purple-400"
  },
  {
    id: 3,
    label: "Ad Spend Managed",
    value: "25B+",
    icon: Wallet,
    description: "Successfully managing high-scale budgets.",
    color: "from-emerald-500/20 to-transparent",
    iconColor: "text-emerald-400"
  }
];