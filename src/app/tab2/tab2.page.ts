import { Component } from '@angular/core';
import { IonHeader,IonItem, IonToolbar, IonTitle, IonButton, IonInput, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonItem, IonButton, IonInput, IonTitle, IonContent, ExploreContainerComponent]
})

export class Tab2Page {

  constructor() {}

}