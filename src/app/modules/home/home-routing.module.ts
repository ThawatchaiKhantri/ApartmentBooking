import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { RegisterapartmentComponent } from '../registerapartment/registerapartment.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
    },
    {
      path: 'login',
      component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
        },
        {
          path: 'registerapartment',
          component: RegisterapartmentComponent
          }
        
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
