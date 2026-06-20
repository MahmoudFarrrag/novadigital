import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { services } from '../../data/services.data';
import { LanguageService } from '../../core/services/language.service';
import { CtaSection } from '../../shared/components/cta-section/cta-section';

@Component({
  selector: 'app-service-details',
  imports: [RouterLink, CtaSection],
  template: `
    @if (service(); as item) {
      <section class="page-hero detail-hero">
        <div class="container detail-grid">
          <div>
            <span class="eyebrow">{{ lang.t('serviceDetails') }}</span>
            <h1>{{ lang.text(item.title) }}</h1>
            <p>{{ lang.text(item.description) }}</p>
            <a class="btn btn-primary" routerLink="/contact">{{ lang.t('startProject') }}</a>
          </div>
          <div class="detail-media">
            <img [src]="item.image" [alt]="lang.text(item.title)" (error)="hideImage($event)" />
          </div>
        </div>
      </section>
      <section class="section container detail-lists">
        <article class="glass-card content-card">
          <h2>{{ lang.t('benefits') }}</h2>
          <ul class="check-list">
            @for (benefit of item.benefits; track lang.text(benefit)) {
              <li>{{ lang.text(benefit) }}</li>
            }
          </ul>
        </article>
        <article class="glass-card content-card">
          <h2>{{ lang.t('features') }}</h2>
          <ul class="check-list">
            @for (feature of item.features; track lang.text(feature)) {
              <li>{{ lang.text(feature) }}</li>
            }
          </ul>
        </article>
      </section>
      <section class="section container"><app-cta-section /></section>
    } @else {
      <section class="page-hero"><div class="container"><h1>{{ lang.t('notFound') }}</h1></div></section>
    }
  `,
})
export class ServiceDetails {
  private readonly route = inject(ActivatedRoute);
  readonly lang = inject(LanguageService);
  readonly service = computed(() => services.find((item) => item.slug === this.route.snapshot.paramMap.get('slug')));

  hideImage(event: Event): void {
    (event.target as HTMLImageElement).style.display = 'none';
  }
}
