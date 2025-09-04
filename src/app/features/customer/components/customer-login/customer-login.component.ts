import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-customer-login', // Component tag name used in HTML
  templateUrl: './customer-login.component.html', // Link to the HTML template
  styleUrls: ['./customer-login.component.scss'] // Link to styles specific for this component
})
export class CustomerLoginComponent {

  isCustomerPortal: boolean = true;

  // Step 1: Define a form group variable to hold form data
  loginForm: FormGroup;

  // Step 2: Inject Angular's FormBuilder service into the constructor
  constructor(private fb: FormBuilder) {
    // Step 3: Initialize the form group with fields and validations
    this.loginForm = this.fb.group({
      // Username is required
      username: ['', Validators.required],
      // Password is required
      password: ['', Validators.required],
      // Remember me is a boolean checkbox, default is false
      rememberMe: [false]
    });
  }

  // Step 4: Function called when form is submitted
  onSubmit() {
    // Check if form is valid before submission
    if (this.loginForm.valid) {
      // Print the form values to console (later this will call an API)
      console.log('Form Submitted:', this.loginForm.value);
    } else {
      // If form is invalid, show an error in console
      console.log('Form is invalid, please fill in all required fields.');
    }
  }

  onForgotPassword() {
    console.log('Forgot Password clicked');
  }

  onGoogleLogin() {
    console.log('Google login clicked');
  }

  onFacebookLogin() {
    console.log('Facebook login clicked');
  }

  onTwitterLogin() {
    console.log('Twitter login clicked');
  }

  onGitHubLogin() {
    console.log('GitHub login clicked');
  } 

  onSignUp() {
    console.log('Sign Up clicked');
  }

  onAdminLogin() {
    this.isCustomerPortal = false;
    console.log('Admin Portal clicked');
  }

  onCustomerLogin() {
    this.isCustomerPortal = true;
    console.log('Customer Portal clicked');
  }
}
