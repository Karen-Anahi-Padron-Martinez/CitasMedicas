import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {

  public sidebarItems = [
    {label:'Citas',icon:'label', url:'./list'},
    {label:'Historial del citas',icon:'manage_search', url:'./new-cita'},
    {label:'Horario', icon: 'schedule', url:'./search'},
    {label:'Añadir Usuario', icon: 'person_add', url:'./agregar'},
    {label:'Actualizar y Eliminar', icon: 'sync', url:'./update'},
    {label: 'Lista Alumnos', icon: 'lists', url:'./lista'}
  ]
}
