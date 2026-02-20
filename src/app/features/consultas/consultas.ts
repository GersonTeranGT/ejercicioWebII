import { Component } from '@angular/core';
import { Mascota } from '../../models/mascota';
import { DetalleMascota } from "../../shared/detalle-mascota/detalle-mascota";
import { HeroInformacion } from "../../shared/hero-informacion/hero-informacion";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-consultas',
  imports: [DetalleMascota, HeroInformacion, RouterLink],
  templateUrl: './consultas.html',
  styleUrl: './consultas.css',
})
export class Consultas {
  mascotas = [
    {
      id: 1,
      nombre: "Pochita",
      especie: "Chanchito perrito",
      historial: "Vacunas al día"
    },
    {
      id: 2,
      nombre: "Pirichi",
      especie: "Bad Bunny",
      historial: "Requiere desparacitación"
    },
    {
      id: 3,
      nombre: "Sr. Flint",
      especie: "Pingüino",
      historial: "Requiere rehabilitación"
    },
  ]

  mascotaSeleccionada: Mascota | null = null;

  //variable
  mensajeActivo: string = "";

  verDetalles(mascota: Mascota) {
    this.mascotaSeleccionada = mascota;
  }

  //funcion que recibe un mensaje del componenete hijo
  //gestiona el evento enviado del componnet hijo
  procesarAviso(mensaje:string){
    this.mensajeActivo= mensaje;
  }
}
