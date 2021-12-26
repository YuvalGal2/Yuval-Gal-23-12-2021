import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LocationsWeatherComponent} from './locations-weather/locations-weather.component';
import {FavoriteLocationsComponent} from './favorite-locations/favorite-locations.component';

const routes: Routes = [
  {path:'', component: LocationsWeatherComponent},
  {path:'favorites', component: FavoriteLocationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
