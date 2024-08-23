import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PsicoService } from '../../services/psico.service';
import { CitasService } from '../../services/citas.services';
import { Cita } from '../../services/psico.model';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent implements OnInit {
  citaForm: FormGroup;
  psicologos: any[] = [];

  constructor(
    private fb: FormBuilder,
    private citasService: CitasService,
    private route: ActivatedRoute,
    private psicoService: PsicoService,
    private router: Router
  ) {
    // Definición del FormGroup con las validaciones
    this.citaForm = this.fb.group({
      IdPsico: ['', [Validators.required]],
      FechaCita: ['', [Validators.required]],
      HoraC: ['', [Validators.required]],
      IdUsuario: [{value: '', disabled: true}]  // Deshabilitado para no ser editado
    });
  }

  ngOnInit(): void {
    // Obtén el IdUsuario de los parámetros de la ruta
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.citaForm.get('IdUsuario')?.setValue(id);  // Asigna el IdUsuario del parámetro
      }
    });
    this.getPsicologos();
  }

  getPsicologos() {
    this.psicoService.getPsicologos().subscribe(
      resp => {
        this.psicologos = resp;
      },
      err => console.error(err)
    );
  }

  onSubmit(): void {
    if (this.citaForm.valid) {
        this.citaForm.get('IdUsuario')?.enable();
      console.log(this.citaForm.value); 
      const citaData: Cita = this.citaForm.value;

      this.citasService.postCita(citaData).subscribe(
        (response: Cita) => {
          console.log('Cita creada exitosamente', response);
          alert('Cita registrada exitosamente');
          this.router.navigate(['/auth/principal']);
        },
        (error: any) => {
          console.error('Error al crear cita', error);
        }
      );
    } else {
      console.error('Formulario inválido');
    }
  }

  resetForm(): void {
    this.citaForm.reset({
      IdPsico: '',
      FechaCita: '',
      HoraC: '',
      IdUsuario: this.citaForm.get('IdUsuario')?.value  // Mantén el IdUsuario en el formulario
    });
  }
}
