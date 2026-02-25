import { inject, Injectable, signal } from '@angular/core';
import { UsuarioServicio } from './usuario-servicio';

import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {


  private servicioUsuario = inject(UsuarioServicio);
  private http = inject(HttpClient);
  private API_URL = "http://localhost:8080/login";

  //localStorage: almacenaremos usuario y rol
  sesionIniciada = signal<boolean>(localStorage.getItem('sesion') == 'true');

  //acccedemos al rol del usuario
  rolActual = signal<string | null>(localStorage.getItem('rol'));




  login(email: string, passw: string): Observable<boolean> {
    return this.http.post<Usuario | null>(this.API_URL, {email, password:passw}).pipe(
      map(usuarioCoinside => {
        //const usuarioCoinside = usuarios.find(u => u.email === email && u.password === password);
        if (usuarioCoinside) {
          localStorage.setItem('sesion', 'true');
          //guardar los datos convertiendo el objeto json a texto
          localStorage.setItem('user', JSON.stringify(usuarioCoinside));
          //guardar el rol
          localStorage.setItem('rol', usuarioCoinside.rol);
          this.rolActual.set(usuarioCoinside.rol);

          this.sesionIniciada.set(true);
          return true;
        }
        return false;
      })

    )
  }

  logout() {
    localStorage.removeItem('sesion');
    localStorage.removeItem('user');
    localStorage.removeItem('rol')
    this.sesionIniciada.set(false);
    this.rolActual.set(null)
  }
}
