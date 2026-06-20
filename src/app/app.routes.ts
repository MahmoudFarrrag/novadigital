import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then((m) => m.Home) },
  { path: 'about', loadComponent: () => import('./pages/about/about').then((m) => m.About) },
  { path: 'services', loadComponent: () => import('./pages/services/services').then((m) => m.Services) },
  {
    path: 'services/:slug',
    loadComponent: () => import('./pages/service-details/service-details').then((m) => m.ServiceDetails),
  },
  { path: 'portfolio', loadComponent: () => import('./pages/portfolio/portfolio').then((m) => m.Portfolio) },
  {
    path: 'portfolio/:slug',
    loadComponent: () => import('./pages/portfolio-details/portfolio-details').then((m) => m.PortfolioDetails),
  },
  { path: 'pricing', loadComponent: () => import('./pages/pricing/pricing').then((m) => m.Pricing) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact) },
  { path: '**', redirectTo: '' },
];
