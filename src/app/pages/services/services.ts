import { Component, inject } from '@angular/core';
import { services } from '../../data/services.data';
import { LanguageService } from '../../core/services/language.service';
import { ServiceCard } from '../../shared/components/service-card/service-card';

@Component({
  selector: 'app-services',
  imports: [ServiceCard],
  template: `
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow">{{ lang.t('services') }}</span>
        <h1>{{ lang.t('allServices') }}</h1>
        <p>{{ lang.t('servicesPreviewText') }}</p>
      </div>
    </section>
    <section class="section container">
      <div class="cards-grid three">
        @for (service of servicesList; track service.slug) {
          <app-service-card [service]="service" />
        }
      </div>
    </section>
  `,
})
export class Services {
  readonly lang = inject(LanguageService);
  readonly servicesList = services;
}
