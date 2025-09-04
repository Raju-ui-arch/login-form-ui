import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerLoginComponent } from './components/customer-login/customer-login.component';

const routes: Routes = [
  {
    path : '', //default path for customer module
    component : CustomerLoginComponent //main component for customer module
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
