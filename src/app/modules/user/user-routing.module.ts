import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApartmentdetailpageComponent } from './apartmentdetailpage/apartmentdetailpage.component';
import { ApartmentselectionpageComponent } from './apartmentselectionpage/apartmentselectionpage.component';
import { BookingdetailComponent } from './bookingdetail/bookingdetail.component';
import { BookingdetailtwoComponent } from './bookingdetailtwo/bookingdetailtwo.component';
import { BookingschedulepageComponent } from './bookingschedulepage/bookingschedulepage.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { UserHomeComponent } from './home/user-home/user-home.component';
import { ProfileSafetyComponent } from './profile-safety/profile-safety.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { ReviewpageComponent } from './reviewpage/reviewpage.component';


const routes: Routes = [
    {path: 'apartments',component:ApartmentselectionpageComponent},
    {path: 'reviewpages',component:ReviewpageComponent},
    {path: 'apartmentdetailpages',component:ApartmentdetailpageComponent},
    {path: 'bookingdetails',component:BookingdetailComponent},
    {path: 'profile-safetys',component:ProfileSafetyComponent},
    {path: 'bookingschedulepages',component:BookingschedulepageComponent},
    {path: 'profilepages' ,component:ProfilepageComponent},
    {path: 'home',component:UserHomeComponent},
    {path: 'edpro',component:EditprofileComponent},
    {path: 'bookingdetailtwo',component:BookingdetailtwoComponent},
    ///
    {path: 'apartmentdetailpages/:amId',component:ApartmentdetailpageComponent},

    {path: 'bookingdetails/:apartmentId',component:BookingdetailComponent},
]



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UserRoutingModule { }