import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-informacion',
  imports: [],
  templateUrl: './informacion.html',
  styleUrl: './informacion.css',
})
export class Informacion {
@Input() titulo!:string;
@Input() titulo1!:string;
@Input() titulo2!:string;
@Input() titulo3!:string;
@Input() descripcion1!: string;
@Input() descripcion2!: string;
@Input() descripcion3!: string;
}
