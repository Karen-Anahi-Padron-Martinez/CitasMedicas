import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {

  public sidebarItems = [
  {label:'Citas',icon:'label', url:'./list'},
  {label:'Historial del citas',icon:'add', url:'./new-cita'},
  {label:'Calendario y Horario', icon: 'search', url:'./search'},
  {label:'Añadir Usuario', icon: 'add', url:'#'},
  ]
}
