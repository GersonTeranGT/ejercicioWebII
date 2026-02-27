import { inject, Injectable, signal } from '@angular/core';
import { UsuarioServicio } from './usuario-servicio';

import { map, Observable, tap } from 'rxjs';
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




  login(email: string, password: string): Observable<any> {
  return this.http.post<any>(this.API_URL, { email, password }).pipe(
    //Permite que Angular mire lo que viene en la respuesta del servidor
    tap(res => {
      if (res && res.token) {
        localStorage.setItem('token', res.token);
        localStorage.setItem('rol', res.rol);
        this.rolActual.set(res.rol);
        this.sesionIniciada.set(true);
      }
    })
  );
}


  logout() {
    localStorage.removeItem('sesion');
    localStorage.removeItem('user');
    localStorage.removeItem('rol');
    localStorage.removeItem('token');
    this.sesionIniciada.set(false);
    this.rolActual.set(null)
  }
}
