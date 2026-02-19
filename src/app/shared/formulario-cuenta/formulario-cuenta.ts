import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-cuenta',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-cuenta.html',
  styleUrl: './formulario-cuenta.css',
})
export class FormularioCuenta {
  private fb = inject(FormBuilder);
  reglaEmail = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  //reglaPassword = '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$';

  formCuenta = this.fb.group(
    {
      email: ['', [Validators.required, Validators.pattern(this.reglaEmail)]],
      //password: ['', [Validators.required, Validators.pattern(this.reglaPassword)]],
      //passwordConfirmation: ['', [Validators.required]]
      comentario: ['', [Validators.required]]
    },

  );

  // //metodo para la validacion
  // validarClaves(control:AbstractControl): ValidationErrors | null{
  //   const clave1 = control.get('password')?.value;
  //   const clave2 = control.get('passwordConfirmation')?.value;

  //   return clave1 === clave2 ? null : {noCoinciden:true};
  // }


  //metodo para mostrar los errores personalizados
  mostrarErros(campo: string, tipoError: string): boolean {
    const input = this.formCuenta.get(campo);

    if (input && input.invalid && input.touched) {
      return input.hasError(tipoError)
    }
    return false;
  }


  // enviarDatos() {
  //   if (this.formCuenta.valid) {
  //     alert('Enviado con exito');
  //     console.log(this.formCuenta.value);
  //   } else {
  //     alert('El formulario tiene errores, corrige antes de continuar');
  //   }

  // }

  registrar() {
    if (this.formCuenta.valid) {
      //CREAR UN OBJETO ESPECIAL QUE FORMATEA LOS DATOS DEL FORMULARIO
      //COMO UNA URL (email%juanito)
      const contenido = new URLSearchParams();
      contenido.set('form-name', 'contacto');

      contenido.set('email', this.formCuenta.value.email ?? '');
      contenido.set('comentario', this.formCuenta.value.comentario ?? '');

      //promise: funcion especial de JS qu se usa para hacer peticiones HTTP a travez de la red
      fetch('/', {
        method: 'POST',
        //indicar qu los datos que se van a enviar estan codificados como una url no como json
        headers: { 'Content-Type': "application/x-www-form-urlencoded" },
        //cnvertir todo el objeto a un acadena de texto lista para enviarse
        body: contenido.toString()
      })
        //si la promesa se cumple
        .then(() => {
          alert('El comentario se ha enviado con exito');
          this.formCuenta.reset();
        })
        //si la promesa no se cumple
        .catch((error) => 
          console.log("No se pueden enviar los datos", error)
    )

    }
  }
}
