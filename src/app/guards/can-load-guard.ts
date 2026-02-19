import { CanActivateFn } from '@angular/router';

export const canLoadGuard: CanActivateFn = (route, state) => {
  return true;
};
