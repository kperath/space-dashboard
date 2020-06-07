import { Component, OnInit } from "@angular/core";
import { Time } from "@angular/common";

@Component({
  selector: "app-error-page",
  templateUrl: "./error-page.component.html",
  styleUrls: ["./error-page.component.css"]
})
export class ErrorPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  timeout() {
    setTimeout(() => true, 5000);
  }

}
