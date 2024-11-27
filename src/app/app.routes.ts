import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'annonces', loadComponent: () => import('./pages/houses/houses.component').then(m => m.HousesComponent) },
  {
    path: 'annonce/:id',
    loadComponent: () => import('./pages/house/house.component').then(m => m.HouseComponent),
    children: [
      { path: 'buy', loadComponent: () => import('./pages/house-buy/house-buy.component').then(m => m.HouseBuyComponent) },
      { path: 'rent', loadComponent: () => import('./pages/house-rent/house-rent.component').then(m => m.HouseRentComponent) }
    ]
  },
  { path: 'panier', loadComponent: () => import('./pages/cart/cart.component').then(m => m.CartComponent) }
];
