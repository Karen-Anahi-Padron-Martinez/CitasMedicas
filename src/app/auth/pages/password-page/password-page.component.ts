import { Component } from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './password-page.component.html',
  styles: ''
 
})
export class PasswordPageComponent {
  code: string = '';
  submittedCode: string | null = null;

  onSubmit() {
    this.submittedCode = this.code;
  }

}