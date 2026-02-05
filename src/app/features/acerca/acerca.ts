import { Component } from '@angular/core';
import { Informacion } from "../../shared/informacion/informacion";
import { HeroInformacion } from "../../shared/hero-informacion/hero-informacion";
import { NuestroEquipo } from "../../shared/nuestro-equipo/nuestro-equipo";
import { Sucursales } from '../../shared/sucursales/sucursales';
import { Contactos } from '../../shared/contactos/contactos';

@Component({
  selector: 'app-acerca',
  imports: [Informacion, HeroInformacion, NuestroEquipo, Sucursales, Contactos],
  templateUrl: './acerca.html',
  styleUrl: './acerca.css',
})
export class Acerca {

}
