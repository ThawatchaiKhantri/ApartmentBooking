import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddapartmentComponent } from './addapartment/addapartment.component';
import { AllBookingComponent } from './all-booking/all-booking.component';
import { BankpageComponent } from './bankpage/bankpage.component';
import { EdilProfileapartmentComponent } from './edit-profileapartment/edit-profileapartment.component';
import { EditapartmentComponent } from './editapartment/editapartment.component';
import { HomeComponent } from './home/home.component';
import { ReviewComponent } from './review/review.component';
import { ShowaprtmentComponent } from './showaprtment/showaprtment.component';
import { ShowbankComponent } from './showbank/showbank.component';


const routes: Routes = [
  {path: 'apartment-home',component:HomeComponent},
  {path: 'allboonking',component:AllBookingComponent},
  {path: 'banks',component:BankpageComponent},
  {path: 'editapartment',component:EditapartmentComponent},
  {path: 'editprofileapartment',component:EdilProfileapartmentComponent},
  {path: 'reviewapartment',component:ReviewComponent},
  {path: 'addapartment',component:AddapartmentComponent},
  {path: 'showapartment',component:ShowaprtmentComponent},
  {path: 'showbank',component:ShowbankComponent},

  {path: 'edit-apartment/:apartmentId',component:EditapartmentComponent},
];



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ApartmentRoutingModule { }