import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';

//guardian para rutas publicas (home, acerca, login crearcuenta)
export const publicMatchGuard: CanMatchFn = (route, segments) => {
  //inyeccion del authService que tine al usuario logueado
  const servicioAuth = inject(AuthService);
  const router = inject(Router);

  //redirigir si hay una sesion y tratamos de ir al login o a las otras ventanas
  if (servicioAuth.sesionIniciada()) {
    if (route.path === 'login' || route.path == 'crearCuenta') {
      return router.parseUrl('mascotas');
    }
  }
  return true;
};

export const empleadoMatchGuard: CanMatchFn = (route, segments) => {
  //inyeccion del authService que tine al usuario logueado
  const servicioAuth = inject(AuthService);
  const router = inject(Router);
  //verificamos si ay una sesion=> redirigir al login
  if (!servicioAuth.sesionIniciada()) {
    return router.parseUrl('login');
  };

  //ADMIN y EMPLEADO pueden ver estas rutas
  if (servicioAuth.rolActual() === 'ADMIN' || servicioAuth.rolActual() === 'EMPLEADO') {
    return true;
  }
  return false;
}


export const adminMatchGuard: CanMatchFn = (route, segments) => {
  //inyeccion del authService que tine al usuario logueado
  const servicioAuth = inject(AuthService);
  const router = inject(Router);

  // verificamos si hay sesion y redirigimos al login
  if (!servicioAuth.sesionIniciada()) {
    return router.parseUrl('login');
  };

  //solo el admin podra ver estas rutas
  if (servicioAuth.rolActual() === 'ADMIN') {
    return true;
  }

  //si es empleado redirigir a mascotas
  return router.parseUrl('mascotas');
}
