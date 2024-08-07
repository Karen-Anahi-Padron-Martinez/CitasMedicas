import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren:() => import('./auth/auth.module').then(m => m.AuthModule),
  },
  
  {
    path: 'citas',
    loadChildren: () => import('./citas/citas.module').then(m=> m.CitasModule)
  },
  {
    path: 'pedagoga',
    loadChildren: () => import('./pedagoga/pedagoga.module').then(m=> m.PedagogaModule)
  },
  { path: '',
    redirectTo: 'auth/principal', 
    pathMatch: 'full' 
   },
  {
    path: '404',
    component: Error404PageComponent
  },
  {
    path: '',
    redirectTo: 'citas',
    pathMatch: 'full'

  },
  {
    path :'**',
    redirectTo:'404'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
