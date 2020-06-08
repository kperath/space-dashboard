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
  getRequest: Observable<PodData>;

  getData(config: Config): Observable<PodData> {
    this.getRequest = this.http.get<PodData>(`${environment.API_URL}${config.nasaKey}${this.date}`);
    console.log("date preReset:" + this.date);
    this.resetDate();
    console.log("date postReset:" + this.date);
    return this.getRequest;
  }

  setDate(date= "") {
    this.date += date;
  }

  resetDate() {
    this.date = "&date=";
  }
}

export interface PodData {
  date: string;
  title: string;
  explanation: string;
  mediaType: string;
  url: string;
}
