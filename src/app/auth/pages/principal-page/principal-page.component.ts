import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EstudianteService } from '../../../services/estudiante.service';
import { PsicoService } from '../../../services/psico.service';

@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.component.html',
  styleUrls: ['./principal-page.component.css']
})
export class PrincipalPageComponent implements OnInit {
  today!: string;
  times!: string[];
  currentDate!: string;
  selectedDate!: Date;
  estudiantes: any[] = [];
  studentForm!: FormGroup;
  psicologos: any[] = [];

  constructor(
    private fb: FormBuilder,
    private estudianteService: EstudianteService,
    private router: Router,
    private psicoService: PsicoService
  ) {
    this.studentForm = this.fb.group({
      id: [null],
      nombre: ['', [Validators.required]],
      area: ['', [Validators.required]],
      grupo: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      numero: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    const now = new Date();
    this.today = now.toISOString().split('T')[0];
    this.times = this.generateTimes();
    this.currentDate = now.toLocaleDateString('es-ES');
    this.loadEstudiantes();
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

  generateTimes(): string[] {
    const times = [];
    for (let hour = 8; hour <= 16; hour++) {
      const time = hour.toString().padStart(2, '0') + ':00';
      times.push(time);
    }
    return times;
  }

  loadEstudiantes(): void {
    this.estudianteService.getEstudiantes().subscribe(
      (data: any[]) => {
        this.estudiantes = data;
      },
      err => console.error(err)
    );
  }

  onSubmit(): void {
    if (this.studentForm.valid) {
      const formValue = this.studentForm.value;
  
      if (formValue.id === null) {
        this.estudianteService.createEstudiante(formValue).subscribe(
          (response: any) => {
            console.log('Estudiante creado exitosamente', response);
            if (response.IdUsuario) {
              const id = response.IdUsuario;
              this.router.navigate([`/auth/hacercita/${id}`]);
            }
            this.loadEstudiantes();
            this.resetForm();
          },
          (error: any) => {
            console.error('Error al crear estudiante', error);
          }
        );
      } else {
        this.estudianteService.updateEstudiante(formValue.id, formValue).subscribe(
          (response: any) => {
            console.log('Estudiante actualizado exitosamente', response);
            this.loadEstudiantes();
            this.resetForm();
          },
          (error: any) => {
            console.error('Error al actualizar estudiante', error);
          }
        );
      }
    }
  }
  

  onEdit(id: number): void {
    this.estudianteService.getEstudiante(id).subscribe(
      (estudiante: any) => {
        this.studentForm.setValue({
          id: estudiante.IdUsuario ?? null,
          nombre: estudiante.nombre || '',
          area: estudiante.area || '',
          grupo: estudiante.grupo || '',
          email: estudiante.email || '',
          numero: estudiante.numero || '',
          dia: estudiante.dia || '',
          hora: estudiante.hora || '',
          psico: estudiante.psico || ''
        });
      },
      err => console.error('Error al obtener estudiante', err)
    );
  }

  onDelete(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este registro?')) {
      this.estudianteService.deleteEstudiante(id).subscribe(
        () => {
          console.log('Estudiante eliminado exitosamente');
          this.loadEstudiantes();
        },
        (error: any) => {
          console.error('Error al eliminar estudiante', error);
        }
      );
    }
  }

  resetForm(): void {
    this.studentForm.reset({
      id: null,
      nombre: '',
      area: '',
      grupo: '',
      email: '',
      numero: '',
      dia: '',
      hora: '',
      psico: ''
    });
  }
}
