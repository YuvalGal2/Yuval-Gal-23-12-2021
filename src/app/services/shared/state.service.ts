import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private sideNavObs = new Subject<boolean>();
  private sideNavState: boolean = false;
  constructor() { }

   setSideNavState(openState:boolean = this.sideNavState): void {
    if (openState === undefined) {
      this.sideNavObs.next(openState);
      this.sideNavState = openState;
    }
    else {
      // if not asked for specific state, toogle it.
      this.sideNavObs.next(!openState);
      this.sideNavState = !openState;
    }
  }

  getSideNavState(): Observable<boolean> {
    return this.sideNavObs;
  }
}
