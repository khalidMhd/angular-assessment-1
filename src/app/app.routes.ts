import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/product-list/product-list.component').then(
        (mod) => mod.ProductListComponent
      ),
  },
  {
    path: 'product-details/:id',
    loadComponent: () =>
      import('./components/product-details/product-details.component').then(
        (mod) => mod.ProductDetailsComponent
      ),
  },
];
