import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cita } from './psico.model';


@Injectable({
  providedIn: 'root'
})
export class CitasService {
  private apiUrl = 'http://localhost:3000/citas';  // Ajusta la URL según tu API

  constructor(private http: HttpClient) { }

  postCita(cita: Cita): Observable<Cita> {
    return this.http.post<Cita>(this.apiUrl, cita);
  }
  
  getCitasPsicologo(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  deleteCita(id: number): Observable<any>{
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
