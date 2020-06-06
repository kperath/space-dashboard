import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {

  nasaTileImageURL = "/assets/images/nasa.jpg";
  nasaTileDescription = "See Nasa's Picture of the Day";

  constructor() { }

  ngOnInit(): void {
  }

}
