import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingschedulepageComponent } from './bookingschedulepage.component';

describe('BookingschedulepageComponent', () => {
  let component: BookingschedulepageComponent;
  let fixture: ComponentFixture<BookingschedulepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingschedulepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingschedulepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
