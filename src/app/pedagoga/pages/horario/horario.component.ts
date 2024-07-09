import { Component } from '@angular/core';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrl: './horario.component.css'
})
export class HorarioComponent {
  horarios = [
    {hora:'08:00-09:00', Lunes:'libre', Martes:'ocupada', Miercoles:'ocupada', Jueves:"libre", Viernes:"act.Admin"},
    {hora:'09:00-10:00', Lunes:'ocupada', Martes:'ocupada', Miercoles:'ocupada', Jueves:"ocupada", Viernes:"act.Admin"},
    {hora:'10:00-11:00', Lunes:'act.Admin', Martes:'libre', Miercoles:'ocupada', Jueves:"ocupada", Viernes:"act.Admin"},
    {hora:'11:00-12:00', Lunes:'ocupada', Martes:'ocupada', Miercoles:'ocupada', Jueves:"ocupada", Viernes:"ocupada"},
    {hora:'12:00-13:00', Lunes:'ocupada', Martes:'ocupada', Miercoles:'libre', Jueves:"ocupada", Viernes:"ocupada"},
    {hora:'13:00-14:00', Lunes:'act.Admin', Martes:'libre', Miercoles:'ocupada', Jueves:"ocupada", Viernes:"ocupada"},
    {hora:'14:00-15:00', Lunes:'ocupada', Martes:'ocupada', Miercoles:'act.Admin', Jueves:"ocupada", Viernes:"ocupada"},
    {hora:'15:00-16:00', Lunes:'ocupada', Martes:'ocupada', Miercoles:'ocupada', Jueves:"ocupada", Viernes:"ocupada"},
    {hora:'16:00-17:00', Lunes:'ocupada', Martes:'ocupada', Miercoles:'ocupada', Jueves:"ocupada", Viernes:"ocupada"},
  ] 

}
