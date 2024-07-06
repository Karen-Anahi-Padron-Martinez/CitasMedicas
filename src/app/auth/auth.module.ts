import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../material/material.module';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { PasswordPageComponent } from './pages/password-page/password-page.component';
import { PrincipalPageComponent } from './pages/principal-page/principal-page.component';


@NgModule({
  declarations: [
    PrincipalPageComponent,
    LayoutPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    PasswordPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule
  ]
})
export class AuthModule { }
