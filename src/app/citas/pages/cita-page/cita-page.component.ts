import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PerfilService } from '../../../services/perfil.service';

@Component({
  selector: 'cita-page-pedadoga',
  templateUrl: './cita-page.component.html',
  styleUrls: ['./cita-page.component.css']
})
export class CitaPageComponent {
    
  psicologa: any = {};

  constructor(private perfilService: PerfilService) {}

  psicloga={
    img:"https://cdn.pixabay.com/photo/2014/03/24/17/19/teacher-295387_1280.png"
    
  }

  ngOnInit(): void {
      const userId = 1; // Cambia esto según la lógica de tu aplicación
      this.perfilService.getPerfil(userId).subscribe(data => {
          this.psicologa = data;
      });
  }
}
