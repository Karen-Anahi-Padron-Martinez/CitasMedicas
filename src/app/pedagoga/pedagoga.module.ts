import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedagogaRoutingModule } from './pedagoga-routing.module';
import { PagePedadogaComponent } from './pages/page-pedadoga/page-pedadoga.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MaterialModule } from '../material/material.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { HistoryComponent } from './pages/history/history.component';
import { HorarioComponent } from './pages/horario/horario.component';

@NgModule({
  declarations: [
    PagePedadogaComponent,
    LayoutPageComponent,
    HistoryComponent,
    HorarioComponent
  ],
  imports: [
    CommonModule,
    PedagogaRoutingModule,
    MaterialModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavContainer,

    RouterModule
  ]
})
export class PedagogaModule { }
