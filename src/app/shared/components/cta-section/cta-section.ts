import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-cta-section',
  imports: [RouterLink],
  template: `
    <section class="cta-band reveal">
      <div>
        <span class="eyebrow">Nova Digital</span>
        <h2>{{ lang.t('ready') }}</h2>
        <p>{{ lang.t('readyText') }}</p>
      </div>
      <div class="cta-actions">
        <a class="btn btn-primary" routerLink="/contact">{{ lang.t('startProject') }}</a>
        <a class="btn btn-secondary" href="https://wa.me/201280124390" target="_blank" rel="noopener">{{ lang.t('whatsapp') }}</a>
      </div>
    </section>
  `,
})
export class CtaSection {
  readonly lang = inject(LanguageService);
}
