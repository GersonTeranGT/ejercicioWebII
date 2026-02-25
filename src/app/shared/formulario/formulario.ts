import { Component, inject, OnInit, signal } from '@angular/core';
import { UsuarioServicio } from '../../services/usuario-servicio';
import { Usuario } from '../../models/usuario';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';
import { Salir } from '../../guards/outh-guard-guard';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario implements OnInit{
  //inyeccion de servicio
  private servicioUsuario = inject(UsuarioServicio)
  //cambio canDeactivate
  private router = inject(Router)

  //inyeccion servivox de autenticacion
  public servicioAuth = inject(AuthService);

  //significa que angular va a estar pendiente 
  listaUsuarios = signal<Usuario[]>([]);

  //variable
  editando = false;

  //usuario que vamos a guardar en la lista
  nuevoUsuario: Usuario = {
    nombre: '',
    email: '',
    password: '',
    rol: 'ROLE_VETERINARIO'
  };

  ngOnInit(): void {
    //llamar al metodo obtenerUSUARIOS
    this.obtenerUsuarios();
  }


  //metodo obtener usuarios
  obtenerUsuarios() {
    this.servicioUsuario.getUsuarios().subscribe(usuarios => {
      this.listaUsuarios.set(usuarios);
    })
  }


  finalizarYSalir(){
    this.obtenerUsuarios();
    this.resetear();
    this.router.navigate(['/'])
  }

  //cambio canDeactivate
  // permitirSalir(): boolean {
  //   const datosIntroducidos = 
  //   (this.nuevoUsuario.nombre?.trim() ?? '') !== ''||
  //   (this.nuevoUsuario.email?.trim() ?? '') !== '' ||
  //   (this.nuevoUsuario.phone?.trim() ?? '') !== '';

  //   if (this.editando || datosIntroducidos) {
  //     return confirm('Tienes cambios si guardar en el formulario. ¿Desaeas salir?')
  //   }
  //   return true;
  // }
  //metodo guardar usuario
  guardarUsuario() {
    //cambio canDeactivate
    const accion = this.editando? 'Actualizar': 'Registrar';
    
      
    
    if (this.editando && this.nuevoUsuario.id) {
      this.servicioUsuario.putUsuario(this.nuevoUsuario.id, this.nuevoUsuario).subscribe(() => {
        this.obtenerUsuarios();
        this.resetear();
      })
    } else {
      this.servicioUsuario.postUsuario(this.nuevoUsuario).subscribe(() => {
        this.obtenerUsuarios();
        this.resetear();
      })
    }
  
  }

  //metodo para eliminar
  eliminarUsuario(id: number) {
    if (confirm('¿Desea eliminar el registro?')) {
      //despertamos a la funcion deleteUsuario
      this.servicioUsuario.deleteUsuario(id).subscribe(() => {
        this.obtenerUsuarios();
      });
    }
  }

  //metodo para mostrar o seleccionar los datos del usuario en el formulario
  seleccionarParaEditar(user: Usuario) {
    this.editando = true;
    this.nuevoUsuario = { ...user };
  }

  //metodo para limpiar el formualario
  resetear() {
    this.editando = false;
    this.nuevoUsuario = {
      nombre: '',
      email: '',
      password: '',
      rol: 'ROLE_VETERINARIO'
    }
  }


  // //guardar usuario
  // guardarUsuario() {
  //   this.servicioUsuario.postUsuario(this.nuevoUsuario).subscribe(usuarioId => {
  //     //operador (...)Spread Operator combina el nuevo uusario con la lista de usuarios
  //     this.listaUsuarios.set([usuarioId, ...this.listaUsuarios()])
  //     Swal.fire({
  //       title: '¡Usuario ha sido registrado!',
  //       text: 'Bienvenido a nuestra comunidad🐾',
  //       icon: 'success',
  //       confirmButtonText: 'Cerrar',
  //       confirmButtonColor: '#4cf170'
  //     });
  //     //limpiar el formulario
  //     this.nuevoUsuario = {
  //       name: '',
  //       email: '',
  //       phone: ''
  //     }
  //   })
  // }
}
