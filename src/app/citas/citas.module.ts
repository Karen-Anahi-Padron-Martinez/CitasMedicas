import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitasRoutingModule } from './citas-routing.module';
import { CitaPageComponent } from './pages/cita-page/cita-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { MaterialModule } from '../material/material.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';


@NgModule({
  declarations: [
    CitaPageComponent,
    ListPageComponent,
    NewPageComponent,
    LayoutPageComponent,
    SearchPageComponent,
    
  ],
  imports: [
    CommonModule,
    CitasRoutingModule,
    MaterialModule
  ]
})
export class CitasModule { }
