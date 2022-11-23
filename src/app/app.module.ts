import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminRoutingModule } from './modules/admin/admin-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminService } from './modules/admin/admin.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserRoutingModule } from './modules/user/user-routing.module';
import { UserService } from './modules/user/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from './modules/register/register.service';
import { LoginService } from './modules/home/login/login.service';
import { ApartmentService } from './modules/apartment/apartment.service';
import { ApartmentRoutingModule } from './modules/apartment/apartment-routing.module';

@NgModule({
  declarations: [
    AppComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    UserRoutingModule,
    ReactiveFormsModule,
    ApartmentRoutingModule,
    FormsModule,
  ],
  providers: [AdminService,RegisterService,LoginService,UserService,ApartmentService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
