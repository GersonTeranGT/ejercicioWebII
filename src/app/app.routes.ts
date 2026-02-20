import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Acerca } from './features/acerca/acerca';
import { Consultas } from './features/consultas/consultas';
import { Mascotas } from './shared/mascotas/mascotas';
import { Usuarios } from './features/usuarios/usuarios';
import { FormularioCuenta } from './shared/formulario-cuenta/formulario-cuenta';
import { Login } from './shared/login/login';
import { authGuard } from './guards/auth-guard';
import { adminMatchGuard, empleadoMatchGuard, publicMatchGuard } from './guards/match-guard';
import { authGuardGuard } from './guards/outh-guard-guard';
import { childGuardGuard } from './guards/child-guard-guard';


export const routes: Routes = [
    //1. ruta incial
    {path:'', component:Home, canMatch: [publicMatchGuard]},
    {path:'consultas', component:Consultas, canMatch:[empleadoMatchGuard], canActivateChild:[childGuardGuard],
        children:[
            //{path:'ver', component:[Consultas]}
        ]
    },

    {path:'', canActivateChild:[childGuardGuard], 
        children:[
            {path:'mascotas', component:Mascotas, canMatch:[empleadoMatchGuard]},
    ]
},
    //2. rutas de navegacion
    {path:'acerca', component:Acerca, canMatch: [publicMatchGuard]},
    //path para las consultas
    // rutas de autenticacion solo sin sesion
    {path:'login', component:Login, canMatch: [publicMatchGuard]},
    {path:'crearCuenta', component:FormularioCuenta, canMatch: [publicMatchGuard]},
    // rutas solo para empleado - el admin y el empleado pueden verlas
    
    
    
    {path:'registro', component:Usuarios, canActivate:[authGuard], canMatch:[adminMatchGuard], canDeactivate
        :[authGuardGuard]
    },
    
    //3. redireccion si el usuario escribe una url no existe
    //{path:'**', component:Pagina404}
];
