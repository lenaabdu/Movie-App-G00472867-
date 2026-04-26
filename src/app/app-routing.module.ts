import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then(m => m.HomePage)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'movie-details/:id',
    loadComponent: () =>
      import('./pages/movie-details/movie-details.page')
        .then(m => m.MovieDetailsPage)
  },
  {
    path: 'favourites',
    loadComponent: () =>
      import('./pages/favourites/favourites.page')
        .then(m => m.FavouritesPage)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}