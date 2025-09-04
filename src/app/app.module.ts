import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthCardComponent } from './shared/components/auth-card/auth-card.component';
import { IconInputComponent } from './shared/components/icon-input/icon-input.component';
import { PasswordToggleComponent } from './shared/components/password-toggle/password-toggle.component';
import { SocialButtonComponent } from './shared/components/social-button/social-button.component';
import { CustomerLoginComponent } from './features/customer/components/customer-login/customer-login.component';
import { AdminLoginComponent } from './features/admin/components/admin-login/admin-login.component';
import { TwoFactorComponent } from './features/admin/components/two-factor/two-factor.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthCardComponent,
    IconInputComponent,
    PasswordToggleComponent,
    SocialButtonComponent,
    CustomerLoginComponent,
    AdminLoginComponent,
    TwoFactorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
