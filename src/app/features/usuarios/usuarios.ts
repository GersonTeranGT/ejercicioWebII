import { Component } from '@angular/core';
import { HeroInformacion } from "../../shared/hero-informacion/hero-informacion";
import { Formulario } from "../../shared/formulario/formulario";

@Component({
  selector: 'app-usuarios',
  imports: [HeroInformacion, Formulario],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios {
  
}
