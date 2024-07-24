import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      remember: [false]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Aquí puedes agregar la lógica para manejar el inicio de sesión
      console.log(this.loginForm.value);
      this.router.navigate(['/citas/citas']);
    } else {
      // Si el formulario no es válido, muestra los errores
      this.loginForm.markAllAsTouched();
    }
  }
}
