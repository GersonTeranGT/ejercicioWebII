import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/pet';

//injectable hace que se pueda utilizar en toda la aplicacion
@Injectable({
  providedIn: 'root',
})
export class MascotaService {
  private http = inject(HttpClient);

  //link de la api
  private API_PET = 'https://www.mockdog.dev/api/dogs'

  //metodo para leer los datos de la api
  //usamos observable para dar un tratamineto a las conecciones, caja de dats que llega 
  //en el futuro
  getMascotas():Observable<ApiResponse>{
    return this.http.get<ApiResponse>(this.API_PET)
  }
}
