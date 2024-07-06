import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { PasswordPageComponent } from './pages/password-page/password-page.component';
import { PrincipalPageComponent } from './pages/principal-page/principal-page.component';




//Se declara una constante routes
const routes: Routes =[
    {
        path: '', component:LayoutPageComponent,
        
        children:[
        {path: 'principal', component:PrincipalPageComponent},
        {path:'login', component:LoginPageComponent},
         {path: 'new-account',component:RegisterPageComponent},
         {path: 'forgot-password',component:PasswordPageComponent},
         {path: '**',redirectTo:'login',pathMatch: 'full'},
         

        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})


export class AuthRoutingModule {}
