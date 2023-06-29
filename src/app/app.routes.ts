import { Routes } from '@angular/router';

export const routes: Routes = [];

export function getRoutes(): Routes {
  // if (window.innerWidth < 768) {
  //   return [
  //     {
  //       path: '',
  //       loadComponent: () => import('./components/small/home/home.component').then(mod => mod.HomeComponent),
  //     },
  //     {
  //       path: 'profile',
  //       loadComponent: () => import('./components/small/profile/profile.component').then(mod => mod.ProfileComponent),
  //     },
  //     {
  //       path: 'wishlist',
  //       loadComponent: () => import('./components/small/cart/cart.component').then(mod => mod.CartComponent),
  //     },
  //     {
  //       path: 'cart',
  //       loadComponent: () => import('./components/small/wishlist/wishlist.component').then(mod => mod.WishlistComponent),
  //     }
  //   ];
  // }
  // else {
    return [
      {
        path:'',
        redirectTo:'l',
        pathMatch:'full'
      },
      {
        path: 'l',
        loadComponent: () => import('./components/large/main/main.component').then(mod => mod.MainComponent),
        children: [
          {
            path: '',
            redirectTo:'home',
            pathMatch:'full'
          },
          {
            path: 'home',
            pathMatch:'full',
            loadComponent: () => import('./components/large/home/home.component').then(mod => mod.HomeComponent),
          },
          {
            path: 'search',
            pathMatch:'full',
            loadComponent: () => import('./components/large/search/search.component').then(mod => mod.SearchComponent),
          },
          {
            path: 'profile',
            loadComponent: () => import('./components/large/profile/profile.component').then(mod => mod.ProfileComponent),
          },
          {
            path: 'wishlist',
            loadComponent: () => import('./components/large/wishlist/wishlist.component').then(mod => mod.WishlistComponent),
          },
          {
            path: 'cart',
            loadComponent: () => import('./components/large/cart/cart.component').then(mod => mod.CartComponent),
          }
        ]
      }
    ];
  // }
}
