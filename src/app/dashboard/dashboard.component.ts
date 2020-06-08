import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {

  nasaTileArray = [
    {
      nasaTileImageURL: "/assets/images/apod.jpg",
      nasaTileDescription: "See Nasa's Astronomy Picture of the Day",
      nasaImageDate: ""
    },
    {
      nasaTileImageURL: "/assets/images/2020.jpg",
      nasaTileDescription: "New Year 2020 Astronomy Picture!",
      nasaImageDate: "2020-01-01"
    },
    {
      nasaTileImageURL: "/assets/images/2019.jpg",
      nasaTileDescription: "New Year 2019 Astronomy Picture!",
      nasaImageDate: "2019-01-01"
    },
    {
      nasaTileImageURL: "/assets/images/2018.jpg",
      nasaTileDescription: "New Year 2018 Astronomy Picture!",
      nasaImageDate: "2018-01-01"
    },
    {
      nasaTileImageURL: "/assets/images/2017.jpg",
      nasaTileDescription: "New Year 2017 Astronomy Picture!",
      nasaImageDate: "2017-01-01"
    },
    {
      nasaTileImageURL: "/assets/images/2016.jpg",
      nasaTileDescription: "New Year 2016 Astronomy Picture!",
      nasaImageDate: "2016-01-01"
    },
    {
      nasaTileImageURL: "/assets/images/2015.jpg",
      nasaTileDescription: "New Year 2015 Astronomy Picture!",
      nasaImageDate: "2015-01-01"
    },
    {
      nasaTileImageURL: "/assets/images/2014.jpg",
      nasaTileDescription: "New Year 2014 Astronomy Picture!",
      nasaImageDate: "2014-01-01"
    },
    {
      nasaTileImageURL: "/assets/images/2013.jpg",
      nasaTileDescription: "New Year 2013 Astronomy Picture!",
      nasaImageDate: "2013-01-01"
    },
    // {
    //   nasaTileImageURL: "/assets/images/apod.jpg",
    //   nasaTileDescription: "New Year 2012 Astronomy Picture!",
    //   nasaImageDate: "2012-01-01"
    // },
    // {
    //   nasaTileImageURL: "/assets/images/apod.jpg",
    //   nasaTileDescription: "New Year 2011 Astronomy Picture!",
    //   nasaImageDate: "2011-01-01"
    // },
    // {
    //   nasaTileImageURL: "/assets/images/apod.jpg",
    //   nasaTileDescription: "New Year 2010 Astronomy Picture!",
    //   nasaImageDate: "2010-01-01"
    // },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
