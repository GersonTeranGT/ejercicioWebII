import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';

//rouet: ruta a a que quiere ingresar el usuario
//satate: le da la ruta completa a donde quiere ir el usuario
export const authGuard: CanActivateFn = (route, state) => {

  //inyeccion
  const servicioAuth = inject(AuthService);
  const router = inject(Router);
  if (servicioAuth.sesionIniciada()) {
    return true;
  }
  return router.parseUrl('login')
  
};
