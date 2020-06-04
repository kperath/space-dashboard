import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {INasaPod} from './I-nasa-pod';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NasaPodService {

  constructor(private http: HttpClient) { }

  getPOD(): Observable<INasaPod> {
    return this.http.get<INasaPod>('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
  }
}
