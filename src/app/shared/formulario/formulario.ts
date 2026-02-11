import { Component, inject, signal } from '@angular/core';
import { UsuarioServicio } from '../../services/usuario-servicio';
import { Usuario } from '../../models/usuario';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  //inyeccion de servicio
  private servicioUsuario = inject(UsuarioServicio)

  //significa que angular va a estar pendiente 
  listaUsuarios = signal<Usuario[]>([]);

  //variable
  editando = false;

  //usuario que vamos a guardar en la lista
  nuevoUsuario: Usuario = {
    name: '',
    email: '',
    phone: ''
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

  //metodo guardar usuario
  guardarUsuario() {
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
      name: '',
      email: '',
      phone: ''
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
