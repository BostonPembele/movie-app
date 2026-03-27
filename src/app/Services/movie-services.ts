import { Injectable } from '@angular/core';
// imported httpClient and observable to the Services.ts
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieServices {
  constructor(private httpClient:HttpClient){}

  //Used the api from the moodle page to be able to access the contents of the array
  GetMovieData():Observable<any>{
    return this.httpClient.get('https://www.omdbapi.com/?apikey=2ee2ed84&s=%27war%27')
  }
}
