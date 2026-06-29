import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <a class="brand footer-brand" routerLink="/">
            <img src="assets/images/logo/nova.png" alt="Nova Digital logo" (error)="hideImage($event)" />
            <span>Nova Digital</span>
          </a>
          <p>{{ lang.t('arabicSlogan') }}</p>
        </div>
        <div>
          <h3>{{ lang.t('services') }}</h3>
          <a routerLink="/services">{{ lang.t('allServices') }}</a>
          <a routerLink="/pricing">{{ lang.t('pricing') }}</a>
          <a routerLink="/portfolio">{{ lang.t('portfolio') }}</a>
        </div>
        <div>
          <h3>{{ lang.t('contact') }}</h3>
          <a href="https://wa.me/201280124390" target="_blank" rel="noopener">01280124390</a>
          <a href="tel:01062196214">01062196214</a>
          <a href="mailto:novadigital40@gmail.com">novadigital40&#64;gmail.com</a>
        </div>
      </div>
      <div class="container footer-bottom">
        <span>© 2026 Nova Digital</span>
        <span>Designed & Developed by Mahmoud Farrag</span>
        <span>{{ lang.t('tagline') }}</span>
      </div>
    </footer>
  `,
})
export class Footer {
  readonly lang = inject(LanguageService);

  hideImage(event: Event): void {
    (event.target as HTMLImageElement).style.display = 'none';
  }
}
