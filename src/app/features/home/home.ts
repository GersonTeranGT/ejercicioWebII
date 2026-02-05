import { Component } from '@angular/core';
import { Hero } from '../../shared/hero/hero';
import { Card } from '../../shared/card/card';
import { Servicios } from '../../shared/servicios/servicios';
import { Pacientes } from '../../shared/pacientes/pacientes';


@Component({
  selector: 'app-home',
  imports: [Hero, Card, Servicios, Pacientes],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
