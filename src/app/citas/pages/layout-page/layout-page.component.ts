import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {

  public sidebarItems = [
  {label:'Calendario y Horario',icon:'label', url:'./list'},
  {label:'Citas',icon:'add', url:'./new-cita'},
  {label:'Historial del citas', icon: 'search', url:'./search'},
  {label:'Añadir Usuario', icon: 'add', url:'#'},
  ]
}
