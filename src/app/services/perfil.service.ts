import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PerfilService {
    private apiUrl = 'http://localhost:3000/perfil'; // La URL de tu API

    constructor(private http: HttpClient) {}

    // Método para obtener el perfil por ID
    getPerfil(id: number): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/${id}`);
    }
}
