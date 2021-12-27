import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-location-weather-small',
  templateUrl: './location-weather-small.component.html',
  styleUrls: ['./location-weather-small.component.scss']
})
export class LocationWeatherSmallComponent implements OnInit {
  readonly codeToFlagCDN: string = "https://flagcdn.com/108x81";
  @Input('upperSectionData') upperSectionData: any;
  linkToFlag: string = '';

  ngOnInit(): void {
    this.linkToFlag = `${this.codeToFlagCDN}/${this.upperSectionData.Country.toLowerCase()}.png`;
  }
}
