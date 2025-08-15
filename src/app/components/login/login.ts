import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  mensajeExito: string = '';
  mensajeError: string = '';
  flg_enviando:boolean = false;
  flg_mostrarDebug: boolean = false;

  onSubmit(form: NgForm){
    this.mensajeError = '';
    this.mensajeExito = '';

    if(form.valid){
      this.flg_enviando = true;

      console.log('Datos del Formulario:', form.value);

      setTimeout(() =>{

        const email = form.value.email;
        const password = form.value.password;

        if(email === 'admin@test.com' && password === 'password'){
          this.mensajeExito = 'Inicio de sesión exitoso';
          form.reset();
        }else{
          this.mensajeError = 'Credenciales incorrectas';
        }

        this.flg_enviando = false;
      }, 2000)
    }else{
      this.mensajeError = 'Por favor, complete todos los campos requeridos.';
    }

  }

  // toggleDebug() {
  //   this.flg_mostrarDebug = !this.flg_mostrarDebug;
  // }


  
}
