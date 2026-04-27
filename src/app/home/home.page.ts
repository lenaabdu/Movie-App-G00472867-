import { Component, OnInit } from '@angular/core';
import { movie } from '../services/movie';
import { Router } from '@angular/router';
import { IonInput,IonCard, IonCardContent ,IonHeader, IonContent,  IonToolbar, IonTitle, IonButtons, IonIcon, IonButton,  IonItem } from "@ionic/angular/standalone";
import {  heart } from 'ionicons/icons';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',

  standalone: true  ,
  imports:[IonInput,IonButton,IonButtons, IonIcon,IonCard, IonCardContent ,IonHeader, IonContent,FormsModule,  IonToolbar, IonTitle ,CommonModule, IonItem],
})
export class HomePage {
  heart = heart; // Favourite icon
  movies: any[] = []; // Stores movie list (trending/search results)
  searchText: string = '';
  isLoading = false;
  title: string = "Today's Trending Movies";
  constructor(private movie: movie,private router: Router) {}

  ngOnInit() {
    this.loadTrending();
  }
 //  Load trending movies from API
  loadTrending() {
    this.isLoading = true;
    this.movie.getTrendingMovies().subscribe(res => {
      this.movies = res.results;
      this.isLoading = false;
    });
  }
    // Search movies 
  search() {
    if (this.searchText.trim() === '') {
      this.title = "Today's Trending Movies";   
      this.loadTrending();
    } else {
      this.title = `${this.searchText}`; 
  
      this.movie.searchMovies(this.searchText).subscribe((data: any) => {
        this.movies = data.results;
      });
    }
  }
   // Open Movie Details Page
  openDetails(id: number) {
    this.router.navigate(['/movie-details', id]);
  }
    //  Navigate Favourites page
    goFavourites() {
      this.router.navigate(['/favourites']);
    }
}