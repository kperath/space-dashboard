import {Component, Input, OnInit} from "@angular/core";
import { NasaPodService } from "../nasa-pod.service";

@Component({
  selector: "app-tile",
  templateUrl: "./tile.component.html",
  styleUrls: ["./tile.component.css"]
})
export class TileComponent implements OnInit {

  @Input() imageURL: string;
  @Input() imageDescription: string;
  @Input() imageDate: string;

  constructor(private nasaPodService: NasaPodService) { }

  ngOnInit(): void {
    this.nasaPodService.setDate(this.imageDate);
  }

  // pass date into tile component and tile component passes that data to nasapod service
}
