// Service to manage the API call to get a joke

// Importing the necessary modules
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class jokeService {

  // Having this constructor declaring an instance of HttpClient is necessary to make the API call.
  //We use this instance to access all HTTP methods like GET, POST, PUT, DELETE, etc.
  constructor(private http: HttpClient) { }

  // This method is used to make the API call to get a joke, wh ich returns an Observable.
  getJoke(): Observable<any> {
    // The URL is passed as a parameter to the get method of the HttpClient instance.
    return this.http.get('https://official-joke-api.appspot.com/random_joke');
  }
}