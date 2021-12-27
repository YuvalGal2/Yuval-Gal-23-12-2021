import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsWeatherComponent } from './locations-weather.component';

describe('LocationsWeatherComponent', () => {
  let component: LocationsWeatherComponent;
  let fixture: ComponentFixture<LocationsWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationsWeatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
