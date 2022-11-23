/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BookingdetailtwoComponent } from './bookingdetailtwo.component';

describe('BookingdetailtwoComponent', () => {
  let component: BookingdetailtwoComponent;
  let fixture: ComponentFixture<BookingdetailtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingdetailtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingdetailtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
