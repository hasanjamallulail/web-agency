export const WHATSAPP_NUMBER = "6281213772360";

export const WA_MESSAGES = {
  DEFAULT: "Halo Wargrowth, saya ingin konsultasi mengenai strategi pertumbuhan bisnis saya.",
  SEO: "Halo Wargrowth, saya tertarik dengan layanan SEO Optimization untuk meningkatkan ranking website.",
  ADS: "Halo Wargrowth, saya ingin berdiskusi mengenai strategi Performance Ads (Meta/Google).",
  MARKETPLACE: "Halo Wargrowth, saya butuh bantuan untuk Marketplace Optimization (Shopee/Tokopedia).",
  WEB_APP: "Halo Wargrowth, saya berencana membangun Web App/Website yang scalable.",
  SOCIAL_MEDIA: "Halo Wargrowth, saya tertarik dengan layanan Social Media Management.",
  UI_UX: "Halo Wargrowth, saya ingin mendiskusikan kebutuhan UI/UX Design.",
  PARTNERSHIP: "Halo Wargrowth, saya ingin berdiskusi mengenai potensi partnership/kolaborasi."
};

export const getWhatsAppUrl = (message: string = WA_MESSAGES.DEFAULT) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
