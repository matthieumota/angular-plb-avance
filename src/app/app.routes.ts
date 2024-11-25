import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HousesComponent } from './pages/houses/houses.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'annonces', component: HousesComponent },
];
