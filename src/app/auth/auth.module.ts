import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../material/material.module';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { PasswordPageComponent } from './pages/password-page/password-page.component';
import { PrincipalPageComponent } from './pages/principal-page/principal-page.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CodigoPageComponent } from './pages/codigo-page/codigo-page.component';
import { MatCardModule } from '@angular/material/card';
import { ResetPageComponent } from './pages/reset-page/reset-page.component';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    PrincipalPageComponent,
    LayoutPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    PasswordPageComponent,
    CodigoPageComponent,
    ResetPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
   
    
  ]
})
export class AuthModule { }
