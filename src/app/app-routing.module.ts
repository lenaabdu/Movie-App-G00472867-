import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Home page (default landing page)
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then(m => m.HomePage)
  },
    // Redirect empty path to home
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // Movie Details page (uses movie ID parameter)
  {
    path: 'movie-details/:id',
    loadComponent: () =>
      import('./pages/movie-details/movie-details.page')
        .then(m => m.MovieDetailsPage)
  },
  // Favourites page (displays saved movies)
  {
    path: 'favourites',
    loadComponent: () =>
      import('./pages/favourites/favourites.page')
        .then(m => m.FavouritesPage)
  },
   // Details page (for cast/crew member information)
  {
    path: 'details/:id',
    loadComponent: () =>
      import('./pages/details/details.page')
        .then(m => m.DetailsPage)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}