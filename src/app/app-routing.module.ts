import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
}, {
    path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
}, {
    path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
},
{   path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
},
{   path: 'apartment', loadChildren: () => import('./modules/apartment/apartment.module').then(m => m.ApartmentModule)
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }