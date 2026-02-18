import { Component, inject, Input } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { AuthService } from '../../services/auth-service';
import { Login } from '../login/login';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {
  public servicioAuth = inject(AuthService)
  private router = inject(Router)
  cerrarSesion() {
    this.servicioAuth.logout();
    alert('Sesión cerrada')
    this.router.navigate([''])
  }
}
