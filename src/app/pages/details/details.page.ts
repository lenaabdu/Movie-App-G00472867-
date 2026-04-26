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

  person: any;
  movies: any[] = [];

  home = home;

  constructor(
    private route: ActivatedRoute,
    private movie: movie,
    private router: Router
  ) {
      ;
     }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.movie.getDetails(id).subscribe((res: any) => {
      this.person = res;
    });
    
    this.movie.getDetailsMovies(id).subscribe((res: any) => {
      this.movies = res.cast.slice(0, 10);
    });
  }

  goHome() {
    this.router.navigate(['/home']);
  }

  openMovie(id: number) {
    this.router.navigate(['/movie-details', id]);
  }
  goBack() {
    window.history.back();
  }
}