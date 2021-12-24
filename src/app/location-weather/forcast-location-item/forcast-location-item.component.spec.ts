import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcastLocationItemComponent } from './forcast-location-item.component';

describe('ForcastLocationItemComponent', () => {
  let component: ForcastLocationItemComponent;
  let fixture: ComponentFixture<ForcastLocationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForcastLocationItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForcastLocationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
