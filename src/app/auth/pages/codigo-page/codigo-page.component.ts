import { Component } from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './codigo-page.component.html',
  styles: ''
 
})
export class CodigoPageComponent {
    code: string = '';
  submittedCode: string | null = null;

  onSubmit() {
    this.submittedCode = this.code;
  }
}