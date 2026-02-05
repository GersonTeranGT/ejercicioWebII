import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pacientes',
  imports: [FormsModule, CommonModule],
  templateUrl: './pacientes.html',
  styleUrl: './pacientes.css',
})
export class Pacientes {
  nombreFiltro:string ='';

  pacientes=[
    {
      nombre: "Pochita",
      especie: "Chanchito perrito",
      urgencia: "Alta",
      recuperacion: 85
    },
    {
      nombre: "Pirichi",
      especie: "Bad Bunny",
      urgencia: "Baja",
      recuperacion: 40
    },
    {
      nombre: "Sr. Flint",
      especie: "Pinguino",
      urgencia: "Media",
      recuperacion: 10
    },
  ];
}
