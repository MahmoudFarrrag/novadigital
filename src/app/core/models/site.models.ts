export type Lang = 'en' | 'ar';

export interface LocalizedText {
  en: string;
  ar: string;
}

export interface ServiceItem {
  slug: string;
  icon: string;
  title: LocalizedText;
  shortDescription: LocalizedText;
  description: LocalizedText;
  benefits: LocalizedText[];
  features: LocalizedText[];
  image: string;
}

export interface ProjectItem {
  slug: string;
  image: string;
  name: LocalizedText;
  category: LocalizedText;
  problem: LocalizedText;
  solution: LocalizedText;
  technologies: string[];
  result: LocalizedText;
  demoLink: string;
}

export interface PricingPlan {
  slug: string;
  name: LocalizedText;
  price: LocalizedText;
  description: LocalizedText;
  features: LocalizedText[];
}

export interface Industry {
  icon: string;
  name: LocalizedText;
}
