import { ServiceItem } from '../core/models/site.models';

export const services: ServiceItem[] = [
  {
    slug: 'website-development',
    icon: 'WD',
    image: '/assets/images/services/website-development.jpg',
    title: { en: 'Website Development', ar: 'تطوير المواقع' },
    shortDescription: {
      en: 'Fast, responsive websites built to present your brand and convert visitors.',
      ar: 'مواقع سريعة ومتجاوبة تعرض علامتك التجارية وتحول الزوار إلى عملاء.',
    },
    description: {
      en: 'We build premium business websites with clean UX, scalable structure, and strong conversion paths.',
      ar: 'نطور مواقع احترافية بتجربة استخدام واضحة وهيكل قابل للتوسع ومسارات تحويل فعالة.',
    },
    benefits: [
      { en: 'Professional online presence', ar: 'حضور رقمي احترافي' },
      { en: 'Mobile-first experience', ar: 'تجربة ممتازة على الجوال' },
      { en: 'Lead generation focused pages', ar: 'صفحات مصممة لجذب العملاء' },
    ],
    features: [
      { en: 'Responsive UI', ar: 'واجهة متجاوبة' },
      { en: 'SEO-ready structure', ar: 'هيكل مناسب لمحركات البحث' },
      { en: 'Contact and WhatsApp actions', ar: 'نماذج تواصل وأزرار واتساب' },
    ],
  },
  {
    slug: 'dashboards-admin-panels',
    icon: 'DP',
    image: '/assets/images/services/dashboard.jpg',
    title: { en: 'Dashboards & Admin Panels', ar: 'لوحات التحكم والإدارة' },
    shortDescription: {
      en: 'Operational dashboards that turn daily work into clear, measurable workflows.',
      ar: 'لوحات تشغيل تحول العمل اليومي إلى عمليات واضحة وقابلة للقياس.',
    },
    description: {
      en: 'Custom dashboards for teams that need visibility, permissions, reports, and daily control.',
      ar: 'لوحات تحكم مخصصة للفرق التي تحتاج إلى رؤية وصلاحيات وتقارير وتحكم يومي.',
    },
    benefits: [
      { en: 'Better management visibility', ar: 'رؤية إدارية أفضل' },
      { en: 'Fewer manual tasks', ar: 'تقليل العمل اليدوي' },
      { en: 'Faster decisions', ar: 'قرارات أسرع' },
    ],
    features: [
      { en: 'Role-based access', ar: 'صلاحيات حسب الدور' },
      { en: 'Charts and reports', ar: 'رسوم وتقارير' },
      { en: 'Laravel API-ready architecture', ar: 'بنية جاهزة للربط مع Laravel API' },
    ],
  },
  {
    slug: 'e-commerce',
    icon: 'EC',
    image: '/assets/images/services/ecommerce.jpg',
    title: { en: 'E-commerce', ar: 'المتاجر الإلكترونية' },
    shortDescription: {
      en: 'Conversion-focused stores for products, orders, payments, and growth.',
      ar: 'متاجر تركز على البيع وإدارة المنتجات والطلبات والنمو.',
    },
    description: {
      en: 'We design and build online stores with catalog, checkout, order management, and growth features.',
      ar: 'نصمم ونطور متاجر إلكترونية تشمل الكتالوج والدفع وإدارة الطلبات وخصائص النمو.',
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
    slug: 'crm-systems',
    icon: 'CRM',
    image: '/assets/images/services/crm.jpg',
    title: { en: 'CRM Systems', ar: 'أنظمة إدارة العملاء' },
    shortDescription: {
      en: 'Customer pipelines, follow-ups, notes, and reports in one simple system.',
      ar: 'إدارة العملاء والمتابعات والملاحظات والتقارير في نظام واحد بسيط.',
    },
    description: {
      en: 'CRM systems that help sales and support teams track customers from first contact to repeat business.',
      ar: 'أنظمة CRM تساعد فرق البيع والدعم على متابعة العملاء من أول تواصل حتى تكرار الشراء.',
    },
    benefits: [
      { en: 'No missed leads', ar: 'عدم فقدان العملاء المحتملين' },
      { en: 'Clear sales pipeline', ar: 'مسار مبيعات واضح' },
      { en: 'Better follow-up quality', ar: 'متابعة أفضل للعملاء' },
    ],
    features: [
      { en: 'Lead stages', ar: 'مراحل العملاء' },
      { en: 'Tasks and reminders', ar: 'مهام وتذكيرات' },
      { en: 'Customer history', ar: 'سجل العميل' },
    ],
  },
  {
    slug: 'landing-pages',
    icon: 'LP',
    image: '/assets/images/services/landing-page.jpg',
    title: { en: 'Landing Pages', ar: 'صفحات الهبوط' },
    shortDescription: {
      en: 'Focused campaign pages for ads, offers, launches, and lead capture.',
      ar: 'صفحات مركزة للحملات والإعلانات والعروض وجمع العملاء.',
    },
    description: {
      en: 'High-impact landing pages designed around one goal: getting visitors to take action.',
      ar: 'صفحات هبوط مؤثرة مصممة حول هدف واحد: دفع الزائر لاتخاذ إجراء.',
    },
    benefits: [
      { en: 'Better ad performance', ar: 'تحسين أداء الإعلانات' },
      { en: 'Clear message and offer', ar: 'رسالة وعرض واضحان' },
      { en: 'Fast launch time', ar: 'إطلاق سريع' },
    ],
    features: [
      { en: 'Hero and CTA sections', ar: 'قسم رئيسي ودعوات إجراء' },
      { en: 'Lead form', ar: 'نموذج بيانات' },
      { en: 'Analytics-ready layout', ar: 'تصميم جاهز للتحليلات' },
    ],
  },
  {
    slug: 'mobile-applications',
    icon: 'APP',
    image: '/assets/images/services/mobile-app.jpg',
    title: { en: 'Mobile Applications', ar: 'تطبيقات الجوال' },
    shortDescription: {
      en: 'Practical mobile app experiences for customers, staff, and operations.',
      ar: 'تجارب تطبيقات عملية للعملاء والموظفين والعمليات.',
    },
    description: {
      en: 'Mobile application interfaces and API-ready flows for businesses that need service on the go.',
      ar: 'واجهات تطبيقات وتدفقات جاهزة للربط للشركات التي تحتاج خدمة عبر الجوال.',
    },
    benefits: [
      { en: 'Closer customer access', ar: 'وصول أقرب للعملاء' },
      { en: 'Modern brand perception', ar: 'صورة عصرية للعلامة' },
      { en: 'Streamlined mobile workflows', ar: 'عمليات مبسطة عبر الجوال' },
    ],
    features: [
      { en: 'App screens', ar: 'شاشات التطبيق' },
      { en: 'User flows', ar: 'تدفقات المستخدم' },
      { en: 'API integration planning', ar: 'تخطيط الربط البرمجي' },
    ],
  },
  {
    slug: 'hosting-domain',
    icon: 'HD',
    image: '/assets/images/services/hosting.jpg',
    title: { en: 'Hosting & Domain', ar: 'الاستضافة والدومين' },
    shortDescription: {
      en: 'Reliable launch support for domains, hosting, SSL, and deployment.',
      ar: 'دعم موثوق للإطلاق يشمل الدومين والاستضافة وSSL والنشر.',
    },
    description: {
      en: 'We help prepare the technical foundation your website needs to go live with confidence.',
      ar: 'نجهز الأساس التقني الذي يحتاجه موقعك للانطلاق بثقة.',
    },
    benefits: [
      { en: 'Smooth launch', ar: 'إطلاق سلس' },
      { en: 'Secure HTTPS setup', ar: 'إعداد HTTPS آمن' },
      { en: 'Less technical friction', ar: 'تقليل التعقيدات التقنية' },
    ],
    features: [
      { en: 'Domain setup', ar: 'إعداد الدومين' },
      { en: 'Hosting configuration', ar: 'تهيئة الاستضافة' },
      { en: 'Deployment checklist', ar: 'قائمة فحص النشر' },
    ],
  },
  {
    slug: 'maintenance-support',
    icon: 'MS',
    image: '/assets/images/services/support.jpg',
    title: { en: 'Maintenance & Support', ar: 'الصيانة والدعم' },
    shortDescription: {
      en: 'Ongoing support, updates, fixes, and improvements after launch.',
      ar: 'دعم مستمر وتحديثات وإصلاحات وتحسينات بعد الإطلاق.',
    },
    description: {
      en: 'Monthly support plans to keep your digital presence healthy, current, and reliable.',
      ar: 'خطط دعم شهرية للحفاظ على حضورك الرقمي محدثًا وموثوقًا.',
    },
    benefits: [
      { en: 'Peace of mind', ar: 'راحة بال' },
      { en: 'Continuous improvements', ar: 'تحسينات مستمرة' },
      { en: 'Fast issue handling', ar: 'معالجة سريعة للمشكلات' },
    ],
    features: [
      { en: 'Content updates', ar: 'تحديثات محتوى' },
      { en: 'Bug fixes', ar: 'إصلاح أخطاء' },
      { en: 'Performance checks', ar: 'فحص الأداء' },
    ],
  },
  {
    slug: 'seo-basics',
    icon: 'SEO',
    image: '/assets/images/services/seo.jpg',
    title: { en: 'SEO Basics', ar: 'أساسيات تحسين محركات البحث' },
    shortDescription: {
      en: 'Core SEO setup to make your website clearer for search engines and users.',
      ar: 'إعدادات SEO أساسية تجعل موقعك أوضح لمحركات البحث والمستخدمين.',
    },
    description: {
      en: 'Foundational SEO improvements for page structure, metadata, speed, and content clarity.',
      ar: 'تحسينات SEO تأسيسية لهيكل الصفحات والبيانات الوصفية والسرعة ووضوح المحتوى.',
    },
    benefits: [
      { en: 'Better discoverability', ar: 'قابلية ظهور أفضل' },
      { en: 'Cleaner page structure', ar: 'هيكل صفحات أنظف' },
      { en: 'Improved user trust', ar: 'ثقة أعلى للمستخدم' },
    ],
    features: [
      { en: 'Meta titles and descriptions', ar: 'عناوين ووصف الصفحات' },
      { en: 'Semantic sections', ar: 'أقسام منظمة دلاليًا' },
      { en: 'Speed-aware assets', ar: 'أصول تراعي سرعة التحميل' },
    ],
  },
];
