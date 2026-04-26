import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { movie } from 'src/app/services/movie';
import { home, heart } from 'ionicons/icons';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonButtons, IonList, IonLabel, IonAvatar, IonItem, IonIcon } from '@ionic/angular/standalone';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  standalone: true,
  imports: [IonIcon, IonItem, IonAvatar, IonLabel, IonList, 
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
 IonButtons,IonHeader
  ]
})
export class MovieDetailsPage implements OnInit {
  home = home;
  heart = heart;
  movieDetails: any;   //  movie data
  cast: any[] = [];   //  cast
  isFavourite = false;

  constructor(
    private route: ActivatedRoute,
    private movie: movie,   // service
    private router: Router
  ) {
   
    
     
   
    }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // Get movie details
    this.movie.getMovieDetails(id).subscribe(res => {
      this.movieDetails = res;
    });

    //  Get cast
    this.movie.getMovieCredits(id).subscribe((res: any) => {
      this.cast = res.cast.slice(0, 5);
    });
    this.movie.getMovieDetails(id).subscribe(res => {
      this.movieDetails = res;
      this.checkIfFavourite(); // 👈 important
    });
  }

  //  Navigate Home
  goHome() {
    this.router.navigate(['/home']);
  }

  //  Navigate Favourites
  goFavourites() {
    this.router.navigate(['/favourites']);
  }

  //  Add to favourites
  addToFavourites() {
    let favs = JSON.parse(localStorage.getItem('favourites') || '[]');
  
    if (!this.isFavourite) {
      favs.push(this.movieDetails);
      localStorage.setItem('favourites', JSON.stringify(favs));
      this.isFavourite = true;
  
    
    }
  }
  //   Check If Movie Is Already Favourite
  checkIfFavourite() {
    let favs = JSON.parse(localStorage.getItem('favourites') || '[]');
    this.isFavourite = favs.some((m: any) => m.id === this.movieDetails.id);
  }
  //Add Remove Function
  removeFromFavourites() {
    let favs = JSON.parse(localStorage.getItem('favourites') || '[]');
  
    favs = favs.filter((m: any) => m.id !== this.movieDetails.id);
  
    localStorage.setItem('favourites', JSON.stringify(favs));
  
    this.isFavourite = false;
  
    
  }
  
}