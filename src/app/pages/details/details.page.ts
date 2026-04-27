import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { movie } from 'src/app/services/movie';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent,
  IonButton,
  IonButtons,
  IonIcon, IonItem, IonLabel, IonAvatar } from '@ionic/angular/standalone';

import { CommonModule } from '@angular/common';
import { home, arrowBack } from 'ionicons/icons';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  standalone: true,
  imports: [IonAvatar, IonLabel, IonItem, 
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardContent,
    IonButton,
    IonButtons,
    IonIcon,
 
  ]
})
export class DetailsPage {
  person: any; // Stores selected person 
  movies: any[] = [];
  home = home;// Icon reference for home button
  constructor(
    private route: ActivatedRoute,
    private movie: movie,
    private router: Router
  ) {
      ;
     }

  ngOnInit() {
    // Get person ID from URL
    const id = Number(this.route.snapshot.paramMap.get('id'));
  // Fetch person details from API
    this.movie.getDetails(id).subscribe((res: any) => {
      this.person = res;
    });
    // Fetch movies associated with the person
    this.movie.getDetailsMovies(id).subscribe((res: any) => {
      this.movies = res.cast.slice(0, 10);
    });
  }
    // Navigate to home page
  goHome() {
    this.router.navigate(['/home']);
  }
 // Navigate to selected movie details page
  openMovie(id: number) {
    this.router.navigate(['/movie-details', id]);
  }
   // Go back to previous page
  goBack() {
    window.history.back();
  }
}