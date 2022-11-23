import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddroleComponent } from './addrole/addrole.component';
import { AdmindetailapartmentComponent } from './admindetailapartment/admindetailapartment.component';
import { ApartmentDetailComponent } from './apartment-detail/apartment-detail.component';
import { AppapartmentComponent } from './appapartment/appapartment.component';
import { HomeComponent } from './home/home.component';
import { ShowaprtmentdetailComponent } from './showaprtmentdetail/showaprtmentdetail.component';
import { ShowdetailComponent } from './showdetail/showdetail.component';
import { ShowdetailtwoComponent } from './showdetailtwo/showdetailtwo.component';




const routes: Routes = [
  {path: 'homeadmin',component:HomeComponent},
  {path: 'apartmentdetail',component:ApartmentDetailComponent},

  {path: 'showdetail',component:ShowdetailComponent},
  {path: 'showdetail/:userId',component:ShowdetailComponent},

  {path: 'showapartmentdetail',component:ShowaprtmentdetailComponent},
  {path: 'showapartmentdetail/:userId',component:ShowaprtmentdetailComponent},

  {path: 'appapartmentyes',component:AppapartmentComponent},
  {path: 'appapartmentyes/:userId',component:AppapartmentComponent},

  {path: 'addrole',component:AddroleComponent},

  {path: 'showdetailtwo',component:ShowdetailtwoComponent},
  {path: 'showdetailtwo/:userId',component:ShowdetailtwoComponent},
  

  {path: 'admindetailapartment',component:AdmindetailapartmentComponent},
  {path: 'admindetailapartment/:userId',component:AdmindetailapartmentComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }