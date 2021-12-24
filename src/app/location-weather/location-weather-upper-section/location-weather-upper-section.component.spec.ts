import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationWeatherUpperSectionComponent } from './location-weather-upper-section.component';

describe('LocationWeatherUpperSectionComponent', () => {
  let component: LocationWeatherUpperSectionComponent;
  let fixture: ComponentFixture<LocationWeatherUpperSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationWeatherUpperSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationWeatherUpperSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
