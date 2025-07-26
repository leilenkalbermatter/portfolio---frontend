import { Component, OnInit } from '@angular/core';
// Se elimina el TokenService ya que no habrá sistema de login
// import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // La variable isLogged siempre será 'false' en un sitio estático.
  isLogged = false;

  // Se elimina la dependencia de TokenService del constructor.
  constructor() { }

  ngOnInit(): void {
    // Toda la lógica para chequear si el usuario está logueado se elimina.
    // Forzamos el valor a false.
    this.isLogged = false;
  }

  // La función de logout ya no es necesaria y puede ser eliminada o comentada.
  /*
  onLogout(): void {
    this.tokenService.logOut();
    window.location.reload();
  }
  */

}
