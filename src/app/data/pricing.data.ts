import { PricingPlan } from '../core/models/site.models';

export const pricingPlans: PricingPlan[] = [
  {
    slug: 'portfolio-website',
    name: { en: 'Portfolio Website', ar: 'موقع بورتفوليو' },
    price: { en: 'Starts from 1500 EGP', ar: 'يبدأ من 1500 جنيه' },
    description: {
      en: 'A professional personal website for freelancers and professionals who want to present their work, CV, services, projects, and contact details with confidence.',
      ar: 'موقع شخصي احترافي للمستقلين والمحترفين لعرض الأعمال والسيرة الذاتية والخدمات والمشاريع وطرق التواصل بثقة.',
    },
    features: [
      { en: 'CV download, skills, services, projects, and testimonials', ar: 'تحميل السيرة الذاتية والمهارات والخدمات والمشاريع وآراء العملاء' },
      { en: 'Phone, WhatsApp, social links, and contact form', ar: 'هاتف وواتساب وروابط تواصل اجتماعي ونموذج تواصل' },
      { en: 'Responsive personal brand presentation', ar: 'عرض متجاوب واحترافي للعلامة الشخصية' },
    ],
  },
  {
    slug: 'business-website',
    name: { en: 'Business Website', ar: 'موقع شركة' },
    price: { en: 'Starts from 5000 EGP', ar: 'يبدأ من 5000 جنيه' },
    description: {
      en: 'A polished business website for companies, clinics, offices, restaurants, and service providers that need trust, clarity, and direct enquiries.',
      ar: 'موقع أعمال مصقول للشركات والعيادات والمكاتب والمطاعم ومقدمي الخدمات ممن يحتاجون إلى الثقة والوضوح وطلبات تواصل مباشرة.',
    },
    features: [
      { en: 'Responsive pages with clear brand presentation', ar: 'صفحات متجاوبة مع عرض واضح للعلامة' },
      { en: 'Services, about, contact, WhatsApp, and SEO-ready structure', ar: 'خدمات ومن نحن وتواصل وواتساب وبنية جاهزة لـ SEO' },
      { en: 'Conversion-focused layout for real enquiries', ar: 'تخطيط يركز على تحويل الزوار إلى طلبات فعلية' },
    ],
  },
  {
    slug: 'e-commerce',
    name: { en: 'E-commerce Store', ar: 'متجر إلكتروني' },
    price: { en: 'Starts from 10000 EGP', ar: 'يبدأ من 10000 جنيه' },
    description: {
      en: 'An online store for businesses that need organized products, categories, offers, checkout flows, and order management readiness.',
      ar: 'متجر إلكتروني للأعمال التي تحتاج إلى منتجات منظمة وتصنيفات وعروض ومسار شراء وجاهزية لإدارة الطلبات.',
    },
    features: [
      { en: 'Products, categories, cart, checkout, and order flow', ar: 'منتجات وتصنيفات وسلة ومسار شراء وطلبات' },
      { en: 'Offers, coupons, featured products, and customer actions', ar: 'عروض وكوبونات ومنتجات مميزة وإجراءات للعملاء' },
      { en: 'Ready for dashboard, payment, and shipping integrations', ar: 'جاهز للربط مع لوحة التحكم والدفع والشحن' },
    ],
  },
  {
    slug: 'dashboard-systems',
    name: { en: 'Dashboards & Custom Systems', ar: 'لوحات تحكم وأنظمة مخصصة' },
    price: { en: 'Starts from 20000 EGP', ar: 'تبدأ من 20000 جنيه' },
    description: {
      en: 'Custom dashboards and internal systems for businesses that need users, permissions, reports, operations, and daily workflow control.',
      ar: 'لوحات تحكم وأنظمة داخلية مخصصة للأعمال التي تحتاج إلى مستخدمين وصلاحيات وتقارير وعمليات وتحكم يومي.',
    },
    features: [
      { en: 'Roles, permissions, tables, filters, and status actions', ar: 'أدوار وصلاحيات وجداول وفلاتر وإجراءات حالة' },
      { en: 'Reports, summaries, content management, and modules', ar: 'تقارير وملخصات وإدارة محتوى ووحدات تشغيل' },
      { en: 'API-ready and scalable structure', ar: 'بنية قابلة للتوسع وجاهزة للربط البرمجي' },
    ],
  },
  {
    slug: 'mobile-app',
    name: { en: 'Mobile Application', ar: 'تطبيق جوال' },
    price: { en: 'Starts from 25000 EGP', ar: 'يبدأ من 25000 جنيه' },
    description: {
      en: 'Mobile applications for customer accounts, bookings, orders, requests, staff workflows, and business services that need mobile access.',
      ar: 'تطبيقات جوال لحسابات العملاء والحجوزات والطلبات وطلبات الخدمة ومسارات الموظفين والخدمات التي تحتاج وصولاً عبر الجوال.',
    },
    features: [
      { en: 'App UX screens and customer journeys', ar: 'شاشات تجربة مستخدم ومسارات عملاء' },
      { en: 'Accounts, forms, requests, bookings, or order flows', ar: 'حسابات ونماذج وطلبات وحجوزات أو مسارات شراء' },
      { en: 'Backend, dashboard, and API integration planning', ar: 'تخطيط للربط مع الخلفية ولوحة التحكم وAPI' },
    ],
  },
  {
    slug: 'maintenance-hosting',
    name: { en: 'Hosting & Maintenance', ar: 'الاستضافة والصيانة' },
    price: { en: 'Starts from 1000 EGP monthly', ar: 'تبدأ من 1000 جنيه شهرياً' },
    description: {
      en: 'Support plans for hosting setup, SSL, deployment, monitoring, fixes, updates, content edits, and post-delivery technical support.',
      ar: 'خطط دعم لإعداد الاستضافة وSSL والنشر والمتابعة والإصلاحات والتحديثات وتعديلات المحتوى والدعم الفني بعد التسليم.',
    },
    features: [
      { en: 'Hosting, domain, SSL, deployment, and backups', ar: 'استضافة ودومين وSSL ونشر ونسخ احتياطي' },
      { en: 'Bug fixes, monitoring, updates, and content edits', ar: 'إصلاح أخطاء ومتابعة وتحديثات وتعديلات محتوى' },
      { en: 'Flexible monthly support according to project size', ar: 'دعم شهري مرن حسب حجم المشروع' },
    ],
  },
];
