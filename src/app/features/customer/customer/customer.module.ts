import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { Routes } from '@angular/router';
import { CustomerLoginComponent } from '../components/customer-login/customer-login.component';

const  routes : Routes = [
  {
    path: '', component : CustomerLoginComponent ///localhost:4200/customer
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
