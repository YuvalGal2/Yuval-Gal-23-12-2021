import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {City} from '../../models/city.model';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private sideNavObs = new Subject<boolean>();
  private locationWeatherDataSubject = new Subject<City[]>();
  private sideNavState: boolean = false;
  public currentlyViewingCity: string|undefined|null = null
  constructor() { }

  setLocationWeatherData(citiesData?: City[] ): void {
    this.locationWeatherDataSubject.next(citiesData);
  }
  getLocationWeatherDataSubject(): Observable<City[]> {
    return this.locationWeatherDataSubject;
  }
   setSideNavState(openState:boolean = this.sideNavState): void {
    if (openState === undefined) {
      this.sideNavObs.next(openState);
      this.sideNavState = openState;
    }
    else {
      // if not asked for specific state, toogle it.
      this.sideNavObs.next(!openState);
      this.sideNavState = !openState;
    }
  }

  getSideNavState(): Observable<boolean> {
    return this.sideNavObs;
  }
}
