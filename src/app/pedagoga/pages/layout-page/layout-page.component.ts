import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {

  public sidebarItems = [
  {label:'Citas',icon:'label', url:'./agendar'},
  {label:'Historial del citas',icon:'manage_search', url:'./historial'},
  {label:'Horario', icon: 'schedule', url:'./horario'},
  {label:'Añadir Usuario', icon: 'person_add', url:'./agregar'},
  ]
}