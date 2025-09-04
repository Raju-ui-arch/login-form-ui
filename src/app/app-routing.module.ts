import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : 'customer',
    loadChildren: () =>
      import('./features/customer/customer/customer.module').then(m => m.CustomerModule) ///lazy loading
  },
  {
    path : 'admin',
    loadChildren: () => 
      import('./features/admin/admin/admin.module').then(m => m.AdminModule) ///lazy loading
  },
  {path: '', redirectTo: 'customer', pathMatch: 'full'}, //default route
  {path: '**', redirectTo: 'customer'} //wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
