import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },
  { path: 'features', loadComponent: () => import('./pages/features/features.component').then(m => m.FeaturesComponent) },
  { path: 'how-it-works', loadComponent: () => import('./pages/how-it-works/how-it-works.component').then(m => m.HowItWorksComponent) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) },
  { path: 'register', redirectTo: 'contact', pathMatch: 'full' },
  { path: 'privacy-policy', loadComponent: () => import('./pages/privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent) },
  { path: '**', redirectTo: '' }
];
