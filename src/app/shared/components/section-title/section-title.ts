import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  template: `
    <div class="section-title reveal">
      <span class="eyebrow">{{ eyebrow() }}</span>
      <h2>{{ title() }}</h2>
      @if (text()) {
        <p>{{ text() }}</p>
      }
    </div>
  `,
})
export class SectionTitle {
  readonly eyebrow = input('');
  readonly title = input.required<string>();
  readonly text = input('');
}
