import { ServiceItem } from '../core/models/site.models';

export const services: ServiceItem[] = [
  {
    slug: 'website-development',
    icon: 'WEB',
    image: '/assets/images/services/website-development.png',
    title: { en: 'Website Development', ar: 'تطوير المواقع' },
    shortDescription: {
      en: 'Premium, responsive websites that present your brand clearly and turn visitors into real enquiries.',
      ar: 'مواقع احترافية ومتجاوبة تعرض علامتك بوضوح وتحول الزوار إلى عملاء محتملين.',
    },
    description: {
      en: 'A professional website is no longer optional. It is the first place customers check before they trust a business, request a service, or make a purchase decision.',
      ar: 'الموقع الاحترافي لم يعد رفاهية. هو أول مكان يراجعه العميل قبل أن يثق في نشاطك أو يطلب خدمتك أو يتخذ قرار الشراء.',
    },
    whyMatters: {
      en: 'Your website works as your digital branch: it explains what you do, builds trust, answers customer questions, and gives visitors a simple path to contact you.',
      ar: 'موقعك يعمل كفرع رقمي لنشاطك: يشرح ما تقدمه، يبني الثقة، يجيب عن أسئلة العملاء، ويوفر لهم طريقاً سهلاً للتواصل معك.',
    },
    whoNeeds: [
      { en: 'Companies that need a stronger digital presence', ar: 'الشركات التي تحتاج إلى حضور رقمي أقوى' },
      { en: 'Clinics, offices, restaurants, and service providers', ar: 'العيادات والمكاتب والمطاعم ومقدمو الخدمات' },
      { en: 'Startups launching a new brand or offer', ar: 'الشركات الناشئة التي تطلق علامة أو خدمة جديدة' },
    ],
    delivers: [
      { en: 'Responsive design for mobile, tablet, and desktop', ar: 'تصميم متجاوب للجوال والتابلت وسطح المكتب' },
      { en: 'Fast loading, clean performance, and SEO-ready structure', ar: 'تحميل سريع وأداء نظيف وبنية جاهزة لمحركات البحث' },
      { en: 'Clear brand presentation with WhatsApp and contact actions', ar: 'عرض واضح للعلامة مع أزرار واتساب وتواصل مباشرة' },
      { en: 'Conversion-focused layouts that guide visitors to take action', ar: 'تخطيط يركز على التحويل ويقود الزائر لاتخاذ خطوة واضحة' },
    ],
    benefits: [
      { en: 'Builds credibility before the first conversation', ar: 'يبني الثقة قبل أول تواصل مع العميل' },
      { en: 'Makes services, offers, and contact options easy to understand', ar: 'يجعل الخدمات والعروض وطرق التواصل واضحة وسهلة' },
      { en: 'Supports marketing campaigns, SEO, and social media traffic', ar: 'يدعم الحملات التسويقية وSEO وزيارات السوشيال ميديا' },
    ],
    features: [
      { en: 'Arabic-first and English-ready content structure', ar: 'هيكل محتوى عربي أولاً وجاهز للإنجليزية' },
      { en: 'Modern UI, smooth sections, and practical animations', ar: 'واجهة عصرية وأقسام سلسة وحركات عملية' },
      { en: 'Contact forms, phone actions, WhatsApp links, and map sections', ar: 'نماذج تواصل وأزرار اتصال وروابط واتساب وأقسام خريطة' },
      { en: 'Scalable page structure for future services or landing pages', ar: 'بنية قابلة للتوسع لإضافة خدمات أو صفحات هبوط لاحقاً' },
    ],
    ctaTitle: { en: 'Ready for a website that looks professional and sells clearly?', ar: 'جاهز لموقع احترافي يعرض عملك ويبيع بوضوح؟' },
    ctaText: {
      en: 'Tell us about your business and we will shape a website that fits your audience, budget, and growth plans.',
      ar: 'أخبرنا عن نشاطك وسنصمم موقعاً يناسب جمهورك وميزانيتك وخطط نموك.',
    },
  },
  {
    slug: 'dashboards-admin-panels',
    icon: 'DASH',
    image: '/assets/images/services/dashboard.png',
    title: { en: 'Dashboards & Admin Panels', ar: 'لوحات التحكم والإدارة' },
    shortDescription: {
      en: 'Custom dashboards that make daily operations clearer, faster, and easier to manage.',
      ar: 'لوحات تحكم مخصصة تجعل الإدارة اليومية أوضح وأسرع وأسهل في المتابعة.',
    },
    description: {
      en: 'Dashboards give teams one controlled place to manage users, content, requests, reports, orders, and business operations without scattered manual work.',
      ar: 'لوحات التحكم تمنح فريقك مكاناً واحداً لإدارة المستخدمين والمحتوى والطلبات والتقارير والعمليات بدلاً من العمل اليدوي المتفرق.',
    },
    whyMatters: {
      en: 'When business data is organized in one panel, owners and teams can make faster decisions, reduce mistakes, and track performance with confidence.',
      ar: 'عندما تكون بيانات العمل منظمة في لوحة واحدة، يستطيع أصحاب الأعمال والفرق اتخاذ قرارات أسرع وتقليل الأخطاء ومتابعة الأداء بثقة.',
    },
    whoNeeds: [
      { en: 'Businesses with orders, users, content, branches, or reports', ar: 'الأعمال التي لديها طلبات أو مستخدمون أو محتوى أو فروع أو تقارير' },
      { en: 'Teams that need permissions and role-based access', ar: 'الفرق التي تحتاج إلى صلاحيات وأدوار للمستخدمين' },
      { en: 'Companies replacing Excel sheets and manual follow-up', ar: 'الشركات التي تريد استبدال ملفات Excel والمتابعة اليدوية' },
    ],
    delivers: [
      { en: 'Admin panels designed around your exact workflow', ar: 'لوحات إدارة مصممة حسب مسار عملك الفعلي' },
      { en: 'User roles, permissions, tables, filters, and reports', ar: 'أدوار وصلاحيات وجداول وفلاتر وتقارير' },
      { en: 'Clean modules ready for API integration and future expansion', ar: 'وحدات منظمة جاهزة للربط البرمجي والتوسع لاحقاً' },
    ],
    benefits: [
      { en: 'Better visibility over daily work', ar: 'رؤية أوضح للعمل اليومي' },
      { en: 'Less manual effort and fewer repeated mistakes', ar: 'جهد يدوي أقل وأخطاء متكررة أقل' },
      { en: 'Faster approvals, updates, and operational decisions', ar: 'اعتمادات وتحديثات وقرارات تشغيل أسرع' },
    ],
    features: [
      { en: 'Secure login and role-based access', ar: 'تسجيل دخول آمن وصلاحيات حسب الدور' },
      { en: 'Data tables, search, filters, status actions, and details pages', ar: 'جداول بيانات وبحث وفلاتر وحالات وصفحات تفاصيل' },
      { en: 'Charts, summaries, export-ready structures, and API-ready modules', ar: 'رسوم وملخصات وبنية جاهزة للتصدير والربط البرمجي' },
    ],
    ctaTitle: { en: 'Need a dashboard that matches the way your team works?', ar: 'تحتاج لوحة تحكم تناسب طريقة عمل فريقك؟' },
    ctaText: {
      en: 'We can turn your workflow into a clear system that your team can use every day.',
      ar: 'نستطيع تحويل مسار عملك إلى نظام واضح يستخدمه فريقك يومياً.',
    },
  },
  {
    slug: 'mobile-applications',
    icon: 'APP',
    image: '/assets/images/services/mobile-app.png',
    title: { en: 'Mobile Applications', ar: 'تطبيقات الجوال' },
    shortDescription: {
      en: 'Practical mobile app experiences for customers, staff, bookings, orders, and operations.',
      ar: 'تطبيقات جوال عملية للعملاء والموظفين والحجوزات والطلبات والعمليات.',
    },
    description: {
      en: 'Mobile apps keep your service close to customers and help teams complete key actions from anywhere.',
      ar: 'تطبيقات الجوال تجعل خدمتك أقرب إلى العملاء وتساعد الفرق على تنفيذ الإجراءات المهمة من أي مكان.',
    },
    whyMatters: {
      en: 'A well-designed app improves repeat engagement, simplifies service access, and creates a more modern relationship between the business and its users.',
      ar: 'التطبيق المصمم جيداً يزيد التفاعل المتكرر، يسهل الوصول للخدمة، ويخلق علاقة أكثر عصرية بين النشاط والمستخدمين.',
    },
    whoNeeds: [
      { en: 'Businesses with repeated customer actions or bookings', ar: 'الأعمال التي لديها إجراءات متكررة أو حجوزات من العملاء' },
      { en: 'Stores and services that need mobile ordering or tracking', ar: 'المتاجر والخدمات التي تحتاج إلى طلبات أو متابعة عبر الجوال' },
      { en: 'Internal teams that need field or staff workflows', ar: 'الفرق الداخلية التي تحتاج إلى مسارات عمل للموظفين أو العمل الميداني' },
    ],
    delivers: [
      { en: 'Clear app screens and user journeys', ar: 'شاشات تطبيق واضحة ومسارات استخدام سهلة' },
      { en: 'Customer accounts, forms, requests, and notification-ready flows', ar: 'حسابات عملاء ونماذج وطلبات ومسارات جاهزة للتنبيهات' },
      { en: 'API planning so the app connects cleanly with your system', ar: 'تخطيط للربط البرمجي حتى يتصل التطبيق بنظامك بسلاسة' },
    ],
    benefits: [
      { en: 'More convenient access for customers', ar: 'وصول أسهل وأكثر راحة للعملاء' },
      { en: 'A stronger and more modern brand perception', ar: 'صورة أقوى وأكثر عصرية للعلامة' },
      { en: 'Better service continuity through mobile workflows', ar: 'استمرارية أفضل للخدمة عبر مسارات الجوال' },
    ],
    features: [
      { en: 'Login, profiles, requests, bookings, and order flows', ar: 'تسجيل دخول وملفات شخصية وطلبات وحجوزات ومسارات شراء' },
      { en: 'Reusable design system for future screens', ar: 'نظام تصميم قابل لإعادة الاستخدام للشاشات القادمة' },
      { en: 'Backend and dashboard integration planning', ar: 'تخطيط للربط مع الخلفية ولوحة التحكم' },
    ],
    ctaTitle: { en: 'Turn your service into a smooth mobile experience.', ar: 'حوّل خدمتك إلى تجربة جوال سلسة.' },
    ctaText: {
      en: 'We define the key flows first, then design and build an app that supports real business use.',
      ar: 'نحدد المسارات الأساسية أولاً، ثم نصمم ونطور تطبيقاً يخدم الاستخدام الفعلي للعمل.',
    },
  },
  {
    slug: 'e-commerce',
    icon: 'SHOP',
    image: '/assets/images/services/ecommerce.png',
    title: { en: 'E-commerce Stores', ar: 'المتاجر الإلكترونية' },
    shortDescription: {
      en: 'Online stores built for product discovery, orders, offers, payments, and growth.',
      ar: 'متاجر إلكترونية لعرض المنتجات وإدارة الطلبات والعروض والدفع والنمو.',
    },
    description: {
      en: 'A strong e-commerce store makes products easy to browse, builds buyer trust, and gives the business a clear path to sell online.',
      ar: 'المتجر الإلكتروني القوي يجعل تصفح المنتجات سهلاً، يبني ثقة المشتري، ويمنح النشاط مساراً واضحاً للبيع عبر الإنترنت.',
    },
    whyMatters: {
      en: 'Customers compare, ask, and buy online. A professional store helps you meet them with organized products, clear offers, and a smoother purchase experience.',
      ar: 'العملاء يقارنون ويسألون ويشترون عبر الإنترنت. المتجر الاحترافي يساعدك على مقابلتهم بمنتجات منظمة وعروض واضحة وتجربة شراء أسهل.',
    },
    whoNeeds: [
      { en: 'Retail brands and product-based businesses', ar: 'العلامات التجارية وأصحاب المنتجات' },
      { en: 'Stores moving from social selling to a controlled platform', ar: 'المتاجر التي تنتقل من البيع عبر السوشيال إلى منصة منظمة' },
      { en: 'Businesses that need offers, coupons, categories, and order management', ar: 'الأعمال التي تحتاج إلى عروض وكوبونات وتصنيفات وإدارة طلبات' },
    ],
    delivers: [
      { en: 'Product catalogs, categories, product details, cart, and checkout flows', ar: 'كتالوج منتجات وتصنيفات وتفاصيل وسلة ومسار شراء' },
      { en: 'Order-ready structure for admin panels and payment integrations', ar: 'بنية جاهزة للطلبات ولوحات الإدارة وربط الدفع' },
      { en: 'Conversion-focused product pages and trust-building content', ar: 'صفحات منتجات تركز على التحويل ومحتوى يعزز الثقة' },
    ],
    benefits: [
      { en: 'Sell online beyond branch hours', ar: 'بيع إلكتروني خارج ساعات العمل والفروع' },
      { en: 'Organize inventory, offers, and customer orders', ar: 'تنظيم المنتجات والعروض وطلبات العملاء' },
      { en: 'Increase trust with a professional shopping experience', ar: 'زيادة الثقة من خلال تجربة شراء احترافية' },
    ],
    features: [
      { en: 'Products, categories, filters, cart, checkout, and order status', ar: 'منتجات وتصنيفات وفلاتر وسلة ودفع وحالة الطلب' },
      { en: 'Coupons, offers, featured products, and related items', ar: 'كوبونات وعروض ومنتجات مميزة ومنتجات مرتبطة' },
      { en: 'Payment, shipping, and dashboard integration planning', ar: 'تخطيط لربط الدفع والشحن ولوحة التحكم' },
    ],
    ctaTitle: { en: 'Start selling through a store built for trust and growth.', ar: 'ابدأ البيع عبر متجر مبني للثقة والنمو.' },
    ctaText: {
      en: 'We help you shape the store structure, product flow, and management needs before development starts.',
      ar: 'نساعدك على تحديد هيكل المتجر ومسار المنتجات واحتياجات الإدارة قبل بدء التطوير.',
    },
  },
  {
    slug: 'system-integration',
    icon: 'API',
    image: '/assets/images/services/crm.png',
    title: { en: 'System Integration', ar: 'تكامل الأنظمة' },
    shortDescription: {
      en: 'Connect websites, apps, dashboards, CRMs, and third-party services into one cleaner workflow.',
      ar: 'ربط المواقع والتطبيقات ولوحات التحكم وأنظمة CRM والخدمات الخارجية في مسار عمل أوضح.',
    },
    description: {
      en: 'System integration removes duplicate work by allowing your tools to exchange data reliably and support one connected operation.',
      ar: 'تكامل الأنظمة يقلل تكرار العمل من خلال تمكين أدواتك من تبادل البيانات بثبات ودعم عملية تشغيل مترابطة.',
    },
    whyMatters: {
      en: 'Disconnected systems slow teams down. Integration helps data move between platforms, improves accuracy, and gives management a better view of the business.',
      ar: 'الأنظمة المنفصلة تبطئ الفرق. التكامل يساعد البيانات على الانتقال بين المنصات، يحسن الدقة، ويمنح الإدارة رؤية أفضل للعمل.',
    },
    whoNeeds: [
      { en: 'Businesses using multiple tools that do not talk to each other', ar: 'الأعمال التي تستخدم أدوات متعددة لا تتواصل مع بعضها' },
      { en: 'Teams that need automatic data flow between website, app, and dashboard', ar: 'الفرق التي تحتاج إلى تدفق بيانات تلقائي بين الموقع والتطبيق واللوحة' },
      { en: 'Companies preparing for automation, reporting, or CRM workflows', ar: 'الشركات التي تستعد للأتمتة أو التقارير أو مسارات CRM' },
    ],
    delivers: [
      { en: 'API connection planning and implementation', ar: 'تخطيط وتنفيذ ربط API' },
      { en: 'Clean data flow between modules and platforms', ar: 'تدفق بيانات منظم بين الوحدات والمنصات' },
      { en: 'Integration-ready dashboards and operational modules', ar: 'لوحات ووحدات تشغيل جاهزة للتكامل' },
    ],
    benefits: [
      { en: 'Less manual copying and fewer data mistakes', ar: 'نسخ يدوي أقل وأخطاء بيانات أقل' },
      { en: 'Faster customer and internal workflows', ar: 'مسارات أسرع للعملاء والفريق الداخلي' },
      { en: 'More reliable reports and connected decisions', ar: 'تقارير أوثق وقرارات مبنية على بيانات مترابطة' },
    ],
    features: [
      { en: 'API integrations, webhooks, and connected dashboards', ar: 'تكامل API وWebhooks ولوحات مترابطة' },
      { en: 'Data mapping, validation, and workflow automation', ar: 'تخطيط بيانات وتحقق وأتمتة مسارات' },
      { en: 'Integration structure that supports future systems', ar: 'بنية تكامل تدعم إضافة أنظمة مستقبلية' },
    ],
    ctaTitle: { en: 'Connect your tools into one practical workflow.', ar: 'اربط أدواتك في مسار عمل عملي واحد.' },
    ctaText: {
      en: 'Share your current systems and we will suggest the cleanest integration path.',
      ar: 'شاركنا الأنظمة التي تستخدمها وسنقترح لك أفضل مسار ربط عملي وواضح.',
    },
  },
  {
    slug: 'hosting-maintenance',
    icon: 'CARE',
    image: '/assets/images/services/hosting.png',
    title: { en: 'Hosting & Maintenance', ar: 'الاستضافة والصيانة' },
    shortDescription: {
      en: 'Reliable launch, hosting setup, SSL, updates, monitoring, fixes, and support after delivery.',
      ar: 'إطلاق موثوق وإعداد استضافة وSSL وتحديثات ومتابعة وإصلاحات ودعم بعد التسليم.',
    },
    description: {
      en: 'A digital product needs care after launch. Hosting and maintenance keep your website or system stable, secure, updated, and ready for users.',
      ar: 'المنتج الرقمي يحتاج إلى عناية بعد الإطلاق. الاستضافة والصيانة تحافظ على استقرار الموقع أو النظام وأمانه وتحديثه وجاهزيته للمستخدمين.',
    },
    whyMatters: {
      en: 'Without maintenance, small issues can affect performance, security, content accuracy, and customer trust. Ongoing support keeps your investment working.',
      ar: 'بدون صيانة، قد تؤثر المشكلات الصغيرة على الأداء والأمان ودقة المحتوى وثقة العملاء. الدعم المستمر يحافظ على قيمة استثمارك.',
    },
    whoNeeds: [
      { en: 'Businesses that want a smooth launch and stable hosting', ar: 'الأعمال التي تريد إطلاقاً سلساً واستضافة مستقرة' },
      { en: 'Websites that need updates, fixes, backups, and support', ar: 'المواقع التي تحتاج إلى تحديثات وإصلاحات ونسخ احتياطي ودعم' },
      { en: 'Companies without an internal technical team', ar: 'الشركات التي لا تمتلك فريقاً تقنياً داخلياً' },
    ],
    delivers: [
      { en: 'Hosting setup, domain connection, SSL, and deployment checklist', ar: 'إعداد الاستضافة وربط الدومين وSSL وقائمة فحص النشر' },
      { en: 'Bug fixes, content updates, performance checks, and technical support', ar: 'إصلاح أخطاء وتحديث محتوى وفحص أداء ودعم فني' },
      { en: 'Maintenance plans that match the size and activity of the project', ar: 'خطط صيانة تناسب حجم المشروع ونشاطه' },
    ],
    benefits: [
      { en: 'A safer and more stable website after launch', ar: 'موقع أكثر أماناً واستقراراً بعد الإطلاق' },
      { en: 'Less stress when edits or fixes are needed', ar: 'راحة أكبر عند الحاجة إلى تعديلات أو إصلاحات' },
      { en: 'Continuous improvement instead of one-time delivery only', ar: 'تحسين مستمر بدلاً من تسليم لمرة واحدة فقط' },
    ],
    features: [
      { en: 'Hosting configuration, SSL, deployment, and backups', ar: 'إعداد استضافة وSSL ونشر ونسخ احتياطية' },
      { en: 'Monitoring, updates, bug fixes, and content edits', ar: 'متابعة وتحديثات وإصلاح أخطاء وتعديلات محتوى' },
      { en: 'Support for future changes, pages, modules, and integrations', ar: 'دعم للتغييرات والصفحات والوحدات والربط المستقبلي' },
    ],
    ctaTitle: { en: 'Keep your website stable after launch.', ar: 'حافظ على استقرار موقعك بعد الإطلاق.' },
    ctaText: {
      en: 'Choose a support plan that fits your project size and how often you need updates.',
      ar: 'اختر خطة دعم تناسب حجم مشروعك وعدد التحديثات التي تحتاجها.',
    },
  },
];
