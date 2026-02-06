import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Mascota } from '../../models/mascota';

@Component({
  selector: 'app-detalle-mascota',
  imports: [],
  templateUrl: './detalle-mascota.html',
  styleUrl: './detalle-mascota.css',
})
//COMPONENTE HIJO
export class DetalleMascota {
  //recibe un parametro desde e coponente pare --> CONSULTAS
  @Input() mascota?: Mascota;

  //componnete hijo detalle envia en este caso un evento
  @Output() notificarAccion= new EventEmitter<string>();

  //metodo que se activara cuando haga click en el boton de componente hijo
  avisarIngreso():void{
    if (this.mascota) {
      this.notificarAccion.emit(
        `La mascota: ${this.mascota.nombre} ha sido llamada a consulta`,
      );
    }
  }
}
