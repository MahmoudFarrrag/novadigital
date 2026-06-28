import { Component, inject } from '@angular/core';
import { pricingPlans } from '../../data/pricing.data';
import { LanguageService } from '../../core/services/language.service';
import { PricingCard } from '../../shared/components/pricing-card/pricing-card';
import { CtaSection } from '../../shared/components/cta-section/cta-section';

@Component({
  selector: 'app-pricing',
  imports: [PricingCard, CtaSection],
  template: `
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow">{{ lang.t('pricing') }}</span>
        <h1>{{ lang.t('pricing') }}</h1>
        <p>{{ heroText }}</p>
      </div>
    </section>
    <section class="section container pricing-note-grid">
      @for (note of pricingNotes; track note.title) {
        <article class="glass-card content-card">
          <h2>{{ note.title }}</h2>
          <p>{{ note.text }}</p>
        </article>
      }
    </section>
    <section class="section container">
      <div class="cards-grid pricing-grid">
        @for (plan of plans; track plan.slug) {
          <app-pricing-card [plan]="plan" />
        }
      </div>
    </section>
    <section class="section container"><app-cta-section /></section>
  `,
})
export class Pricing {
  readonly lang = inject(LanguageService);
  readonly plans = pricingPlans;

  get heroText(): string {
    return this.lang.current() === 'en'
      ? 'Flexible starting prices based on your real needs. Nova Digital offers practical, value-based packages for startups, small businesses, and growing companies.'
      : 'أسعار مرنة تبدأ من احتياجاتك الفعلية. تقدم Nova Digital حلولاً عملية بتكلفة مناسبة للشركات الناشئة والأعمال الصغيرة والمتوسطة.';
  }

  get pricingNotes() {
    return this.lang.current() === 'en'
      ? [
          {
            title: 'Starting prices, not fixed limits',
            text: 'Each package shows a starting range. The final price depends on the number of pages, features, design depth, integrations, content, and required dashboard modules.',
          },
          {
            title: 'Affordable without lowering quality',
            text: 'We keep pricing practical and value-based, so the solution fits your current stage while staying professional, scalable, and ready for future growth.',
          },
        ]
      : [
          {
            title: 'أسعار تبدأ من احتياجاتك الفعلية',
            text: 'كل باقة تعرض سعراً مبدئياً. السعر النهائي يعتمد على عدد الصفحات، الخصائص، التصميم، الربط، المحتوى، ولوحة التحكم المطلوبة.',
          },
          {
            title: 'تكلفة مناسبة بدون تقليل الجودة',
            text: 'نقدم حلولاً عملية بتكلفة مناسبة للشركات الناشئة والأعمال الصغيرة والمتوسطة، مع الحفاظ على جودة التصميم والبنية وقابلية التوسع.',
          },
        ];
  }
}
