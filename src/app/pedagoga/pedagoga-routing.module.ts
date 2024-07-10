import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { PagePedadogaComponent } from './pages/page-pedadoga/page-pedadoga.component';
import { RegisterPageComponent } from '../auth/pages/register-page/register-page.component';
import { HistoryComponent } from './pages/history/history.component';
import { HorarioComponent } from './pages/horario/horario.component';
import { ListPageComponent } from '../citas/pages/list-page/list-page.component';

const routes: Routes = [
  {path: '',
    component: LayoutPageComponent,
  children:[
    {path:'pedagoga', component:PagePedadogaComponent},
    {path:'agendar', component:ListPageComponent},
    {path:'agregar', component:RegisterPageComponent},
    {path:'historial', component:HistoryComponent},
    {path:'horario', component:HorarioComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedagogaRoutingModule { }
