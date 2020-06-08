import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Config} from "./config.service";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: "root"
})
export class NasaPodService {

  constructor(private http: HttpClient) { }
  date = "&date=";

  getData(config: Config): Observable<PodData> {
    return this.http.get<PodData>(`${environment.API_URL}${config.nasaKey}${this.date}`);
  }

  setDate(date= "") {
    this.date += date;
  }
}

export interface PodData {
  date: string;
  title: string;
  explanation: string;
  mediaType: string;
  url: string;
}
