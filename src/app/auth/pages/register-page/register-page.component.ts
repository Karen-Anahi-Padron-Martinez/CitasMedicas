import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      userType: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm_password: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit(): void {}

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')!.value === form.get('confirm_password')!.value ? null : { mismatch: true };
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe(
        response => {
          if (response.message === 'Usuario registrado exitosamente') {
            alert('Registro exitoso');
            this.router.navigate(['/auth/new-new-account']);// Redirigir al usuario a otra página o mostrar un mensaje de éxito
          } else {
            alert(response.message);
          }
        },
        error => {
          console.error('Error:', error);
          alert('Ocurrió un error al intentar registrarse');
        }
      );
    } else {
      alert('Por favor, complete todos los campos correctamente.');
    }
  }
  update(id: string, nombre: string, apellido: string, puesto: string, email: string, password: string) {
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
      Contraseña: password
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
