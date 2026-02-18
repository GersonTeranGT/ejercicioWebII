import { CanActivateFn } from '@angular/router';

//rouet: ruta a a que quiere ingresar el usuario
//satate: le da la ruta completa a donde quiere ir el usuario
export const authGuard: CanActivateFn = (route, state) => {
  return false;
};
