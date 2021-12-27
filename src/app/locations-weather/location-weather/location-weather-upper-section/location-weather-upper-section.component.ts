import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-location-weather-upper-section',
  templateUrl: './location-weather-upper-section.component.html',
  styleUrls: ['./location-weather-upper-section.component.scss']
})
export class LocationWeatherUpperSectionComponent implements OnInit {
  @Input('upperSectionData') upperSectionData: any;
  @Input('cityKey') cityKey: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.cityKey);
    if (this.upperSectionData) {
      this.upperSectionData = {
        "Key": this.cityKey,
        "Temperature": this.upperSectionData[0].Temperature,
        "WeatherText": this.upperSectionData[0].WeatherText,
        "Country": this.upperSectionData.countryId
      }
    }
  }
}
