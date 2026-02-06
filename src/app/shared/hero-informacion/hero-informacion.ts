import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-informacion',
  imports: [],
  templateUrl: './hero-informacion.html',
  styleUrl: './hero-informacion.css',
})
export class HeroInformacion {
  @Input() titulo!: string;
  @Input() imagen!: string;
}
