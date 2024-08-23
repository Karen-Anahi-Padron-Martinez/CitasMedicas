import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  updateForm!: FormGroup;
  deleteForm!: FormGroup;
  registros: any[] = [];  // Propiedad para almacenar los registros

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      id: [{value: '', disabled: true}],  // Desactivar el campo ID para que no sea editable
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellido: ['', [Validators.required, Validators.minLength(2)]],
      puesto: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

    this.deleteForm = this.fb.group({
      id: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    });

    this.cargarRegistros();  // Cargar los registros al iniciar el componente
  }

  cargarRegistros(): void {
    this.authService.getPsicopedagogia().subscribe(data => {
      this.registros = data;
    });
  }

  seleccionarRegistro(registro: any): void {
    this.updateForm.patchValue({
      id: registro.IdPsico,
      nombre: registro.NombreP,
      apellido: registro.ApellidoP,
      puesto: registro.Puesto,
      email: registro.EmailP
    });
  }

  update(): void {
    if (this.updateForm.invalid) {
      console.error('Formulario de actualización no válido');
      return;
    }

    const id = this.updateForm.get('id')?.value;
    const data = this.updateForm.getRawValue();  // Obtener los valores del formulario, incluido el ID desactivado

    this.authService.updatePsicopedagogia(Number(id), data)
      .subscribe(response => {
        console.log('Registro actualizado:', response);
        this.cargarRegistros();  // Recargar la lista de registros
      });
  }

  delete(): void {
    if (this.deleteForm.invalid) {
      console.error('Formulario de eliminación no válido');
      return;
    }

    const id = this.deleteForm.value.id;
    this.authService.deletePsicopedagogia(Number(id))
      .subscribe(response => {
        console.log('Registro eliminado:', response);
        this.cargarRegistros();  // Recargar la lista de registros
      });
  }
}
