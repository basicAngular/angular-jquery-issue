import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ForgetPasswordComponent, LoginComponent]
})
export class AuthModule { }
