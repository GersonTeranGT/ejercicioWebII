import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/pet';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioServicio {
  private http= inject(HttpClient)

  private API_URL = "https://jsonplaceholder.typicode.com/users"

  //metodo get
  //observable<: se usa cuando tenemos que establecer coneccion con una fuente de datos externa
  getUsuarios():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.API_URL)
  }

  //metodo post
  postUsuario(usuario:Usuario):Observable<Usuario>{
    //a donde va y que va a guardar
    return this.http.post<Usuario>(this.API_URL, usuario);
  }
}
