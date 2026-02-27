import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { FormsModule } from "@angular/forms";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  email:string = '';
  password:string='';

  private servicioAuth= inject(AuthService);

  private router = inject(Router)

  iniciarSesion() {
  this.servicioAuth.login(this.email, this.password).subscribe({
    //Se activa si la respuesta de la api fue 200 OK.
    next: () => {
      alert('Registro exitoso');
      this.router.navigate(['/usuarios']);
    },
    //Se activa si la api rechazó la petición 403, 404, 500.
    error: () => alert('Usuario o contraseña incorrectos')
  });
}


  cerrarSesion(){
    this.servicioAuth.logout();
    alert('Sesión cerrada')
    this.router.navigate([''])
  }

}
