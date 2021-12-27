import {Component, OnInit} from '@angular/core';
import {StateService} from './services/shared/state.service';
import {DataService} from './services/shared/data.service';
import {MenuItem} from './models/menu-item.model';
import {environment} from '../environments/environment';
import {MatDialog} from '@angular/material/dialog';
import {MessageModalComponent} from './message-modal/message-modal.component';

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
    private dataService: DataService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.fetchMenuData();
    this.stateService.getFavoritesLocations();
    this.listenForErrors();
  }

  listenForErrors(): void {
    this.dataService.getRequestErrorsObs().subscribe((error) => {
      console.log(error);
      this.openErrorDialog(error);
    })
  }
  private openErrorDialog(error: any ): void {
    const dialogRef = this.dialog.open(MessageModalComponent, {
      width: '250px',
      data: {dialogHeader:error.status, dialogContent:error.error.Message}
    });
  }
  fetchMenuData(): void {
    this.dataService.sendRequest('./assets/mockData/menu-data.json','get').subscribe((res) => {
      this.menuItems = res;
    })
  }


}

