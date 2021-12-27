import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-location-weather-actions',
  templateUrl: './location-weather-actions.component.html',
  styleUrls: ['./location-weather-actions.component.scss']
})
export class LocationWeatherActionsComponent {
  @Input('locationkey') locationkey: string;
  constructor() { }
}
