import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentdetailpageComponent } from './apartmentdetailpage.component';

describe('ApartmentdetailpageComponent', () => {
  let component: ApartmentdetailpageComponent;
  let fixture: ComponentFixture<ApartmentdetailpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApartmentdetailpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentdetailpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
