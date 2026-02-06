import { Component } from '@angular/core';
import { Hero } from '../../shared/hero/hero';
import { Card } from '../../shared/card/card';
import { Servicios } from '../../shared/servicios/servicios';
import { Pacientes } from '../../shared/pacientes/pacientes';
import { Informacion } from "../../shared/informacion/informacion";
import { NuestroEquipo } from "../../shared/nuestro-equipo/nuestro-equipo";


@Component({
  selector: 'app-home',
  imports: [Hero, Card, Servicios, Pacientes, Informacion, NuestroEquipo],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
