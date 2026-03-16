import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
// 1. Ajoutez l'importation du composant ici
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: true,
  // 2. Ajoutez ExploreContainerComponent dans le tableau imports
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule,
    ExploreContainerComponent
  ]
})
export class AuthPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}