import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  template: `
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow">{{ lang.t('contact') }}</span>
        <h1>{{ lang.t('contactTitle') }}</h1>
        <p>{{ lang.t('contactText') }}</p>
      </div>
    </section>

    <section class="section container contact-grid">
      <div class="contact-panel">
        <a class="contact-method glass-card" href="https://wa.me/201280124390" target="_blank" rel="noopener">
          <span>WA</span>
          <div><strong>{{ lang.t('whatsapp') }}</strong><small>01280124390</small></div>
        </a>
        <a class="contact-method glass-card" href="tel:01062196214">
          <span>PH</span>
          <div><strong>{{ lang.t('callNow') }}</strong><small>01062196214</small></div>
        </a>
        <a class="contact-method glass-card" href="mailto:novadigital40@gmail.com">
          <span>EM</span>
          <div><strong>{{ lang.t('emailUs') }}</strong><small>novadigital40&#64;gmail.com</small></div>
        </a>
        <div class="glass-card map-box">{{ lang.t('mapPlaceholder') }}</div>
        <div class="social-row">
          <span>{{ lang.t('socialLinks') }}</span>
          <a href="#" aria-label="Facebook">FB</a>
          <a href="#" aria-label="Instagram">IG</a>
          <a href="#" aria-label="LinkedIn">IN</a>
        </div>
      </div>

      <form class="glass-card contact-form" (ngSubmit)="submitted = true">
        <label>
          {{ lang.t('name') }}
          <input name="name" [(ngModel)]="form.name" type="text" required />
        </label>
        <label>
          {{ lang.t('phone') }}
          <input name="phone" [(ngModel)]="form.phone" type="tel" required />
        </label>
        <label>
          {{ lang.t('message') }}
          <textarea name="message" [(ngModel)]="form.message" rows="6" required></textarea>
        </label>
        <button class="btn btn-primary" type="submit">{{ lang.t('send') }}</button>
        @if (submitted) {
          <p class="form-note">{{ lang.current() === 'en' ? 'Backend is not connected yet. Your form UI is ready for API integration.' : 'لم يتم ربط الباك إند بعد. واجهة النموذج جاهزة للربط لاحقًا.' }}</p>
        }
      </form>
    </section>
  `,
})
export class Contact {
  readonly lang = inject(LanguageService);
  submitted = false;
  form = { name: '', phone: '', message: '' };
}
