import { Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  usuario: User | null=null

  private auth = getAuth();

  login(email: string, password:string){
    signInWithEmailAndPassword(this.auth,email,password)
    //tomar toda la informacion 
    .then(respuesta => this.usuario=respuesta.user)
    .catch(err => console.error('No se puede iniciar sesión, revise sus credenciales', err.message))
  }

  logout(){
    //decims que cierre la sesion 
    signOut(this.auth);
    this.usuario=null;
  }
}
