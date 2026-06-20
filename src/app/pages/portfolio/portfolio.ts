import { Component, inject } from '@angular/core';
import { projects } from '../../data/projects.data';
import { LanguageService } from '../../core/services/language.service';
import { ProjectCard } from '../../shared/components/project-card/project-card';

@Component({
  selector: 'app-portfolio',
  imports: [ProjectCard],
  template: `
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow">{{ lang.t('portfolio') }}</span>
        <h1>{{ lang.t('portfolioPreview') }}</h1>
        <p>{{ lang.current() === 'en' ? 'Dummy portfolio projects for now, structured for future API integration.' : 'أعمال تجريبية مؤقتة ومنظمة للربط لاحقًا مع API.' }}</p>
      </div>
    </section>
    <section class="section container">
      <div class="cards-grid three">
        @for (project of projectList; track project.slug) {
          <app-project-card [project]="project" />
        }
      </div>
    </section>
  `,
})
export class Portfolio {
  readonly lang = inject(LanguageService);
  readonly projectList = projects;
}
