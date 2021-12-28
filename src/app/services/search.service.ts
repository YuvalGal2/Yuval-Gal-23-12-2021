import { Injectable } from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {DataService} from './shared/data.service';
import {StateService} from './shared/state.service';
import {City} from '../models/city.model';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchObs = new Subject<string>();
  private subscriptions = new Subscription();
  private readonly citiesAPI: string = "https://dataservice.accuweather.com/locations/v1/cities/autocomplete";
  private readonly citiesByKeyAPI: string = "https://dataservice.accuweather.com/locations/v1";
  constructor(private dataService: DataService,
              private stateService: StateService) { }

  setSearchObserable(query: string, key: string = ''): void {
    this.searchObs.next(query);
    this.fetchData(query, key);
  }

  private fetchDataByQuery(query: string): void {
    this.subscriptions.add(this.dataService
      .sendRequest(this.citiesAPI, 'get', {
        q: query
      })
      .subscribe((res: City[]) => {
        this.stateService.setLocationWeatherData(res);
      }, (error) => {
        this.dataService.emitRequestError(error);
      }));
  }

  private fetchDataByKey(key: string): void {
    this.subscriptions.add(this.dataService
      .sendRequest(`${this.citiesByKeyAPI}/${key}`, 'get', {})
      .subscribe((res: City) => {
        this.stateService.setLocationWeatherData([res]);
      }, (error) => {
        this.dataService.emitRequestError(error);
      }));
  }

  fetchData(query: string, specificKey: string = ''): void {
    if (specificKey.length === 0) {
      return this.fetchDataByQuery(query);
    }
    return this.fetchDataByKey(specificKey);
  }
}
