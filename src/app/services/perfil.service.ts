// src/app/services/perfil.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Psicologa } from '../citas/pages/interfaces/psicologa';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  private baseUrl = 'http://localhost:3000'; // Asegúrate de que esta URL es la correcta

  constructor(private http: HttpClient) {}

  getPerfil(idPsico: number): Observable<Psicologa> {
    return this.http.get<Psicologa>(`${this.baseUrl}/${idPsico}`);
  }
}
