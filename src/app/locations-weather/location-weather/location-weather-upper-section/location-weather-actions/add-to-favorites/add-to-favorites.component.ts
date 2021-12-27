import {ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {LocationWeatherService} from '../../../../../services/location-weather.service';

@Component({
  selector: 'app-add-to-favorites',
  templateUrl: './add-to-favorites.component.html',
  styleUrls: ['./add-to-favorites.component.scss']
})
export class AddToFavoritesComponent implements OnInit, OnDestroy {
  private interval: any;
  beenSelectedAsFav: boolean;
  @Input('locationkey') locationKey: string;


  constructor(private locationWeatherService: LocationWeatherService,
              private cd: ChangeDetectorRef) { }


  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.listenToFavChanges();
    },
      300);
  }

  listenToFavChanges(): boolean {
      if (this.locationWeatherService.isFavoriteLocation(this.locationKey)) {
        return this.beenSelectedAsFav = true;
      }
      return this.beenSelectedAsFav = false;
    }

  toggleFavState(): void {
   this.locationWeatherService.toggleFavorites(this.locationKey)
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

}
