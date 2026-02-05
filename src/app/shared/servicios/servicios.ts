import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  imports: [],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
})
export class Servicios {

  subtitulo: string = "Cuidamos a los que más quieres con servicios de calidad.";
  //variable servicioSelleccionado que contenga ninguno
  servicioSeccionado: string = "ninguno";



  servicios = [
    {
      id: 1,
      nombre: "Consulta general",
      descripcion: "Evalucacion completa de tu mascota",
      imagen: "https://images.pexels.com/photos/6235124/pexels-photo-6235124.jpeg",
      activo: true
    },
    {
      id: 2,
      nombre: "Esterilización",
      descripcion: "Castramos sin dolor a tus mascotas",
      imagen: "https://images.pexels.com/photos/6234624/pexels-photo-6234624.jpeg",
      activo: true
    },
    {
      id: 3,
      nombre: "Estética",
      descripcion: "Cuidado del pelaje de tu mascota",
      imagen: "https://images.pexels.com/photos/23692684/pexels-photo-23692684.jpeg",
      activo: false
    },
    {
      id: 4,
      nombre: "Desparacitación",
      descripcion: "Desparacitacion de mascotas",
      imagen: "https://images.pexels.com/photos/6560385/pexels-photo-6560385.jpeg",
      activo: true
    }
  ];
  //variable serviciosFltrados para la busqueda
  serviciosFiltrados = this.servicios;

  //funcion para mostrar el mensaje "has mostrado interes en: "
  seleccionar(nombre: string) {
    this.servicioSeccionado = nombre;
  }

  //funcion para buscar servicios
  busqueda(event: Event){
    const valor = (event.target as HTMLInputElement).value;
    this.subtitulo=`Resultados para: ${valor}`;

    this.serviciosFiltrados= this.servicios.filter(s =>
      s.nombre.toLowerCase().includes(valor.toLowerCase())
    );
  }

}
