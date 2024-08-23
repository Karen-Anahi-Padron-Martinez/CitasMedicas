import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HorarioService } from '../../../services/horario.service';

export interface SearchElement {
  day: string;
  startTime: string;
  endTime: string;
}

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: ``
})
export class SearchPageComponent implements OnInit{
  title = 'form';
  today!: string;
  times!: string[];
  currentDate!: string;
  selectedDate!: Date;

  constructor(private router: Router, private horarioService: HorarioService) {}

  ngOnInit(): void {
    const now = new Date();
    this.today = now.toISOString().split('T')[0];
    this.times = this.generateTimes();
    this.currentDate = now.toLocaleDateString('es-ES');
  }

  generateTimes(): string[] {
    const times = [];
    for (let hour = 8; hour <= 16; hour++) {
      const time = hour.toString().padStart(2, '0') + ':00';
      times.push(time);
    }
    return times;
  }

  displayedColumns: string[] = ['day', 'startTime', 'endTime'];
  dataSource: SearchElement[] = [
    { day: 'Lunes', startTime: '09:00', endTime: '17:00' },
    { day: 'Martes', startTime: '09:00', endTime: '17:00' },
    { day: 'Miércoles', startTime: '09:00', endTime: '17:00' },
    { day: 'Jueves', startTime: '09:00', endTime: '17:00' },
    { day: 'Viernes', startTime: '09:00', endTime: '17:00' },
    { day: 'Sábado', startTime: '10:00', endTime: '14:00' },
    { day: 'Domingo', startTime: '', endTime: '' },
  ];

  
  // Modifica el método save para navegar a la pantalla de mostrar horarios
  save() {
    console.log('Horarios guardados', this.dataSource);
    // Navegar a la nueva pantalla pasando los datos de horarios
    this.router.navigate(['/auth/principal'], { state: { schedule: this.dataSource } });
  }
}

