import { Component } from '@angular/core';

export interface history{
  nombre:String,
  estatus:String,
  fecha:Date,
  hora:String
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})

export class HistoryComponent {
  history: history[]
   = [
    {nombre:'Abel', estatus:'Cancelada', fecha:new Date('10/07/2024'), hora:'10:30'},
    {nombre:'Juan', estatus:'Vencida', fecha:new Date('04/07/2024'), hora:'08:30'},
    {nombre:'María', estatus:'Pendiente', fecha:new Date('09/07/2024'), hora:'08:30'},
    {nombre:'Erick', estatus:'Cancelada', fecha:new Date('03/07/2024'), hora:'09:30'},
    {nombre:'Guadalupe', estatus:'Pendiente', fecha:new Date('12/07/2024'), hora:'08:30'},
  ] 
}
