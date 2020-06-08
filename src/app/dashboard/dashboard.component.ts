import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {

  nasaTileImageURL = "/assets/images/apod.jpg";
  nasaTileDescription = "See Nasa's Astronomy Picture of the Day";

  constructor() { }

  ngOnInit(): void {
  }

}
