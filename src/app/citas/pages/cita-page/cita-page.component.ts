import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../../../services/perfil.service';
import { Psicologa } from '../interfaces/psicologa';

@Component({
  selector: 'cita-page-pedadoga',
  templateUrl: './cita-page.component.html',
  styleUrls: ['./cita-page.component.css']
})
export class CitaPageComponent implements OnInit {
    
  psicologa: Psicologa = {
    idPsico: 0,
    nombreP: '',
    apellidoP: '',
    puesto: '',
    emailP: ''
  };

  constructor(private perfilService: PerfilService) {}

  ngOnInit(): void {
    const userId = this.getUserId(); // Obtiene el ID del usuario desde localStorage

    if (userId !== null) {
      this.perfilService.getPerfil(userId).subscribe(data => {
        this.psicologa = data;
      }, error => {
        console.error('Error al obtener el perfil:', error);
      });
    } else {
      console.error('No se pudo obtener el ID del usuario.');
    }
  }

  getUserId(): number | null {
    const userId = localStorage.getItem('userId');
    return userId ? +userId : null;
  }
}
