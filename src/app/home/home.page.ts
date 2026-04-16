import { Component, OnInit } from '@angular/core';
import { Movie } from '../services/movie';
import { IonHeader, IonContent,  IonToolbar, IonTitle } from "@ionic/angular/standalone";


import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  standalone: true  ,
  imports:[IonHeader, IonContent,FormsModule,  IonToolbar, IonTitle ,CommonModule,],
})
export class HomePage implements OnInit {

  movies: any[] = [];
  searchTerm: string = '';

  constructor(private movie: Movie) {}

  ngOnInit() {
    this.loadTrending();
  }

  loadTrending() {
    this.movie.getTrendingMovies().subscribe(res => {
      this.movies = res.results;
    });
  }

  searchMovies() {
    if (!this.searchTerm) {
      this.loadTrending();
      return;
    }

    this.movie.searchMovies(this.searchTerm).subscribe(res => {
      this.movies = res.results;
    });
  }
}