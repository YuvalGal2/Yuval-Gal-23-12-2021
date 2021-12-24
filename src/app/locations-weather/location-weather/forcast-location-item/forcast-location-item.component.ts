import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-forcast-location-item',
  templateUrl: './forcast-location-item.component.html',
  styleUrls: ['./forcast-location-item.component.scss']
})
export class ForcastLocationItemComponent implements OnInit {
  @Input('forcastData') forcastData: any;
  constructor() { }

  ngOnInit(): void {
  }

}
