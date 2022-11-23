import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSafetyComponent } from './profile-safety.component';

describe('ProfileSafetyComponent', () => {
  let component: ProfileSafetyComponent;
  let fixture: ComponentFixture<ProfileSafetyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSafetyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
