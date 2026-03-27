import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
//imported MovieServices from the services folder to access the items of the services
import { MovieServices } from '../Services/movie-services';
//added card components for the ionic ui website to help display the project using cards
import { IonButton,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  //the imports of the import above
  imports: [IonButton,IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle],
})
export class HomePage {
  movies:any[]=[];
  //added an object service to the constructor
  constructor(private service:MovieServices) {}

  //Fuction to access the api content 
  ionViewWillEnter(){
    this.service.GetMovieData().subscribe(
      (data)=>{
        this.movies = data.Search;
        console.log(this.movies);
      }
    );
  }
}
