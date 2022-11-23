import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeRoutingModule } from '../home/home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApartmentdetailpageComponent } from './apartmentdetailpage/apartmentdetailpage.component';
import { ApartmentselectionpageComponent } from './apartmentselectionpage/apartmentselectionpage.component';
import { BookingdetailComponent } from './bookingdetail/bookingdetail.component';
import { BookingschedulepageComponent } from './bookingschedulepage/bookingschedulepage.component';
import { UserHomeComponent } from './home/user-home/user-home.component';
import { ProfileSafetyComponent } from './profile-safety/profile-safety.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { ReviewComponent } from '../apartment/review/review.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { BookingdetailtwoComponent } from './bookingdetailtwo/bookingdetailtwo.component';

@NgModule({
  declarations: [
    ApartmentdetailpageComponent,
    ApartmentselectionpageComponent,
    BookingdetailComponent,
    BookingschedulepageComponent,
    UserHomeComponent,
    ProfileSafetyComponent,
    ProfilepageComponent,
    ReviewComponent,
    EditprofileComponent,
    BookingdetailtwoComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgbModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class UserModule { }
