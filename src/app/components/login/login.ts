import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginForm: FormGroup = new FormGroup({});
  mensajeExito: string = '';
  mensajeError: string = '';
  flg_enviando:boolean = false;
  flg_mostrarDebug: boolean = false;

  constructor(private fb: FormBuilder){
    this.loginForm = fb.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(6)]]
    });
  }

  get email(){
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password');
  }

  onSubmit(){
    this.mensajeError = '';
    this.mensajeExito = '';

    if(this.loginForm.valid){
      this.flg_enviando = true;

      console.log('Datos del formulario', this.loginForm.value);

      setTimeout(()=>{

        const formData = this.loginForm.value;
        const email = formData.email;
        const password = formData.password;

        if(email === 'admin@test.com' && password === 'password'){
          this.mensajeExito = 'Login exitoso. Redirigiendo...';
          this.loginForm.reset();
        }else{
          this.mensajeError = 'Credenciales inválidas. Inténtalo de nuevo.';
        }

        this.flg_enviando = false;
      }, 2000)

    }else{
      this.loginForm.markAllAsTouched();
      this.mensajeError = 'Por favor, completa el formulario correctamente.';
    }
  }

  hasError(ControlName: string, errorType: string): boolean{
    const control = this.loginForm.get(ControlName);
    return !!(control && control.hasError(errorType) && (control.dirty || control.touched));
  }

  isFildInvalid(controlName: string): boolean{
    const control = this.loginForm.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }


  
}
