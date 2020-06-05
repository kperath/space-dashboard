import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})

export class ConfigService {

  constructor(private http: HttpClient) { }

  serverHost = "http://localhost:8080/config";

  getConfig(): Observable<Config> {
    return this.http.get<Config>(this.serverHost);
  }
}

export interface Config {
  nasaKey: string;
}
