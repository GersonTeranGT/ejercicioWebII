import { CanDeactivateFn } from '@angular/router';
export interface Salir {
  permitirSalir:()=> boolean;
}
export const authGuardGuard: CanDeactivateFn<Salir> = (component, currentRoute, currentState, nextState) => {
  return component.permitirSalir ? component.permitirSalir():true;

};
