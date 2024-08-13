// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
  register(user: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, user);
  }
  
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, { email, password });
    }
  
    updatePsicopedagogia(id: number, data: any): Observable<any> {
      return this.http.put(`${this.baseUrl}/update_psicopedagogia/${id}`, data);
    }
  
    deletePsicopedagogia(id: number): Observable<any> {
      return this.http.delete(`${this.baseUrl}/delete_psicopedagogia/${id}`);
    }
    // Método para obtener el perfil por ID
    //getPerfil(id: number): Observable<any> {
      //return this.http.get<any>(`${this.baseUrl}/${id}`);
   // }
    getRegistros(): Observable<any[]> { // Usa 'any[]' en lugar de 'Psicopedagogia[]'
      return this.http.get<any[]>(`${this.baseUrl}/psicopedagogia`);
    }
}


