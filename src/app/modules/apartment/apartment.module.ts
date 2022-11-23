import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApartmentService } from './apartment.service';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApartmentRoutingModule } from './apartment-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { EdilProfileapartmentComponent } from './edit-profileapartment/edit-profileapartment.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddapartmentComponent } from './addapartment/addapartment.component';
import { EditProfileapartmentService } from './edit-profileapartment/edit-profileapartment.service';
import { ShowaprtmentComponent } from './showaprtment/showaprtment.component';
import { EditapartmentComponent } from './editapartment/editapartment.component';
import { BankpageComponent } from './bankpage/bankpage.component';
import { ShowbankComponent } from './showbank/showbank.component';
import { BrowserModule } from '@angular/platform-browser';
import { AllBookingComponent } from './all-booking/all-booking.component';


@NgModule({

  declarations: [ 
    HomeComponent,
    EdilProfileapartmentComponent,
    AddapartmentComponent,
    ShowaprtmentComponent,
    EditapartmentComponent,
    ShowbankComponent,
    BankpageComponent,
    AllBookingComponent

  ],


  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ApartmentRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [ApartmentService,EditProfileapartmentService]
})
export class ApartmentModule { }
