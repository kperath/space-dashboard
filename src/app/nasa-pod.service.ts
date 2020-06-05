import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {INasaPod, INasaKey} from './I-nasa-pod';
import { environment} from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class NasaPodService {

  constructor(private http: HttpClient) { }

  getPOD(): Observable<INasaPod> {
    return this.http.get<INasaPod>(`${environment.API_URL}${this.getNasaKey().subscribe((data) => data)}`);
  }

  getNasaKey(): Observable<INasaKey> {
    return this.http.get<INasaKey>('http://localhost:8080/key');
  }
}
