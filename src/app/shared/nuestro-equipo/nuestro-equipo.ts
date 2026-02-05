import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';



@Component({
  selector: 'app-nuestro-equipo',
  imports: [ CommonModule, NgClass],
  templateUrl: './nuestro-equipo.html',
  styleUrl: './nuestro-equipo.css',
})
export class NuestroEquipo {

  equipos=[
    {
      id: 1,
      nombre: "Dra. María González",
      foto: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
      profesion: "Cardiólogo",
      edad: 33
    },
    {
      id:2,
      nombre: "Dr. Jhon Adams",
      foto:"https://images.pexels.com/photos/6235017/pexels-photo-6235017.jpeg",
      profesion: "Cardiólogo",
      edad: 30
    },
    {
      id:3,
      nombre: "Dr. Angel Domingues",
      foto:"https://images.pexels.com/photos/10559203/pexels-photo-10559203.jpeg",
      profesion: "Dermatólogo",
      edad: 26
    },
    {
      id:4,
      nombre: "Dra. Sofia Pérez",
      foto:"https://images.pexels.com/photos/6234975/pexels-photo-6234975.jpeg",
      profesion: "Odontólogo",
      edad: 20
    },
  ]
}
