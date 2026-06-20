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
            <span>Digital Growth</span>
            <strong>Web • CRM • Commerce</strong>
          </div>
          <div class="metric-card"><strong>9+</strong><span>{{ lang.t('services') }}</span></div>
          <div class="metric-card"><strong>6</strong><span>{{ lang.t('portfolio') }}</span></div>
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
      <app-section-title [eyebrow]="lang.t('portfolio')" [title]="lang.t('portfolioPreview')" [text]="lang.current() === 'en' ? 'Dummy projects prepared for launch, ready to replace with real Laravel API data later.' : 'نماذج مؤقتة جاهزة للاستبدال لاحقًا ببيانات Laravel API.'" />
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
  readonly featuredProjects = projects.slice(0, 3);
  readonly industriesList = industries;

  get whyText(): string {
    return this.lang.current() === 'en'
      ? 'We combine premium interface design, practical business thinking, and clean Angular architecture so the website can grow into a full digital platform.'
      : 'نجمع بين التصميم الاحترافي وفهم الأعمال وبنية Angular نظيفة حتى يستطيع الموقع النمو لاحقًا إلى منصة رقمية كاملة.';
  }

  get whyItems() {
    return this.lang.current() === 'en'
      ? [
          { number: '01', title: 'Business-first UX', text: 'Every page is structured around trust, clarity, and conversion.' },
          { number: '02', title: 'Scalable code', text: 'Reusable components and local data files are ready for API integration.' },
          { number: '03', title: 'Bilingual by design', text: 'Arabic and English layouts adapt correctly with RTL and LTR direction.' },
        ]
      : [
          { number: '01', title: 'تجربة تخدم الأعمال', text: 'كل صفحة مبنية حول الثقة والوضوح والتحويل.' },
          { number: '02', title: 'كود قابل للتوسع', text: 'مكونات قابلة لإعادة الاستخدام وملفات بيانات جاهزة للربط.' },
          { number: '03', title: 'ثنائي اللغة من الأساس', text: 'تخطيط عربي وإنجليزي يعمل بشكل صحيح RTL وLTR.' },
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
