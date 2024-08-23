import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CitasService } from '../../../services/citas.services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstudianteService } from '../../../services/estudiante.service';

@Component({
  selector: 'new-list-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.css']
})
export class NewPageComponent implements OnInit {
  citas: any = [];
  studentForm: FormGroup;

  constructor(
    private router: Router,
    private citasService: CitasService,
    private estudianteService: EstudianteService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.studentForm = this.fb.group({
      id: [null],
      psico: ['', Validators.required],
      dia: ['', Validators.required],
      hora: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadCitas();
  }

  loadCitas(): void {
    this.citasService.getCitasPsicologo().subscribe(
      resp => {
        console.log(resp);
        this.citas = resp;
      },
      err => console.error(err)
    );
  }

  onSubmit(): void {
    if (this.studentForm.valid) {
      const formValue = this.studentForm.value;
      const citaData = {
        IdUsuario: formValue.id,
        IdPsico: formValue.psico,
        FechaCita: formValue.dia,
        HoraC: formValue.hora
      };

      if (formValue.id === null) {
        this.estudianteService.createEstudiante(formValue).subscribe(
          (response: any) => {
            console.log('Estudiante creado exitosamente', response);
            this.createCita(citaData);
          },
          (error: any) => {
            console.error('Error al crear estudiante', error);
          }
        );
      } else {
        this.estudianteService.updateEstudiante(formValue.id, formValue).subscribe(
          (response: any) => {
            console.log('Estudiante actualizado exitosamente', response);
            this.createCita(citaData);
          },
          (error: any) => {
            console.error('Error al actualizar estudiante', error);
          }
        );
      }
    }
  }

  onDelete(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este registro?')) {
      this.citasService.deleteCita(id).subscribe(
        () => {
          console.log('Cita eliminada exitosamente');
          this.citas = this.citas.filter((cita: any) => cita.IdCita !== id); // Remove the deleted cita from the array
        },
        (error: any) => {
          console.error('Error al eliminar cita', error);
        }
      );
    }
  }

  createCita(citaData: any): void {
    this.citasService.postCita(citaData).subscribe(
      (response: any) => {
        console.log('Cita creada exitosamente', response);
        this.reloadPage();  // Reload the page after creating the appointment
      },
      (error: any) => {
        console.error('Error al crear cita', error);
      }
    );
  }

  reloadPage(): void {
    window.location.reload();  // Reload the entire page
  }
}
