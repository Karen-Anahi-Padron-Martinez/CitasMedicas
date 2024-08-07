import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      remember: [false]
    });
  }

  ngOnInit(): void {}
  onSubmit() {
    
      if (this.loginForm.valid) {
        const { email, password } = this.loginForm.value;
        this.authService.login(email, password).subscribe(
          response => {
            if (response.message === 'Registro agregado') {
              alert('Login exitoso');
              console.log(response.registro);
              this.router.navigate(['/citas/layout']);// Puedes redirigir al usuario a otra página aquí
            } else {
              alert(response.message);
            }
          },
          error => {
            console.error('Error:', error);
            alert('Ocurrió un error al intentar iniciar sesión');
          }
        );
      } else {
        alert('Por favor, complete todos los campos correctamente.');
    }
  }
}
