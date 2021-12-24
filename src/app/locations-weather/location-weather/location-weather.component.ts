import {Component, Input, OnInit} from '@angular/core';
import {City} from '../../models/city.model';
import {StateService} from '../../services/shared/state.service';

@Component({
  selector: 'app-location-weather',
  templateUrl: './location-weather.component.html',
  styleUrls: ['./location-weather.component.scss']
})
export class LocationWeatherComponent {
  @Input('cityData') cityData: City
  constructor() { }

}
