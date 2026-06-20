import { DOCUMENT } from '@angular/common';
import { effect, inject, Injectable, signal } from '@angular/core';
import { Lang, LocalizedText } from '../models/site.models';

type CopyKey =
  | 'home'
  | 'about'
  | 'services'
  | 'portfolio'
  | 'pricing'
  | 'contact'
  | 'tagline'
  | 'arabicSlogan'
  | 'startProject'
  | 'viewServices'
  | 'viewPortfolio'
  | 'learnMore'
  | 'whatsapp'
  | 'callNow'
  | 'emailUs'
  | 'servicesPreview'
  | 'servicesPreviewText'
  | 'whyNova'
  | 'portfolioPreview'
  | 'industries'
  | 'workProcess'
  | 'aboutNova'
  | 'vision'
  | 'mission'
  | 'values'
  | 'different'
  | 'ready'
  | 'readyText'
  | 'allServices'
  | 'serviceDetails'
  | 'benefits'
  | 'features'
  | 'projectDetails'
  | 'problem'
  | 'solution'
  | 'technologies'
  | 'result'
  | 'demo'
  | 'startsFrom'
  | 'contactTitle'
  | 'contactText'
  | 'name'
  | 'phone'
  | 'message'
  | 'send'
  | 'mapPlaceholder'
  | 'socialLinks'
  | 'notFound';

const copy: Record<CopyKey, LocalizedText> = {
  home: { en: 'Home', ar: 'الرئيسية' },
  about: { en: 'About', ar: 'من نحن' },
  services: { en: 'Services', ar: 'الخدمات' },
  portfolio: { en: 'Portfolio', ar: 'الأعمال' },
  pricing: { en: 'Pricing', ar: 'الأسعار' },
  contact: { en: 'Contact', ar: 'تواصل معنا' },
  tagline: { en: 'Your Partner in Digital Growth', ar: 'شريكك في النمو الرقمي' },
  arabicSlogan: {
    en: 'We provide digital solutions that help companies increase sales, improve management, and grow their digital presence.',
    ar: 'نقدم حلولًا رقمية تساعد الشركات على زيادة المبيعات وتحسين الإدارة وتطوير حضورها الرقمي.',
  },
  startProject: { en: 'Start a Project', ar: 'ابدأ مشروعك' },
  viewServices: { en: 'View Services', ar: 'تصفح الخدمات' },
  viewPortfolio: { en: 'View Portfolio', ar: 'شاهد الأعمال' },
  learnMore: { en: 'Learn More', ar: 'اعرف المزيد' },
  whatsapp: { en: 'WhatsApp', ar: 'واتساب' },
  callNow: { en: 'Call Now', ar: 'اتصل الآن' },
  emailUs: { en: 'Email Us', ar: 'راسلنا' },
  servicesPreview: { en: 'Services Built for Growth', ar: 'خدمات مصممة للنمو' },
  servicesPreviewText: {
    en: 'From polished websites to management dashboards, Nova Digital builds practical digital systems for ambitious businesses.',
    ar: 'من المواقع الاحترافية إلى لوحات الإدارة، تطور Nova Digital أنظمة رقمية عملية للشركات الطموحة.',
  },
  whyNova: { en: 'Why Nova Digital', ar: 'لماذا Nova Digital' },
  portfolioPreview: { en: 'Selected Work', ar: 'نماذج من الأعمال' },
  industries: { en: 'Industries We Serve', ar: 'القطاعات التي نخدمها' },
  workProcess: { en: 'Work Process', ar: 'طريقة العمل' },
  aboutNova: { en: 'About Nova Digital', ar: 'عن Nova Digital' },
  vision: { en: 'Vision', ar: 'الرؤية' },
  mission: { en: 'Mission', ar: 'الرسالة' },
  values: { en: 'Values', ar: 'القيم' },
  different: { en: 'Why We Are Different', ar: 'ما الذي يميزنا' },
  ready: { en: 'Ready to grow digitally?', ar: 'جاهز للنمو الرقمي؟' },
  readyText: {
    en: 'Tell us what you need, and we will shape a clean digital solution around your goals.',
    ar: 'أخبرنا بما تحتاجه وسنصمم حلًا رقميًا واضحًا يناسب أهدافك.',
  },
  allServices: { en: 'All Services', ar: 'كل الخدمات' },
  serviceDetails: { en: 'Service Details', ar: 'تفاصيل الخدمة' },
  benefits: { en: 'Benefits', ar: 'الفوائد' },
  features: { en: 'Features', ar: 'المميزات' },
  projectDetails: { en: 'Project Details', ar: 'تفاصيل المشروع' },
  problem: { en: 'Problem', ar: 'التحدي' },
  solution: { en: 'Solution', ar: 'الحل' },
  technologies: { en: 'Technologies', ar: 'التقنيات' },
  result: { en: 'Result', ar: 'النتيجة' },
  demo: { en: 'Demo Link', ar: 'رابط العرض' },
  startsFrom: { en: 'Starts From', ar: 'يبدأ من' },
  contactTitle: { en: 'Let us build your next digital move', ar: 'دعنا نبني خطوتك الرقمية القادمة' },
  contactText: {
    en: 'Reach Nova Digital through WhatsApp, phone, email, or the simple form below.',
    ar: 'تواصل مع Nova Digital عبر واتساب أو الهاتف أو البريد أو النموذج التالي.',
  },
  name: { en: 'Name', ar: 'الاسم' },
  phone: { en: 'Phone', ar: 'الهاتف' },
  message: { en: 'Message', ar: 'الرسالة' },
  send: { en: 'Send Message', ar: 'إرسال الرسالة' },
  mapPlaceholder: { en: 'Google Map Placeholder', ar: 'مكان خريطة Google' },
  socialLinks: { en: 'Social Links', ar: 'روابط التواصل' },
  notFound: { en: 'The requested item was not found.', ar: 'العنصر المطلوب غير موجود.' },
};

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);
  readonly current = signal<Lang>((localStorage.getItem('nova-lang') as Lang) || 'en');

  constructor() {
    effect(() => {
      const lang = this.current();
      localStorage.setItem('nova-lang', lang);
      this.document.documentElement.lang = lang;
      this.document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    });
  }

  setLanguage(lang: Lang): void {
    this.current.set(lang);
  }

  toggle(): void {
    this.current.update((lang) => (lang === 'en' ? 'ar' : 'en'));
  }

  text(value: LocalizedText): string {
    return value[this.current()];
  }

  t(key: CopyKey): string {
    return copy[key][this.current()];
  }
}
