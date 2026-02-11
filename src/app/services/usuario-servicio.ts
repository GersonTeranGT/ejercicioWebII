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

  private API_URL = "https://698c757a21a248a27361a287.mockapi.io/usuarios"

  //metodo get
  //observable<: se usa cuando tenemos que establecer coneccion con una fuente de datos externa
  getUsuarios():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.API_URL)
  }

  //metodo post
  //observable<: se usa cuando tenemos que establecer coneccion con una fuente de datos externa
  postUsuario(usuario:Usuario):Observable<Usuario>{
    //a donde va y que va a guardar
    return this.http.post<Usuario>(this.API_URL, usuario);
  }

  //metodo buscar por id
  //observable<: se usa cuando tenemos que establecer coneccion con una fuente de datos externa
  getUsuarioById(id:number): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.API_URL}/${id}`)
  }


  //metodo put - tiene dos parametros
  putUsuario(id:number, usuario:Usuario): Observable<Usuario>{
    return this.http.put<Usuario>(`${this.API_URL}/${id}`, usuario)
  }

  //metodo delete
  deleteUsuario(id: number): Observable<void>{
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }
}
