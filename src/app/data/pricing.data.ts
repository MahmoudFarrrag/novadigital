import { PricingPlan } from '../core/models/site.models';

export const pricingPlans: PricingPlan[] = [
  {
    slug: 'portfolio-website',
    name: { en: 'Portfolio Website', ar: 'موقع بورتفوليو' },
    price: { en: 'Starts from 3500 EGP', ar: 'يبدأ من 3500 جنيه' },
    description: {
      en: 'A clean personal website to showcase your work, experience, services, and contact details.',
      ar: 'موقع شخصي أنيق لعرض أعمالك وخبراتك وخدماتك وطرق التواصل معك.',
    },
    features: [
      { en: 'Personal profile section', ar: 'قسم تعريفي شخصي' },
      { en: 'Projects showcase', ar: 'عرض الأعمال والمشاريع' },
      { en: 'Contact links', ar: 'روابط ووسائل تواصل' },
    ],
  },
  {
    slug: 'business-website',
    name: { en: 'Business Website', ar: 'موقع شركة' },
    price: { en: 'Starts from 5000 EGP', ar: 'يبدأ من 5000 جنيه' },
    description: {
      en: 'A professional website for companies, clinics, offices, restaurants, and service providers.',
      ar: 'موقع احترافي للشركات والعيادات والمكاتب والمطاعم ومقدمي الخدمات.',
    },
    features: [
      { en: 'Responsive pages', ar: 'صفحات متجاوبة' },
      { en: 'Services and about sections', ar: 'أقسام للخدمات ومن نحن' },
      { en: 'Contact and WhatsApp actions', ar: 'أزرار تواصل وواتساب' },
    ],
  },
  {
    slug: 'e-commerce',
    name: { en: 'E-commerce Store', ar: 'متجر إلكتروني' },
    price: { en: 'Starts from 10000 EGP', ar: 'يبدأ من 10000 جنيه' },
    description: {
      en: 'An online store for displaying products, managing orders, offers, and customer purchase flow.',
      ar: 'متجر إلكتروني لعرض المنتجات وإدارة الطلبات والعروض وتجربة شراء واضحة للعملاء.',
    },
    features: [
      { en: 'Products and categories', ar: 'منتجات وتصنيفات' },
      { en: 'Cart and checkout flow', ar: 'سلة شراء ومسار طلب' },
      { en: 'Offers and order management', ar: 'عروض وإدارة طلبات' },
    ],
  },
  {
    slug: 'dashboard-systems',
    name: { en: 'Dashboards & Custom Systems', ar: 'لوحات تحكم وأنظمة مخصصة' },
    price: { en: 'Starts from 20000 EGP', ar: 'تبدأ من 20000 جنيه' },
    description: {
      en: 'Custom dashboards and internal systems for managing users, reports, operations, and daily workflows.',
      ar: 'لوحات تحكم وأنظمة داخلية مخصصة لإدارة المستخدمين والتقارير والعمليات اليومية.',
    },
    features: [
      { en: 'User roles and permissions', ar: 'صلاحيات وأدوار مستخدمين' },
      { en: 'Reports and data tables', ar: 'تقارير وجداول بيانات' },
      { en: 'API-ready modules', ar: 'وحدات جاهزة للربط' },
    ],
  },
  {
    slug: 'mobile-app',
    name: { en: 'Mobile Application', ar: 'تطبيق جوال' },
    price: { en: 'Starts from 25000 EGP', ar: 'يبدأ من 25000 جنيه' },
    description: {
      en: 'Mobile applications for customers, employees, bookings, orders, and business operations.',
      ar: 'تطبيقات جوال للعملاء والموظفين والحجوزات والطلبات والعمليات.',
    },
    features: [
      { en: 'App UX screens', ar: 'شاشات تجربة المستخدم' },
      { en: 'Customer account flow', ar: 'مسار حساب العميل' },
      { en: 'API integration planning', ar: 'تخطيط الربط مع API' },
    ],
  },
  {
    slug: 'maintenance-hosting',
    name: { en: 'Hosting & Maintenance', ar: 'الاستضافة والصيانة' },
    price: { en: 'Starts from 1000 EGP monthly', ar: 'تبدأ من 1000 جنيه شهرياً' },
    description: {
      en: 'Hosting setup, SSL, updates, fixes, content changes, monitoring, and technical support after delivery.',
      ar: 'إعداد استضافة وSSL وتحديثات وإصلاحات وتعديلات محتوى ومتابعة ودعم تقني بعد التسليم.',
    },
    features: [
      { en: 'Hosting and SSL setup', ar: 'إعداد الاستضافة وSSL' },
      { en: 'Bug fixes and updates', ar: 'إصلاح أخطاء وتحديثات' },
      { en: 'Content edits and support', ar: 'تعديلات محتوى ودعم فني' },
    ],
  },
];