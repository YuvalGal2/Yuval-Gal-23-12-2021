import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {StateService} from '../services/shared/state.service';
import {DataService} from '../services/shared/data.service';
import {MenuItem} from '../models/menu-item.model';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @ViewChild("sidenav", { static: true }) public sidenav: MatSidenav;
  @Input('menuItems') menuItems: MenuItem[] = [];
  constructor(
    private stateService: StateService,
  ) { }
  ngOnInit(): void {
    this.listenToAppStateChanges();
  }

  private listenToAppStateChanges(): void {
    this.stateService.getSideNavState().subscribe((openState: boolean) => {
      this.handleStateChange(openState);
    });
  }
  private handleStateChange(openSideNavState: boolean): void {
    switch (openSideNavState) {
      case true:
        this.sidenav.open();
        break;
      case false:
        this.sidenav.close();
        break;
    }
  }
}
