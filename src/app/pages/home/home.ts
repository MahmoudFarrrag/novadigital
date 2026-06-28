import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { services } from '../../data/services.data';
import { projects } from '../../data/projects.data';
import { industries } from '../../data/industries.data';
import { LanguageService } from '../../core/services/language.service';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { ServiceCard } from '../../shared/components/service-card/service-card';
import { ProjectCard } from '../../shared/components/project-card/project-card';
import { CtaSection } from '../../shared/components/cta-section/cta-section';

@Component({
  selector: 'app-home',
  imports: [RouterLink, SectionTitle, ServiceCard, ProjectCard, CtaSection],
  template: `
    <section class="hero">
      <div class="container hero-grid">
        <div class="hero-copy reveal">
          <img class="hero-logo" src="/assets/images/logo/nova.PNG" alt="Nova Digital logo" (error)="hideImage($event)" />
          <span class="eyebrow">Nova Digital</span>
          <h1>Nova Digital</h1>
          <h2>{{ lang.t('tagline') }}</h2>
          <p>{{ lang.t('arabicSlogan') }}</p>
          <div class="hero-actions">
            <a class="btn btn-primary" routerLink="/contact">{{ lang.t('startProject') }}</a>
            <a class="btn btn-secondary" routerLink="/services">{{ lang.t('viewServices') }}</a>
          </div>
        </div>    
        <div class="hero-panel reveal">
          <div class="orbit-card main-stat">
            <span>{{ lang.current() === 'en' ? 'Digital Growth' : 'نمو رقمي' }}</span>
<strong>{{ lang.current() === 'en' ? 'Web • Dashboards • Apps' : 'مواقع • لوحات تحكم • تطبيقات' }}</strong>
          </div>
          <div class="metric-card"><strong>6</strong><span>{{ lang.t('services') }}</span></div>
          <div class="metric-card"><strong>17</strong><span>{{ lang.t('portfolio') }}</span></div>
          <div class="metric-card accent"><strong>24/7</strong><span>{{ lang.t('contact') }}</span></div>
        </div>
      </div>
    </section>

    <section class="section container">
      <app-section-title [eyebrow]="lang.t('services')" [title]="lang.t('servicesPreview')" [text]="lang.t('servicesPreviewText')" />
      <div class="cards-grid three">
        @for (service of featuredServices; track service.slug) {
          <app-service-card [service]="service" />
        }
      </div>
    </section>

    <section class="section muted-section">
      <div class="container split-grid">
        <div>
          <span class="eyebrow">{{ lang.t('whyNova') }}</span>
          <h2>{{ lang.t('whyNova') }}</h2>
          <p>{{ whyText }}</p>
        </div>
        <div class="feature-list">
          @for (item of whyItems; track item.title) {
            <div class="feature-row reveal">
              <span>{{ item.number }}</span>
              <div>
                <h3>{{ item.title }}</h3>
                <p>{{ item.text }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="section container">
      <app-section-title [eyebrow]="lang.t('portfolio')" [title]="lang.t('portfolioPreview')" [text]="lang.current() === 'en' ? 'A selection of websites, apps, stores, and platforms delivered across business, education, commerce, and service sectors.' : 'مجموعة من مواقع وتطبيقات ومتاجر ومنصات رقمية لقطاعات الأعمال والتعليم والتجارة والخدمات.'" />
      <div class="cards-grid three">
        @for (project of featuredProjects; track project.slug) {
          <app-project-card [project]="project" />
        }
      </div>
    </section>

    <section class="section container">
      <app-section-title [eyebrow]="lang.t('industries')" [title]="lang.t('industries')" />
      <div class="industry-grid">
        @for (industry of industriesList; track lang.text(industry.name)) {
          <div class="industry-card reveal"><span>{{ industry.icon }}</span>{{ lang.text(industry.name) }}</div>
        }
      </div>
    </section>

    <section class="section container">
      <app-section-title [eyebrow]="lang.t('workProcess')" [title]="lang.t('workProcess')" />
      <div class="process-grid">
        @for (step of process; track step.title) {
          <div class="process-step reveal">
            <span>{{ step.no }}</span>
            <h3>{{ step.title }}</h3>
            <p>{{ step.text }}</p>
          </div>
        }
      </div>
    </section>

    <section class="section container">
      <app-cta-section />
    </section>
  `,
})
export class Home {
  readonly lang = inject(LanguageService);
  readonly featuredServices = services.slice(0, 6);
  readonly featuredProjects = projects;
  readonly industriesList = industries;

  get whyText(): string {
    return this.lang.current() === 'en'
      ? 'Nova Digital builds practical digital solutions that look modern, load fast, and support real business goals without unnecessary complexity.'
      : 'Nova Digital تبني حلولاً رقمية عملية بتصميم عصري وأداء سريع وتركيز واضح على أهداف العمل بدون تعقيد غير ضروري.';
  }

  get whyItems() {
    return this.lang.current() === 'en'
      ? [
          { number: '01', title: 'Responsive on all devices', text: 'Websites and systems are designed to work cleanly on mobile, tablet, and desktop.' },
          { number: '02', title: 'Modern UI with smooth motion', text: 'Interfaces feel polished, friendly, and current without distracting from the message.' },
          { number: '03', title: 'Arabic-first, English-ready', text: 'Content and layouts respect RTL from the start and remain ready for bilingual growth.' },
          { number: '04', title: 'Fast and clean performance', text: 'Pages are structured for quick loading, readable code, and a smoother user experience.' },
          { number: '05', title: 'Business-focused solutions', text: 'Every section is built around real goals: trust, contact, sales, management, or growth.' },
          { number: '06', title: 'Clear user experience', text: 'Visitors can understand your offer quickly and know exactly what action to take next.' },
          { number: '07', title: 'Scalable code structure', text: 'Reusable components and organized data make future pages, modules, and APIs easier to add.' },
          { number: '08', title: 'Affordable value', text: 'Pricing stays practical for startups and small to medium businesses while protecting quality.' },
          { number: '09', title: 'Support after delivery', text: 'Nova Digital can help with updates, fixes, hosting, maintenance, and future improvements.' },
          { number: '10', title: 'Custom, not generic', text: 'Solutions are shaped around your brand, workflow, and audience instead of generic templates.' },
        ]
      : [
          { number: '01', title: 'تصميم متجاوب لكل الأجهزة', text: 'المواقع والأنظمة تعمل بوضوح على الجوال والتابلت وسطح المكتب.' },
          { number: '02', title: 'واجهة عصرية وحركات سلسة', text: 'تجربة بصرية حديثة ومريحة بدون تشتيت عن الرسالة الأساسية.' },
          { number: '03', title: 'عربي أولاً وجاهز للإنجليزية', text: 'المحتوى والتخطيط يدعمان RTL من البداية مع جاهزية للنمو ثنائي اللغة.' },
          { number: '04', title: 'تحميل سريع وأداء نظيف', text: 'بنية صفحات تساعد على السرعة ووضوح الكود وتجربة استخدام أفضل.' },
          { number: '05', title: 'حلول تخدم أهداف العمل', text: 'كل قسم يخدم هدفاً واضحاً مثل الثقة أو التواصل أو البيع أو الإدارة أو النمو.' },
          { number: '06', title: 'تجربة مستخدم واضحة', text: 'الزائر يفهم عرضك بسرعة ويعرف ما الخطوة التالية التي يجب اتخاذها.' },
          { number: '07', title: 'بنية كود قابلة للتوسع', text: 'مكونات منظمة وبيانات واضحة تسهل إضافة صفحات ووحدات وربط APIs لاحقاً.' },
          { number: '08', title: 'قيمة مناسبة مقابل التكلفة', text: 'أسعار عملية للشركات الناشئة والصغيرة والمتوسطة مع الحفاظ على الجودة.' },
          { number: '09', title: 'دعم وصيانة بعد التسليم', text: 'نساعد في التحديثات والإصلاحات والاستضافة والصيانة والتحسينات المستقبلية.' },
          { number: '10', title: 'حلول مخصصة وليست قوالب عامة', text: 'كل حل يتم تشكيله حول علامتك ومسار عملك وجمهورك، وليس كقالب مكرر.' },
        ];
  }

  get process() {
    return this.lang.current() === 'en'
      ? [
          { no: '01', title: 'Discover', text: 'We understand your goals, audience, and required features.' },
          { no: '02', title: 'Design', text: 'We shape a premium interface and clear content structure.' },
          { no: '03', title: 'Build', text: 'We develop responsive, reusable Angular components.' },
          { no: '04', title: 'Launch', text: 'We test, refine, and prepare the project for hosting and growth.' },
        ]
      : [
          { no: '01', title: 'الفهم', text: 'نفهم أهدافك وجمهورك والخصائص المطلوبة.' },
          { no: '02', title: 'التصميم', text: 'نصمم واجهة احترافية وهيكل محتوى واضح.' },
          { no: '03', title: 'التطوير', text: 'نطور مكونات Angular متجاوبة وقابلة لإعادة الاستخدام.' },
          { no: '04', title: 'الإطلاق', text: 'نختبر ونحسن ونجهز المشروع للاستضافة والنمو.' },
        ];
  }

  hideImage(event: Event): void {
    (event.target as HTMLImageElement).style.display = 'none';
  }
}
