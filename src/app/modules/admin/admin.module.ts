import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminService } from './admin.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ShowdetailComponent } from './showdetail/showdetail.component';
import { ApartmentDetailComponent } from './apartment-detail/apartment-detail.component';
import { ShowaprtmentdetailComponent } from './showaprtmentdetail/showaprtmentdetail.component';
import { AddroleComponent } from './addrole/addrole.component';
import { AppapartmentComponent } from './appapartment/appapartment.component';
import { ShowdetailtwoService } from './showdetailtwo/showdetailtwo.service';
import { ShowdetailtwoComponent } from './showdetailtwo/showdetailtwo.component';
import { AdmindetailapartmentService } from './admindetailapartment/admindetailapartment.service';
import { AdmindetailapartmentComponent } from './admindetailapartment/admindetailapartment.component';

@NgModule({
  declarations: [
    HomeComponent,
    ShowdetailComponent,
    ApartmentDetailComponent,
    ShowaprtmentdetailComponent,
    AddroleComponent,
    AppapartmentComponent,
    ShowdetailtwoComponent,
    AdmindetailapartmentComponent


  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
 providers: [AdminService,ShowdetailtwoService,AdmindetailapartmentService]
})
export class AdminModule { }
