import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {

  nasaTileImageURL = "/assets/images/apod.jpg";
  nasaTileDescription = "See Nasa's Astronomy Picture of the Day";
  nasaImageDate = "";

  nasaTileImageURL2 = "/assets/images/apod.jpg";
  nasaTileDescription2 = "New Yearrrrrrr";
  nasaImageDate2 = "2020-01-01";

  constructor() { }

  ngOnInit(): void {
  }

}
