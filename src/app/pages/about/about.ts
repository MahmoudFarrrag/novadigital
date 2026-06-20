import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { CtaSection } from '../../shared/components/cta-section/cta-section';

@Component({
  selector: 'app-about',
  imports: [SectionTitle, CtaSection],
  template: `
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow">{{ lang.t('about') }}</span>
        <h1>{{ lang.t('aboutNova') }}</h1>
        <p>{{ intro }}</p>
      </div>
    </section>
    <section class="section container">
      <div class="split-grid">
        @for (block of blocks; track block.title) {
          <article class="glass-card content-card reveal">
            <span class="pill-label">{{ block.kicker }}</span>
            <h2>{{ block.title }}</h2>
            <p>{{ block.text }}</p>
          </article>
        }
      </div>
    </section>
    <section class="section container">
      <app-section-title [eyebrow]="lang.t('values')" [title]="lang.t('values')" />
      <div class="cards-grid four">
        @for (value of values; track value.title) {
          <article class="glass-card value-card reveal">
            <h3>{{ value.title }}</h3>
            <p>{{ value.text }}</p>
          </article>
        }
      </div>
    </section>
    <section class="section container">
      <app-cta-section />
    </section>
  `,
})
export class About {
  readonly lang = inject(LanguageService);

  get intro(): string {
    return this.lang.current() === 'en'
      ? 'Nova Digital is a digital solutions partner helping businesses build elegant websites, operational dashboards, online stores, and customer systems that support real growth.'
      : 'Nova Digital شريك حلول رقمية يساعد الشركات على بناء مواقع أنيقة ولوحات تشغيل ومتاجر وأنظمة عملاء تدعم النمو الحقيقي.';
  }

  get blocks() {
    return this.lang.current() === 'en'
      ? [
          { kicker: this.lang.t('vision'), title: 'A premium digital partner for growing businesses', text: 'Our vision is to make high-quality digital systems accessible to companies that want stronger sales, better management, and a modern market presence.' },
          { kicker: this.lang.t('mission'), title: 'Build useful digital products with clarity', text: 'We design and develop clean, responsive, bilingual web experiences that can connect later to Laravel APIs and business workflows.' },
          { kicker: this.lang.t('different'), title: 'Design, code, and business thinking together', text: 'We do not treat a website as decoration. We shape it as a working business asset with structure, speed, trust, and future readiness.' },
        ]
      : [
          { kicker: this.lang.t('vision'), title: 'شريك رقمي احترافي للشركات النامية', text: 'رؤيتنا أن نجعل الأنظمة الرقمية عالية الجودة متاحة للشركات التي تريد مبيعات أقوى وإدارة أفضل وحضورًا عصريًا.' },
          { kicker: this.lang.t('mission'), title: 'بناء منتجات رقمية مفيدة بوضوح', text: 'نصمم ونطور تجارب ويب متجاوبة وثنائية اللغة وقابلة للربط لاحقًا مع Laravel API وتدفقات الأعمال.' },
          { kicker: this.lang.t('different'), title: 'التصميم والكود وفهم الأعمال معًا', text: 'لا نتعامل مع الموقع كديكور فقط، بل كأصل عملي يخدم الثقة والسرعة والاستعداد للمستقبل.' },
        ];
  }

  get values() {
    return this.lang.current() === 'en'
      ? [
          { title: 'Clarity', text: 'Interfaces and content that are easy to understand.' },
          { title: 'Quality', text: 'Polished details, reliable layouts, and clean code.' },
          { title: 'Growth', text: 'Every section supports leads, trust, or management.' },
          { title: 'Partnership', text: 'We build with future updates and support in mind.' },
        ]
      : [
          { title: 'الوضوح', text: 'واجهات ومحتوى يسهل فهمه.' },
          { title: 'الجودة', text: 'تفاصيل مصقولة وتخطيطات موثوقة وكود نظيف.' },
          { title: 'النمو', text: 'كل قسم يدعم العملاء أو الثقة أو الإدارة.' },
          { title: 'الشراكة', text: 'نبني مع مراعاة التطوير والدعم لاحقًا.' },
        ];
  }
}
