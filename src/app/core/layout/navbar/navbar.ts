import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="site-header">
      <nav class="nav container" aria-label="Main navigation">
        <a class="brand" routerLink="/" (click)="closeMenu()">
          <img src="assets/images/logo/nova.png" alt="Nova Digital logo" (error)="hideImage($event)" />
          <span>Nova Digital</span>
        </a>

        <button class="menu-toggle" type="button" (click)="menuOpen.set(!menuOpen())" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>

        <div class="nav-links" [class.open]="menuOpen()">
          @for (item of navItems; track item.path) {
            <a [routerLink]="item.path" routerLinkActive="active" [routerLinkActiveOptions]="item.exact ? { exact: true } : { exact: false }" (click)="closeMenu()">
              {{ lang.t(item.label) }}
            </a>
          }
          <button class="lang-switch" type="button" (click)="lang.toggle()">
            {{ lang.current() === 'en' ? 'AR' : 'EN' }}
          </button>
        </div>
      </nav>
    </header>
  `,
})
export class Navbar {
  readonly lang = inject(LanguageService);
  readonly menuOpen = signal(false);
  readonly navItems = [
    { path: '/', label: 'home' as const, exact: true },
    { path: '/about', label: 'about' as const },
    { path: '/services', label: 'services' as const },
    { path: '/portfolio', label: 'portfolio' as const },
    { path: '/pricing', label: 'pricing' as const },
    { path: '/contact', label: 'contact' as const },
  ];

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  hideImage(event: Event): void {
    (event.target as HTMLImageElement).style.display = 'none';
  }
}
