import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonHeader, IonToolbar, IonTitle, IonContent} from '@ionic/angular/standalone';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  standalone: true  ,
 imports :[IonHeader, IonContent,  CommonModule , FormsModule, IonToolbar, IonTitle ],
})
export class MovieDetailsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
