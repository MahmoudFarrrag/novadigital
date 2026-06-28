import { ServiceItem } from '../core/models/site.models';

export const services: ServiceItem[] = [
  {
    slug: 'website-development',
    icon: 'WEB',
    image: '/assets/images/services/website-development.png',
    title: { en: 'Website Development', ar: 'تطوير المواقع' },
    shortDescription: {
      en: 'Fast, responsive websites that present your brand clearly and convert visitors into leads.',
      ar: 'مواقع سريعة ومتجاوبة تعرض علامتك بوضوح وتحوّل الزوار إلى عملاء محتملين.',
    },
    description: {
      en: 'We build business websites with clean UX, scalable structure, Arabic-first content, and strong conversion paths.',
      ar: 'نطوّر مواقع أعمال احترافية بتجربة استخدام واضحة وبنية قابلة للتوسع ومحتوى عربي أولاً ومسارات تحويل فعّالة.',
    },
    benefits: [
      { en: 'Professional online presence', ar: 'حضور رقمي احترافي' },
      { en: 'Mobile-first experience', ar: 'تجربة ممتازة على الجوال' },
      { en: 'Clear lead generation paths', ar: 'مسارات واضحة لجذب العملاء' },
    ],
    features: [
      { en: 'Responsive interface', ar: 'واجهة متجاوبة' },
      { en: 'Arabic and English support', ar: 'دعم العربية والإنجليزية' },
      { en: 'Contact and WhatsApp actions', ar: 'نماذج تواصل وأزرار واتساب' },
    ],
  },
  {
    slug: 'dashboards-admin-panels',
    icon: 'DASH',
    image: '/assets/images/services/dashboard.png',
    title: { en: 'Dashboards & Admin Panels', ar: 'لوحات التحكم والإدارة' },
    shortDescription: {
      en: 'Operational dashboards that turn daily work into clear, measurable workflows.',
      ar: 'لوحات تشغيل وإدارة تحوّل العمل اليومي إلى إجراءات واضحة وقابلة للقياس.',
    },
    description: {
      en: 'Custom dashboards for teams that need permissions, reports, content management, and daily control.',
      ar: 'لوحات تحكم مخصصة للفرق التي تحتاج إلى صلاحيات وتقارير وإدارة محتوى وتحكم يومي.',
    },
    benefits: [
      { en: 'Better management visibility', ar: 'رؤية إدارية أفضل' },
      { en: 'Fewer manual tasks', ar: 'تقليل العمل اليدوي' },
      { en: 'Faster decisions', ar: 'قرارات أسرع' },
    ],
    features: [
      { en: 'Role-based access', ar: 'صلاحيات حسب الدور' },
      { en: 'Charts and reports', ar: 'رسوم وتقارير' },
      { en: 'API-ready architecture', ar: 'بنية جاهزة للربط البرمجي' },
    ],
  },
  {
    slug: 'mobile-applications',
    icon: 'APP',
    image: '/assets/images/services/mobile-app.png',
    title: { en: 'Mobile Applications', ar: 'تطبيقات الجوال' },
    shortDescription: {
      en: 'Practical app experiences for customers, staff, bookings, orders, and operations.',
      ar: 'تطبيقات عملية للعملاء والموظفين والحجوزات والطلبات والعمليات.',
    },
    description: {
      en: 'We design and develop mobile app flows that connect smoothly with your business systems and APIs.',
      ar: 'نصمم ونطور تدفقات تطبيقات جوال ترتبط بسلاسة مع أنظمة عملك والواجهات البرمجية.',
    },
    benefits: [
      { en: 'Closer customer access', ar: 'وصول أقرب للعملاء' },
      { en: 'Modern brand perception', ar: 'صورة عصرية للعلامة' },
      { en: 'Streamlined mobile workflows', ar: 'إجراءات مبسطة عبر الجوال' },
    ],
    features: [
      { en: 'App screens', ar: 'شاشات التطبيق' },
      { en: 'User flows', ar: 'تدفقات المستخدم' },
      { en: 'API integration planning', ar: 'تخطيط الربط البرمجي' },
    ],
  },
  {
    slug: 'e-commerce',
    icon: 'SHOP',
    image: '/assets/images/services/ecommerce.png',
    title: { en: 'E-commerce Stores', ar: 'المتاجر الإلكترونية' },
    shortDescription: {
      en: 'Online stores built for products, orders, payments, offers, and growth.',
      ar: 'متاجر إلكترونية لإدارة المنتجات والطلبات والدفع والعروض والنمو.',
    },
    description: {
      en: 'We design and build stores with product catalogs, checkout flows, local market needs, and order management readiness.',
      ar: 'نصمم ونطور متاجر تشمل كتالوج المنتجات ومسارات الشراء واحتياجات السوق المحلي وجاهزية إدارة الطلبات.',
    },
    benefits: [
      { en: 'Sell online 24/7', ar: 'بيع على مدار الساعة' },
      { en: 'Organized products and orders', ar: 'تنظيم المنتجات والطلبات' },
      { en: 'Higher customer trust', ar: 'ثقة أكبر لدى العملاء' },
    ],
    features: [
      { en: 'Product catalog', ar: 'كتالوج منتجات' },
      { en: 'Cart and checkout', ar: 'سلة ومتابعة طلب' },
      { en: 'Offers and coupons', ar: 'عروض وكوبونات' },
    ],
  },
 {
  slug: 'system-integration',
  icon: 'Integration',
  image: '/assets/images/services/crm.png',
  title: { en: 'System Integration', ar: 'تكامل الأنظمة' },
  shortDescription: {
    en: 'Connect all your business systems in one platform to exchange data and manage operations easily.',
    ar: 'ربط جميع أنظمة شركتك في منصة واحدة لتبادل البيانات وإدارة العمليات بسهولة.',
  },
  description: {
    en: 'System integration solutions that connect your tools, dashboards, websites, apps, and internal systems into one smooth workflow.',
    ar: 'حلول تكامل أنظمة تربط الأدوات ولوحات التحكم والمواقع والتطبيقات والأنظمة الداخلية في مسار عمل واحد وسهل.',
  },
  benefits: [
    { en: 'Unified business data', ar: 'توحيد بيانات العمل' },
    { en: 'Less manual work', ar: 'تقليل العمل اليدوي' },
    { en: 'Faster operations', ar: 'عمليات أسرع وأسهل' },
  ],
  features: [
    { en: 'API integrations', ar: 'تكاملات API' },
    { en: 'Connected dashboards', ar: 'لوحات تحكم مترابطة' },
    { en: 'Automated workflows', ar: 'أتمتة مسارات العمل' },
  ],
},
  {
    slug: 'hosting-maintenance',
    icon: 'CARE',
    image: '/assets/images/services/hosting.png',
    title: { en: 'Hosting & Maintenance', ar: 'الاستضافة والصيانة' },
    shortDescription: {
      en: 'Reliable launch, hosting setup, SSL, monitoring, updates, and support after delivery.',
      ar: 'إطلاق موثوق وإعداد استضافة وSSL ومتابعة وتحديثات ودعم بعد التسليم.',
    },
    description: {
      en: 'We prepare the technical foundation, deploy the project, and keep it updated, secure, and reliable.',
      ar: 'نجهز الأساس التقني وننشر المشروع ونحافظ عليه محدثاً وآمناً وموثوقاً.',
    },
    benefits: [
      { en: 'Smooth launch', ar: 'إطلاق سلس' },
      { en: 'Secure HTTPS setup', ar: 'إعداد HTTPS آمن' },
      { en: 'Continuous support', ar: 'دعم مستمر' },
    ],
    features: [
      { en: 'Hosting configuration', ar: 'تهيئة الاستضافة' },
      { en: 'Deployment checklist', ar: 'قائمة فحص النشر' },
      { en: 'Bug fixes and content updates', ar: 'إصلاحات وتحديثات محتوى' },
    ],
  },
];
