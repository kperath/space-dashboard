import { Component, Input, OnInit } from '@angular/core';
import { NasaPodService} from '../nasa-pod.service';
import {INasaPod} from '../I-nasa-pod';

@Component({
  selector: 'app-nasa-pod',
  templateUrl: './nasa-pod.component.html',
  styleUrls: ['./nasa-pod.component.css']
})
export class NasaPodComponent implements OnInit {

  constructor(private nasaPodService: NasaPodService) {}

  @Input() pictureOfDay: INasaPod;

  ngOnInit(): void {
    this.nasaPodService.getPOD().subscribe((respData: INasaPod) => {
      this.pictureOfDay = respData;
    });
  }

}
