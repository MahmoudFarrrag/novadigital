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
        <p>{{ lang.current() === 'en' ? 'Transparent starting ranges. Final pricing depends on scope, content, integrations, and timeline.' : 'أسعار مبدئية واضحة. السعر النهائي يعتمد على النطاق والمحتوى والربط والمدة.' }}</p>
      </div>
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
}
