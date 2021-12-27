import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-location-weather-upper-section',
  templateUrl: './location-weather-upper-section.component.html',
  styleUrls: ['./location-weather-upper-section.component.scss']
})
export class LocationWeatherUpperSectionComponent implements OnInit {
  @Input('upperSectionData') upperSectionData: any;
  @Input('cityKey') cityKey: string;

  ngOnInit(): void {
    if (this.upperSectionData) {
      this.upperSectionData = {
        "Key": this.cityKey,
        "Temperature": this.upperSectionData.Temperature,
        "WeatherText": this.upperSectionData.WeatherText,
        "Country": this.upperSectionData.countryId
      }
    }
  }
}
