import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { PasswordPageComponent } from './pages/password-page/password-page.component';
import { ListPageComponent } from '../citas/pages/list-page/list-page.component';



//Se declara una constante routes
const routes: Routes =[
    {
        path: '',
        component:LayoutPageComponent,
        children:[
         {path:'login', component:LoginPageComponent},
         {path: 'new-account',component:RegisterPageComponent},
         {path: 'forgot-password',component:PasswordPageComponent},
         {path: '**',redirectTo:'login',pathMatch: 'full'},
         {path: 'layout',component:ListPageComponent}

        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})


export class AuthRoutingModule {}
