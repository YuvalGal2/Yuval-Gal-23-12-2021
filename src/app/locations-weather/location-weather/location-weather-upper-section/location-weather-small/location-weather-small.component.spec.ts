import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationWeatherSmallComponent } from './location-weather-small.component';

describe('LocationWeatherSmallComponent', () => {
  let component: LocationWeatherSmallComponent;
  let fixture: ComponentFixture<LocationWeatherSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationWeatherSmallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationWeatherSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
