/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BankpageComponent } from './bankpage.component';

describe('BankpageComponent', () => {
  let component: BankpageComponent;
  let fixture: ComponentFixture<BankpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
