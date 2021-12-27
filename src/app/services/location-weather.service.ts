import { Injectable } from '@angular/core';
import {DataService} from './shared/data.service';
import {Observable} from 'rxjs';
import {StateService} from './shared/state.service';

@Injectable({
  providedIn: 'root'
})
export class LocationWeatherService {
  private readonly getCityByKeyAPI: string = "http://dataservice.accuweather.com/locations/v1/";
  private readonly getCurrentWeatherAPI: string = "http://dataservice.accuweather.com/currentconditions/v1";
  private readonly getForcastAPI: string = "http://dataservice.accuweather.com/forecasts/v1/daily/5day";
  constructor(private dataService: DataService,
              private stateService: StateService) { }
  private getDataFromDataService(realDataRoute: string, params?: {}): Observable<any> {
      return this.dataService.sendRequest(realDataRoute,'get', params);
  }
  getCurrentWeatherForLocation(cityId: string):Observable<any> {
    return this.getDataFromDataService(`${this.getCurrentWeatherAPI}/${cityId}`, {details: true} );
  }
  getForcastForLocation(cityId: string):Observable<any> {
    return this.getDataFromDataService(`${this.getForcastAPI}/${cityId}`);
  }


  isFavoriteLocation(key: string): boolean {
    if (this.stateService.favoritesLocations.filter((locationObject: any) => locationObject.Key === key).length > 0){
      return true;
    }
    return false;
  }

  private handleLocationsInFavorites(key: string) {
    if (this.isFavoriteLocation(key)) {
      return this.stateService.toggleLocationToFavorites('remove',key);
    }
    return this.stateService.toggleLocationToFavorites('add', key);
  }
  toggleFavorites(key: string) {
    this.handleLocationsInFavorites(key);
  }

  getFavoritesLocationsState() {
    return this.stateService.getFavoritesLocationsState();
  }

  getFavoritesLocationsList(): any {
    return this.stateService.getFavoritesLocationsAsList();
  }
  getCityByKey(cityKey: string):Observable<any> {
    return this.getDataFromDataService(`${this.getCityByKeyAPI}/${cityKey}`, {details: true} );
  }
  emitError(error: any) {
    this.dataService.emitRequestError(error);
  }

}
