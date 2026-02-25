import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiResponse } from '../models/pet';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioServicio {
  private http = inject(HttpClient)

  //private API_URL = "https://prueba-app-5bb53-default-rtdb.firebaseio.com";
  private API_URL = "http://localhost:8080/usuarios";

  // //metodo get
  //observable<: se usa cuando tenemos que establecer coneccion con una fuente de datos externa
  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.API_URL)
  }
  // getUsuarios(): Observable<Usuario[]>{
  //   return this.http.get<{[key:string]:Usuario}>(`${this.API_URL}/users.json`).pipe(
  //     map(respuesta => {
  //       if(!respuesta){
  //         return [];
  //       }
  //       return Object.keys(respuesta).map(id => {
  //         const usuarioConID={...respuesta[id], id:id};
  //         return usuarioConID
  //       })
  //     })
  //   )
  // }

  //metodo post
  //observable<: se usa cuando tenemos que establecer coneccion con una fuente de datos externa
  postUsuario(usuario: Usuario): Observable<Usuario> {
    //a donde va y que va a guardar
    return this.http.post<Usuario>(`${this.API_URL}/registrarUsuario`, usuario);
  }

  //metodo buscar por id
  //observable<: se usa cuando tenemos que establecer coneccion con una fuente de datos externa
  getUsuarioById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.API_URL}/${id}`)
  }


  //metodo put - tiene dos parametros
  putUsuario(id: number, usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.API_URL}/${id}`, usuario)
  }

  //metodo delete
  deleteUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }
}
