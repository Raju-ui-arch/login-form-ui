import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { Routes } from '@angular/router';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { TwoFactorComponent } from './components/two-factor/two-factor.component';

const routes : Routes = [
  {
    path: '', //default path for admin module
    component: AdminLoginComponent //main component for admin module
  },
  {
    path: '2fa', //path for 2fa component
    component: TwoFactorComponent //2fa component for admin module
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
