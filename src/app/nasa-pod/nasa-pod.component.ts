import { Component, Input, OnInit } from "@angular/core";
import {Config, ConfigService} from "../config.service";

@Component({
  selector: "app-nasa-pod",
  templateUrl: "./nasa-pod.component.html",
  styleUrls: ["./nasa-pod.component.css"]
})
export class NasaPodComponent implements OnInit {

  config: Config;

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.getKey();
  }

  getKey() {
    this.configService.getConfig().subscribe(
     (data => this.config = {...data}),   // next function
     (error => console.log(error)),       // error function
     (() => console.log("key received"))  // complete function
    );
  }

}
