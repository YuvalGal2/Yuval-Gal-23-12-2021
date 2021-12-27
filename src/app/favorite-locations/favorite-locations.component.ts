import { Component, OnInit } from '@angular/core';
import {LocationWeatherService} from '../services/location-weather.service';

@Component({
  selector: 'app-favorite-locations',
  templateUrl: './favorite-locations.component.html',
  styleUrls: ['./favorite-locations.component.scss']
})
export class FavoriteLocationsComponent implements OnInit {
  constructor(private locationWeatherService: LocationWeatherService) { }
  favoritesLocationsKeys: {Key:string}[];

  ngOnInit(): void {
    this.favoritesLocationsKeys = this.locationWeatherService.getFavoritesLocationsList();
  }
}
