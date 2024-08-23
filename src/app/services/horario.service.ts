import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface SearchElement {
  day: string;
  startTime: string;
  endTime: string;
}

@Injectable({
  providedIn: 'root'
})
export class HorarioService {

  private apiUrl = 'http://localhost:3000/horarios'; // Asegúrate de que coincida con tu API

  constructor(private http: HttpClient) { }

  // Obtener los horarios
  getHorarios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Guardar un horario
  saveHorario(horario: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, horario);
  }

  // Actualizar un horario
  updateHorario(id: number, horario: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, horario);
  }
  saveSchedule(schedule: SearchElement[]): Observable<any> {
    return this.http.post(this.apiUrl, schedule);
  }
  
}

