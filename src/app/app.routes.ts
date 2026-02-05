import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Acerca } from './features/acerca/acerca';

export const routes: Routes = [
    //1. ruta incial
    {path:'', component:Home},
    //2. rutas de navegacion
    {path:'acerca', component:Acerca}
    //3. redireccion si el usuario escribe una url no existe
    //{path:'**', component:Pagina404}
];
