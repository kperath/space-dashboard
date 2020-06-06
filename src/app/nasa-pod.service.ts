import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Config} from "./config.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class NasaPodService {

  constructor(private http: HttpClient) { }

  getData(config: Config): Observable<PodData> {
    return this.http.get<PodData>(`https://api.nasa.gov/planetary/apod?api_key=${config.nasaKey}`);
  }
}

export interface PodData {
  date: string;
  title: string;
  explanation: string;
  mediaType: string;
  url: string;
}
