import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    //component: HomeComponent,
    loadComponent: () => import('./home/home.component').then((c) => c.HomeComponent),
    title: 'Home page',
  },
  {
    path: 'details/:id',
    //component: DetailsComponent,
    loadComponent: () => import('./details/details.component').then((c) => c.DetailsComponent),
    title: 'Home details'
  },
];
