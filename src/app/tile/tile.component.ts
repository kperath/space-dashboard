import {Component, Input, OnInit} from "@angular/core";
import { NasaPodService } from "../nasa-pod.service";
import { DOCUMENT} from "@angular/common";

@Component({
  selector: "app-tile",
  templateUrl: "./tile.component.html",
  styleUrls: ["./tile.component.css"]
})
export class TileComponent implements OnInit {

  @Input() imageURL: string;
  @Input() imageDescription: string;
  @Input() imageDate: string;
  @Input() imageRoute: string;

  constructor(private nasaPodService: NasaPodService) { }

  ngOnInit(): void {
  }

  APIRequest() {
    if (this.imageRoute === "apod") {
      this.nasaPodService.setDate(this.imageDate);
    }
    else {
      // this.document.location.href = this.imageRoute;
      window.open(this.imageRoute, "_blank");
    }
  }
}
