import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  anio: number = new Date().getFullYear();

  //arreglo de objetos
  enlaces = [
    {
      texto:"Home", link: "#"
    },
    {
      texto:"Acerca", link: "acerca"
    },
    {
      texto:"Consultas", link: "consultas"
    },
    {
      texto:"Mascotas", link: "#"
    },
    {
      texto:"Contacto", link: "#"
    },
    {
      texto:"Registro", link: "#"
    },
  ];

}
