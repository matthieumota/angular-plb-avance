import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'annonces', loadComponent: () => import('./pages/houses/houses.component').then(m => m.HousesComponent) },
  { path: 'panier', loadComponent: () => import('./pages/cart/cart.component').then(m => m.CartComponent) }
];
