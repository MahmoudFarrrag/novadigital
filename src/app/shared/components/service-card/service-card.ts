import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceItem } from '../../../core/models/site.models';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-service-card',
  imports: [RouterLink],
  template: `
    <article class="glass-card service-card reveal">
      <div class="card-media service-media">
        <img [src]="service().image" [alt]="lang.text(service().title)" loading="lazy" (error)="hideImage($event)" />
        <span>{{ service().icon }}</span>
      </div>
      <div class="card-body">
        <h3>{{ lang.text(service().title) }}</h3>
        <p>{{ lang.text(service().shortDescription) }}</p>
        <a class="text-link" [routerLink]="['/services', service().slug]">{{ lang.t('learnMore') }}</a>
      </div>
    </article>
  `,
})
export class ServiceCard {
  readonly service = input.required<ServiceItem>();
  readonly lang = inject(LanguageService);

  hideImage(event: Event): void {
    (event.target as HTMLImageElement).style.display = 'none';
  }
}
