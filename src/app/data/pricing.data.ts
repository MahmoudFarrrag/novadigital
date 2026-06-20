import { PricingPlan } from '../core/models/site.models';

export const pricingPlans: PricingPlan[] = [
  {
    slug: 'business-website',
    name: { en: 'Business Website', ar: 'موقع شركة' },
    price: { en: 'Starts from 5000 EGP', ar: 'يبدأ من 5000 جنيه' },
    description: { en: 'A professional website for companies, clinics, offices, and service providers.', ar: 'موقع احترافي للشركات والعيادات والمكاتب ومقدمي الخدمات.' },
    features: [
      { en: 'Responsive pages', ar: 'صفحات متجاوبة' },
      { en: 'Contact actions', ar: 'أزرار تواصل' },
      { en: 'SEO basics', ar: 'أساسيات SEO' },
    ],
  },
  {
    slug: 'landing-page',
    name: { en: 'Landing Page', ar: 'صفحة هبوط' },
    price: { en: 'Starts from 3000 EGP', ar: 'تبدأ من 3000 جنيه' },
    description: { en: 'A focused campaign page for ads, launches, and offers.', ar: 'صفحة مركزة للحملات والإعلانات والعروض.' },
    features: [
      { en: 'Conversion-focused layout', ar: 'تصميم يركز على التحويل' },
      { en: 'Lead form', ar: 'نموذج بيانات' },
      { en: 'Fast delivery', ar: 'تنفيذ سريع' },
    ],
  },
  {
    slug: 'e-commerce',
    name: { en: 'E-commerce', ar: 'متجر إلكتروني' },
    price: { en: 'Starts from 10000 EGP', ar: 'يبدأ من 10000 جنيه' },
    description: { en: 'Product catalog, order flow, offers, and store-ready interface.', ar: 'كتالوج منتجات ومسار طلبات وعروض وواجهة جاهزة للمتجر.' },
    features: [
      { en: 'Products and categories', ar: 'منتجات وتصنيفات' },
      { en: 'Cart flow', ar: 'مسار سلة الشراء' },
      { en: 'Order management ready', ar: 'جاهز لإدارة الطلبات' },
    ],
  },
  {
    slug: 'dashboard-crm',
    name: { en: 'Dashboard / CRM', ar: 'لوحة تحكم / CRM' },
    price: { en: 'Starts from 20000 EGP', ar: 'تبدأ من 20000 جنيه' },
    description: { en: 'Custom management tools for teams, reports, customers, and operations.', ar: 'أدوات إدارة مخصصة للفرق والتقارير والعملاء والعمليات.' },
    features: [
      { en: 'User roles', ar: 'صلاحيات مستخدمين' },
      { en: 'Reports and tables', ar: 'تقارير وجداول' },
      { en: 'API-ready modules', ar: 'وحدات جاهزة للربط' },
    ],
  },
  {
    slug: 'maintenance',
    name: { en: 'Maintenance', ar: 'الصيانة' },
    price: { en: 'Starts from 1000 EGP monthly', ar: 'تبدأ من 1000 جنيه شهريًا' },
    description: { en: 'Monthly updates, fixes, content changes, and technical support.', ar: 'تحديثات وإصلاحات وتعديلات محتوى ودعم تقني شهري.' },
    features: [
      { en: 'Bug fixes', ar: 'إصلاح أخطاء' },
      { en: 'Content edits', ar: 'تعديلات محتوى' },
      { en: 'Performance checks', ar: 'فحص الأداء' },
    ],
  },
];
