import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-location-weather-actions',
  templateUrl: './location-weather-actions.component.html',
  styleUrls: ['./location-weather-actions.component.scss']
})
export class LocationWeatherActionsComponent implements OnInit {
  @Input('locationkey') locationkey: string;
  constructor() { }

  ngOnInit(): void {

  }

}
