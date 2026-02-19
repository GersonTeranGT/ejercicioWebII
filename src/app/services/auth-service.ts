import { inject, Injectable, signal } from '@angular/core';
import { UsuarioServicio } from './usuario-servicio';

import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  
  private servicioUsuario = inject(UsuarioServicio);

  //localStorage: almacenaremos usuario y rol
  sesionIniciada = signal<boolean>(localStorage.getItem('sesion')== 'true');

  //acccedemos al rol del usuario
  rolActual = signal<string | null>(localStorage.getItem('rol'));




  login(email: string, password:string): Observable<boolean>{
    return this.servicioUsuario.getUsuarios().pipe(
      map(usuarios =>{
        const usuarioCoinside = usuarios.find(u => u.email === email && u.password === password);
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

  logout(){
    localStorage.removeItem('sesion');
    localStorage.removeItem('user');
    localStorage.removeItem('rol')
    this.sesionIniciada.set(false);
    this.rolActual.set(null)
  }
}
