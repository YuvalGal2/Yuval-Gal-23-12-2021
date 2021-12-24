import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LocationsWeatherComponent} from './locations-weather/locations-weather.component';

const routes: Routes = [
  {path:'', component: LocationsWeatherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
