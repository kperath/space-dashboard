import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {
  videoURL = '/assets/videos/Animation%20Of%20Stars.mp4';
  videoSettings = 'autoplay loop muted';

  constructor() { }

  ngOnInit(): void {
  }

}
