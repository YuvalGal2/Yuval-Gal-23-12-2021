import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-location-weather-small',
  templateUrl: './location-weather-small.component.html',
  styleUrls: ['./location-weather-small.component.scss']
})
export class LocationWeatherSmallComponent implements OnInit {
  @Input('upperSectionData') upperSectionData: any;
   readonly codeToFlagCDN: string = "https://flagcdn.com/108x81";
   linkToFlag: string = '';
  constructor() { }

  ngOnInit(): void {
    console.log(this.upperSectionData);
    //
    this.linkToFlag = `${this.codeToFlagCDN}/${this.upperSectionData.countryId.toLowerCase()}.png`;
  }

}