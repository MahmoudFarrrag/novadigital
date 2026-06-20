import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectItem } from '../../../core/models/site.models';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink],
  template: `
    <article class="glass-card project-card reveal">
      <div class="card-media">
        <img [src]="project().image" [alt]="lang.text(project().name)" loading="lazy" (error)="hideImage($event)" />
      </div>
      <div class="card-body">
        <span class="pill-label">{{ lang.text(project().category) }}</span>
        <h3>{{ lang.text(project().name) }}</h3>
        <p>{{ lang.text(project().result) }}</p>
        <a class="text-link" [routerLink]="['/portfolio', project().slug]">{{ lang.t('learnMore') }}</a>
      </div>
    </article>
  `,
})
export class ProjectCard {
  readonly project = input.required<ProjectItem>();
  readonly lang = inject(LanguageService);

  hideImage(event: Event): void {
    (event.target as HTMLImageElement).style.display = 'none';
  }
}
