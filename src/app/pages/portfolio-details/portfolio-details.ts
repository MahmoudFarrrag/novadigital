import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { projects } from '../../data/projects.data';
import { LanguageService } from '../../core/services/language.service';
import { CtaSection } from '../../shared/components/cta-section/cta-section';

@Component({
  selector: 'app-portfolio-details',
  imports: [CtaSection],
  template: `
    @if (project(); as item) {
      <section class="page-hero detail-hero">
        <div class="container detail-grid">
          <div>
            <span class="eyebrow">{{ lang.t('projectDetails') }}</span>
            <h1>{{ lang.text(item.name) }}</h1>
            <p>{{ lang.text(item.result) }}</p>
            @if (item.demoLink !== '#') {
              <a class="btn btn-primary" [href]="item.demoLink" target="_blank" rel="noopener">{{ lang.t('visitProject') }}</a>
            }
          </div>
          <div class="detail-media">
            <img [src]="item.image" [alt]="lang.text(item.name)" (error)="hideImage($event)" />
          </div>
        </div>
      </section>
      <section class="section container project-detail-grid">
        <article class="glass-card content-card">
          <span class="pill-label">{{ lang.text(item.category) }}</span>
          <h2>{{ lang.t('problem') }}</h2>
          <p>{{ lang.text(item.problem) }}</p>
        </article>
        <article class="glass-card content-card">
          <h2>{{ lang.t('solution') }}</h2>
          <p>{{ lang.text(item.solution) }}</p>
        </article>
        <article class="glass-card content-card">
          <h2>{{ lang.t('technologies') }}</h2>
          <div class="tag-row">
            @for (tech of item.technologies; track tech) {
              <span>{{ tech }}</span>
            }
          </div>
        </article>
        <article class="glass-card content-card">
          <h2>{{ lang.t('result') }}</h2>
          <p>{{ lang.text(item.result) }}</p>
        </article>
      </section>
      <section class="section container"><app-cta-section /></section>
    } @else {
      <section class="page-hero"><div class="container"><h1>{{ lang.t('notFound') }}</h1></div></section>
    }
  `,
})
export class PortfolioDetails {
  private readonly route = inject(ActivatedRoute);
  readonly lang = inject(LanguageService);
  readonly project = computed(() => projects.find((item) => item.slug === this.route.snapshot.paramMap.get('slug')));

  hideImage(event: Event): void {
    (event.target as HTMLImageElement).style.display = 'none';
  }
}
