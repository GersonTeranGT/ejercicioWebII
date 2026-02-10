import { Component, inject, signal } from '@angular/core';
import { MascotaService } from '../../services/mascota-service';
import { Pet } from '../../models/pet';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mascotas',
  imports: [],
  templateUrl: './mascotas.html',
  styleUrl: './mascotas.css',
})
export class Mascotas {
  //inyeccion del servicio de mascotas
  private mascotaServicio = inject(MascotaService);

  //signal: variable reactiva de angular le va siguiendo el rastro cuando esta se inicia
  mascotas = signal<Pet[]>([]);

  ngOnInit(): void {
    //me suscribo al observable despertar al observable
    this.mascotaServicio.getMascotas().subscribe(datos => {
      this.mascotas.set(datos.data)
    })
  }

  alerta(){
    Swal.fire({
      title: '¡Gracias por elegirme!',
      text: 'Tu nueva aventura comienza aquí 🐾',
      icon: 'success',
      confirmButtonText: 'Cerrar',
      confirmButtonColor: '#6366f1'
    });

  }

}
