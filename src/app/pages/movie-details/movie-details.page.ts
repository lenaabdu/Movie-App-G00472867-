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

    if (!favs.find((m: any) => m.id === this.movieDetails.id)) {
      favs.push(this.movieDetails);
      localStorage.setItem('favourites', JSON.stringify(favs));
      alert('Added to favourites!');
    } else {
      alert('Already in favourites!');
    }
  }
  
}