import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,  IonCard, IonCardContent, IonButton } from "@ionic/angular/standalone";
import { heart, home, trash } from 'ionicons/icons';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  imports :[ IonHeader, IonToolbar, IonTitle,IonContent, IonCard, IonCardContent, IonButton,CommonModule ],
  
})
export class FavouritesPage implements OnInit {

  favourites: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadFavourites();
  }

  // Reload favourites every time page is opened
  ionViewWillEnter() {
    this.loadFavourites();
  }

  //  Get favourites from localStorage
  loadFavourites() {
    this.favourites = JSON.parse(localStorage.getItem('favourites') || '[]');
  }

  // Open movie details
  openDetails(id: number) {
    this.router.navigate(['/movie-details', id]);
  }

  // Go back home
  goHome() {
    this.router.navigate(['/home']);
  }

  //  Remove from favourites (optional)
  removeFavourite(id: number) {
    this.favourites = this.favourites.filter(m => m.id !== id);
    localStorage.setItem('favourites', JSON.stringify(this.favourites));
  }
}
