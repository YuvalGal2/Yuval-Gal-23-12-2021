import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {LocationWeatherService} from '../../services/location-weather.service';
import {City} from '../../models/city.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-favorite-location',
  templateUrl: './favorite-location.component.html',
  styleUrls: ['./favorite-location.component.scss']
})
export class FavoriteLocationComponent implements OnInit, OnDestroy {
  @Input('locationKey') locationKey: string;
  private subscriptions = new Subscription();
  locationData: City;
  constructor(private locationWeatherService: LocationWeatherService ) { }

  ngOnInit(): void {
   this.fetchDataForLocation();
  }

  fetchDataForLocation() {
    this.subscriptions.add(
      this.locationWeatherService.getCurrentWeatherForLocation(this.locationKey)
        .subscribe((locationData: City[]) => {
          this.subscriptions.add(
          this.locationWeatherService.getCityByKey(this.locationKey)
          .subscribe((cityDetails: City) => {
            this.locationData = locationData[0];
            locationData[0].LocalizedName = cityDetails.LocalizedName;
      }));
    },
          (error => this.locationWeatherService.emitError(error))));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
