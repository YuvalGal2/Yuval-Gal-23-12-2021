import {Component, OnDestroy, OnInit} from '@angular/core';
import {City} from '../models/city.model';
import {StateService} from '../services/shared/state.service';
import {ActivatedRoute} from '@angular/router';
import {SearchService} from '../services/search.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-locations-weather',
  templateUrl: './locations-weather.component.html',
  styleUrls: ['./locations-weather.component.scss']
})
export class LocationsWeatherComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();
  useSearchDefault: boolean = true;
  specificCityKey: string;
  citiesData: City[] = [];


  constructor(
    private route: ActivatedRoute,
    private stateService: StateService,
    private searchService: SearchService) { }

  ngOnInit(): void {
    this.initLocations();
  }

  private initLocations (): void {
    this.subscriptions.add(
      this.route.params.subscribe((params) => {
      if (params['favClicked']) {
        this.specificCityKey = params['favClicked'];
        this.useSearchDefault = false;
      }
      this.fetchCitiesData();
    }))
  }

  private showSpecificCity(key:string): void {
    this.searchService.setSearchObserable(key)
  }

  fetchCitiesData(): void {
    this.subscriptions.add(
      this.stateService.getLocationWeatherDataSubject().subscribe((cities: City[]) => {
      this.citiesData = cities;
    }))
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }
}
