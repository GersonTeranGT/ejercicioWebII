import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Acerca } from './features/acerca/acerca';
import { Consultas } from './features/consultas/consultas';
import { Mascotas } from './shared/mascotas/mascotas';
import { Usuarios } from './features/usuarios/usuarios';
import { FormularioCuenta } from './shared/formulario-cuenta/formulario-cuenta';

export const routes: Routes = [
    //1. ruta incial
    {path:'', component:Home},
    //2. rutas de navegacion
    {path:'acerca', component:Acerca},
    //path para las consultas
    {path:'consultas', component:Consultas},
    {path:'mascotas', component:Mascotas},
    {path:'crearCuenta', component:FormularioCuenta},
    {path:'registro', component:Usuarios},
    //3. redireccion si el usuario escribe una url no existe
    //{path:'**', component:Pagina404}
];
