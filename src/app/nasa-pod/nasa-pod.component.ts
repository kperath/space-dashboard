import { Component, OnInit } from '@angular/core';
import { NasaPodService} from '../nasa-pod.service';
import {INasaPod} from '../I-nasa-pod';

@Component({
  selector: 'app-nasa-pod',
  templateUrl: './nasa-pod.component.html',
  styleUrls: ['./nasa-pod.component.css']
})
export class NasaPodComponent implements OnInit {

  constructor(private nasaPodService: NasaPodService) {}

  pod: INasaPod;

  ngOnInit(): void {
    this.nasaPodService.getPOD().subscribe((data: INasaPod) => {this.pod = data; });
  }

}
