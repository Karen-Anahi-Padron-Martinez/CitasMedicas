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
    this.authService.getPsicopedagogias().subscribe(data => {
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

  update(id: string, nombre: string, apellido: string, puesto: string, email: string) {
    const numericId = Number(id);
    if (isNaN(numericId)) {
      console.error('El ID debe ser un número');
      return;
    }
    const data = {
      NombreP: nombre,
      ApellidoP: apellido,
      Puesto: puesto,
      EmailP: email,
      
    };
    this.authService.updatePsicopedagogia(numericId, data).subscribe(response => {
      console.log('Registro actualizado:', response);
    });
  }
  delete(id: string) {
    const numericId = Number(id);
    if (isNaN(numericId)) {
      console.error('El ID debe ser un número');
      return;
    }
    this.authService.deletePsicopedagogia(numericId).subscribe(response => {
      console.log('Registro eliminado:', response);
    });
  }
}
