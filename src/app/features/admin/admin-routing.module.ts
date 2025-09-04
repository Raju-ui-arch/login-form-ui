import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { TwoFactorComponent } from './components/two-factor/two-factor.component';

const routes: Routes = [
  {
    path: '', //localhost:4200/admin
    component: AdminLoginComponent //main component for admin module
  },
  {
    path: '', //localhost:4200/admin/2fa
    component: TwoFactorComponent //2fa component for admin module
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
