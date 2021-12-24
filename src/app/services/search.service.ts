import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {DataService} from './shared/data.service';
import {environment} from '../../environments/environment';
import {StateService} from './shared/state.service';
import {City} from '../models/city.model';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchObs = new Subject<string>();
  private readonly citiesAPI: string = "http://dataservice.accuweather.com/locations/v1/cities/autocomplete";
  constructor(private dataService: DataService,
              private stateService: StateService) { }

  setSearchObserable(query: string): void {
    this.searchObs.next(query);
    this.fetchData(query);
  }
  fetchFakeData(query: string): void {
    if (query.trim().length > 0)  {
      this.dataService.sendRequest('./assets/mockData/cities.json', 'get').subscribe((res: City[]) => {
        const relevantCitiesOnly: City[] = res.filter((city: City) => city.LocalizedName.includes(query));
        this.stateService.setLocationWeatherData(relevantCitiesOnly);
      }, (error) => {
        // todo: handle error in request. - use modal.
        console.log(error.status)
      });
    }

  }
  fetchData(query: string): void {
    if (environment.useMockData) {
      this.fetchFakeData(query);
    } else {

      this.dataService
        .sendRequest('http://dataservice.accuweather.com/locations/v1/cities/autocomplete', 'get', {
          q: query
        })
        .subscribe((res: City[]) => {
          this.stateService.setLocationWeatherData(res);
        }, (error) => {
          this.stateService.setLocationWeatherData();
          console.log(error.status)
        });
    }
  }
}
