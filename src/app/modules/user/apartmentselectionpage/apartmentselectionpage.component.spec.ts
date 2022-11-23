import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentselectionpageComponent } from './apartmentselectionpage.component';

describe('ApartmentselectionpageComponent', () => {
  let component: ApartmentselectionpageComponent;
  let fixture: ComponentFixture<ApartmentselectionpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApartmentselectionpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentselectionpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
