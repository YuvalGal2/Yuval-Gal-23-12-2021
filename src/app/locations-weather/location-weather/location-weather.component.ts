import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {City} from '../../models/city.model';
import {LocationWeatherService} from '../../services/location-weather.service';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-location-weather',
  templateUrl: './location-weather.component.html',
  styleUrls: ['./location-weather.component.scss']
})
export class LocationWeatherComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();
  @Input('cityData') cityData: City
  cityCurrentWeather: any;
  forcastData: any;

  constructor(private locationWeatherService: LocationWeatherService) { }

  ngOnInit(): void {
    this.fetchCurrentWeatherForLocation();
    this.fetchLocationForcast();
  }

  fetchLocationForcast(): void {
    this.subscriptions.add(this.locationWeatherService.getForcastForLocation(this.cityData.Key).subscribe((forcastData) => {
      this.forcastData = forcastData;
    },(error) => this.locationWeatherService.emitError(error)));
  }

  fetchCurrentWeatherForLocation(): void {
    this.subscriptions.add(this.locationWeatherService.getCurrentWeatherForLocation(this.cityData.Key).subscribe((cityCurrentWeather) => {
      this.cityCurrentWeather = cityCurrentWeather[0];
      if (this.cityCurrentWeather) {
        this.cityCurrentWeather.countryId = this.cityData.Country.ID;
        this.cityCurrentWeather.cityName = this.cityData.LocalizedName;
      }
    },
      (error => this.locationWeatherService.emitError(error))));
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
