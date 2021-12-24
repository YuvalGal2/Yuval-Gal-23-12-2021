import {Component, Input, OnInit} from '@angular/core';
import {City} from '../../models/city.model';
import {LocationWeatherService} from '../../services/location-weather.service';
import {environment} from '../../../environments/environment';
@Component({
  selector: 'app-location-weather',
  templateUrl: './location-weather.component.html',
  styleUrls: ['./location-weather.component.scss']
})
export class LocationWeatherComponent implements OnInit{
  @Input('cityData') cityData: City
  cityCurrentWeather: any;
  constructor(private locationWeatherService: LocationWeatherService) { }

  ngOnInit() {
    this.fetchCurrentWeatherForLocation();
  }
  fetchCurrentWeatherForLocation() {
    this.locationWeatherService.getCurrentWeatherForLocation(this.cityData.Key).subscribe((cityCurrentWeather) => {
      if (environment.useMockData) {
        this.cityCurrentWeather = cityCurrentWeather.filter((dataObject: any) => dataObject.cityKey === this.cityData.Key)[0];
      }
      else {
        this.cityCurrentWeather = cityCurrentWeather;

      }
      this.cityCurrentWeather.countryId = this.cityData.Country.ID;
    })
  }
}
