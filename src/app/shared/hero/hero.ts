import { Component, Input } from '@angular/core';
import { NgClass } from "../../../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  //los dato vacios que llenaremos en cada uso del componente
  @Input() titulo!: string;
  @Input() subtitulo!: string;
  @Input() descripcion!: string;
  @Input() imagen!: string;
  @Input() colorFondo!: string;
}
