import { Component, Input, OnInit } from "@angular/core";
import {Config, ConfigService} from "../config.service";
import {PodData, NasaPodService} from "../nasa-pod.service";
import {Router} from "@angular/router";

@Component({
  selector: "app-nasa-pod",
  templateUrl: "./nasa-pod.component.html",
  styleUrls: ["./nasa-pod.component.css"]
})
export class NasaPodComponent implements OnInit {

  config: Config;
  pod: PodData;
  @Input() date: string;

  constructor(private configService: ConfigService, private nasaPodService: NasaPodService, private router: Router) {}

  ngOnInit(): void {
    this.getKey();
    setTimeout(() => {
      if (!this.config) {
        this.router.navigateByUrl("dashboard/error").then(() => {}).catch(e => console.log(e));
      }
    }, 3000);
  }

  getKey(date= "") {
    this.configService.getConfig().subscribe(
     ((data) => {
       this.config = { nasaKey: data.nasaKey};
       this.config.nasaKey += date;
     }),   // next function
     (error => console.log(error)),       // error function
     (() => {
       console.log("key received");
       this.getPOD(); // get picture of the day after config is retrieved
     })  // complete function
    );
  }

  getPOD() {
    this.nasaPodService.getData(this.config).subscribe(
      (data => this.pod = {...data}),
      (error => console.log(error)),
      (() => console.log("pod received"))
    );
  }

}

// Picture of the Day interface
export interface NasaPod {
  date: string;
  title: string;
  explanation: string;
  mediaType: string;
  url: string;
}
