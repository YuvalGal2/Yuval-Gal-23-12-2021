import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-forcast-location-item',
  templateUrl: './forcast-location-item.component.html',
  styleUrls: ['./forcast-location-item.component.scss']
})
export class ForcastLocationItemComponent implements OnInit {
  @Input('forcastData') forcastData: any;
  constructor() { }

  private getDayName(dateStr: string): string  {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { weekday: 'long' });
  }
  private trimDateFromDataObject() {
    this.forcastData.dateOnly = this.forcastData.Date.split('T');
  }
  ngOnInit(): void {
    this.forcastData.dateOnly = this.getDayName(this.forcastData.Date);
    console.log(this.forcastData.dateOnly );
  }

}
