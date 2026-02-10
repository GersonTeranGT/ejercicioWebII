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
  private servicioUsuario = inject(UsuarioServicio)

  //significa que angular va a estar pendiente 
  listaUsuarios = signal<Usuario[]>([]);

  //usuario que vamos a guardar en la lista
  nuevoUsuario: Usuario = {
    name: '',
    email: '',
    phone:''
  };

  ngOnInit(): void {
    //llamar al metodo obtenerUSUARIOS
    this.obtenerUsuarios();
  }


  //metodo obtener usuarios
  obtenerUsuarios(){
    this.servicioUsuario.getUsuarios().subscribe(usuarios =>{
      this.listaUsuarios.set(usuarios);
    })
  }

  //guardar usuario
  guardarUsuario(){
    this.servicioUsuario.postUsuario(this.nuevoUsuario).subscribe(usuarioId => {
      //operador (...)Spread Operator combina el nuevo uusario con la lista de usuarios
      this.listaUsuarios.set([usuarioId, ...this.listaUsuarios()])
      Swal.fire({
          title: '¡Usuario ha sido registrado!',
          text: 'Bienvenido a nuestra comunidad🐾',
          icon: 'success',
          confirmButtonText: 'Cerrar',
          confirmButtonColor: '#4cf170'
        });
      //limpiar el formulario
      this.nuevoUsuario= {
        name: '',
        email: '',
        phone: ''
      }
    })
  }

}
