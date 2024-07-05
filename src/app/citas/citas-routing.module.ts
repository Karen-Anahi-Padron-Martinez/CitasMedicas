import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { CitaPageComponent } from './pages/cita-page/cita-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children:[
      {path:'new-cita', component:NewPageComponent},
      {path: 'search',component:SearchPageComponent},
      {path: 'edit/:id',component: NewPageComponent},
      {path:'list',component: ListPageComponent},
      {path: ':id',component: CitaPageComponent},
      {path: '**',redirectTo: 'List'}



    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitasRoutingModule { }

