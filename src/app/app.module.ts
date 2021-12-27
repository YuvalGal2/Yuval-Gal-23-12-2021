import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchComponent } from './search/search.component';
import { LocationWeatherComponent } from './locations-weather/location-weather/location-weather.component';
import { LocationWeatherUpperSectionComponent } from './locations-weather/location-weather/location-weather-upper-section/location-weather-upper-section.component';
import { LocationWeatherSmallComponent } from './locations-weather/location-weather/location-weather-upper-section/location-weather-small/location-weather-small.component';
import { LocationWeatherActionsComponent } from './locations-weather/location-weather/location-weather-upper-section/location-weather-actions/location-weather-actions.component';
import { ForcastLocationItemComponent } from './locations-weather/location-weather/forcast-location-item/forcast-location-item.component';
import { FavoriteLocationsComponent } from './favorite-locations/favorite-locations.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './modules/material/material.module';
import { HttpClientModule} from '@angular/common/http';
import { MenuItemComponent } from './nav-bar/menu-item/menu-item.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SideNavItemComponent } from './side-nav/side-nav-item/side-nav-item.component';
import { AddToFavoritesComponent } from './locations-weather/location-weather/location-weather-upper-section/location-weather-actions/add-to-favorites/add-to-favorites.component';
import {ReactiveFormsModule} from '@angular/forms';
import { LocationsWeatherComponent } from './locations-weather/locations-weather.component';
import { FavoriteLocationComponent } from './favorite-locations/favorite-location/favorite-location.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchComponent,
    LocationWeatherComponent,
    LocationWeatherUpperSectionComponent,
    LocationWeatherSmallComponent,
    LocationWeatherActionsComponent,
    ForcastLocationItemComponent,
    FavoriteLocationsComponent,
    MenuItemComponent,
    SideNavComponent,
    SideNavItemComponent,
    AddToFavoritesComponent,
    LocationsWeatherComponent,
    FavoriteLocationComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        MaterialModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
