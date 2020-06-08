import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {

  // nasaTileImageURL1 = "/assets/images/apod.jpg";
  // nasaTileDescription1 = "See Nasa's Astronomy Picture of the Day";
  // nasaImageDate1 = "";
  //
  // nasaTileImageURL2 = "/assets/images/apod.jpg";
  // nasaTileDescription2 = "New Yearrrrrrr";
  // nasaImageDate2 = "2020-01-01";

  nasaTileArray = [
    {
      nasaTileImageURL: "/assets/images/apod.jpg",
      nasaTileDescription: "See Nasa's Astronomy Picture of the Day",
      nasaImageDate: ""
    },
    {
      nasaTileImageURL: "/assets/images/apod.jpg",
      nasaTileDescription: "New Year 2020 Astronomy Picture!",
      nasaImageDate: "2020-01-01"
    },
    {
      nasaTileImageURL: "/assets/images/apod.jpg",
      nasaTileDescription: "New Year 2019 Astronomy Picture!",
      nasaImageDate: "2019-01-01"
    },
    {
      nasaTileImageURL: "/assets/images/apod.jpg",
      nasaTileDescription: "New Year 2018 Astronomy Picture!",
      nasaImageDate: "2018-01-01"
    },
    {
      nasaTileImageURL: "/assets/images/apod.jpg",
      nasaTileDescription: "New Year 2017 Astronomy Picture!",
      nasaImageDate: "2017-01-01"
    },
    {
      nasaTileImageURL: "/assets/images/apod.jpg",
      nasaTileDescription: "New Year 2016 Astronomy Picture!",
      nasaImageDate: "2016-01-01"
    },
    {
      nasaTileImageURL: "/assets/images/apod.jpg",
      nasaTileDescription: "New Year 2015 Astronomy Picture!",
      nasaImageDate: "2015-01-01"
    },
    {
      nasaTileImageURL: "/assets/images/apod.jpg",
      nasaTileDescription: "New Year 2014 Astronomy Picture!",
      nasaImageDate: "2014-01-01"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
