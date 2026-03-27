import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { MovieServices } from '../Services/movie-services';
import { IonButton,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonButton,IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle],
})
export class HomePage {
  movies:any[]=[];
  constructor(private service:MovieServices) {}

  ionViewWillEnter(){
    this.service.GetMovieData().subscribe(
      (data)=>{
        this.movies = data.Search;
        console.log(this.movies);
      }
    );
  }
}
