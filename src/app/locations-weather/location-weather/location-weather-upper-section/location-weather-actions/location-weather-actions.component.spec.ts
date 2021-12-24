import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationWeatherActionsComponent } from './location-weather-actions.component';

describe('LocationWeatherActionsComponent', () => {
  let component: LocationWeatherActionsComponent;
  let fixture: ComponentFixture<LocationWeatherActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationWeatherActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationWeatherActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
