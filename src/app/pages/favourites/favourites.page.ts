import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  imports :[ IonHeader, IonToolbar, IonTitle,IonContent ],
  
})
export class FavouritesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
