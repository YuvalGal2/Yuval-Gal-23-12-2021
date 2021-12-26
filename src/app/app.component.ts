import {Component, OnInit} from '@angular/core';
import {StateService} from './services/shared/state.service';
import {DataService} from './services/shared/data.service';
import {MenuItem} from './models/menu-item.model';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'challange';
  env = environment;
  menuItems: MenuItem[] = [];
  constructor(
    private stateService: StateService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.fetchMenuData();
    this.stateService.getFavoritesLocations();
  }

  fetchMenuData(): void {
    this.dataService.sendRequest('./assets/mockData/menu-data.json','get').subscribe((res) => {
      this.menuItems = res;
    })
  }


}

