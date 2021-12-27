import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {City} from '../../models/city.model';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  favoritesLocations: any = [];
  currentlyViewingCity: string|undefined|null = null
  darkModeObs = new BehaviorSubject<string>('0');
  favoritesLocationSubject: Subject<{}> = new Subject<{}>();
  private sideNavObs = new Subject<boolean>();
  private locationWeatherDataSubject = new Subject<City[]>();
  private sideNavState: boolean = false;
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

  // get the value from the storage
  private getFavoritesLocationFromStorage() {
    const favoritesCitiesStorage = localStorage.getItem("favoritesCities")
    if (favoritesCitiesStorage === null ) {
      return [];
    }
    const values = JSON.parse(favoritesCitiesStorage);
    if (values instanceof Array) {
      return values;
    }
    return Array(values)

  }



  // for first load, get the status of the favorites
  getFavoritesLocations(): string[]{
    this.favoritesLocations = this.getFavoritesLocationFromStorage();
    this.setFavoritesLocationsState();
    return this.favoritesLocations;
  }
  getFavoritesLocationsState(): Subject<{}> {
    return this.favoritesLocationSubject;
  }
  getFavoritesLocationsAsList(): string[] {
    return this.favoritesLocations;
  }
  setFavoritesLocationsState() {
    this.favoritesLocationSubject.next(this.favoritesLocations);
  }

  // remove location from the fav
  private removeLocationFromFavorites(key: string)  {
    const currentFavs = this.getFavoritesLocationFromStorage();
    this.favoritesLocations = currentFavs.filter((fav) => fav.Key.toString() !== key.toString())
    return this.favoritesLocations;
  };

  // add location to the fav
  private addLocationFromFavorites(key: string){
    this.favoritesLocations.push({Key:key});
  }

  // main function which controls which operation to do
  toggleLocationToFavorites(action: string, key: string) {
      switch (action) {
        case 'remove':
         const newFavorites = this.removeLocationFromFavorites(key);
          localStorage.setItem('favoritesCities',JSON.stringify(newFavorites));
          break;
        case 'add':
          this.addLocationFromFavorites(key);
          localStorage.setItem('favoritesCities',JSON.stringify(this.favoritesLocations));
          break;
      }
      this.setFavoritesLocationsState();
  }


}
