import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PsicoService {
  private apiUrl = 'http://localhost:3000/psico';

  constructor(private http: HttpClient) { }

  getPsicologos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}