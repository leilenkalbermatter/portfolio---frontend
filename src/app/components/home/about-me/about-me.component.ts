import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/model/about';
// SE ELIMINAN LOS SERVICIOS, YA NO SON NECESARIOS
// import { AboutService } from 'src/app/services/about.service';
// import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
    // Inicializamos 'about' para evitar errores, aunque se cargará en ngOnInit
    about: About = new About('', '', '', '', '', '');
    isLogged = false; // Lo dejamos en false por defecto

    // SE ELIMINA EL CONSTRUCTOR COMPLEJO
    constructor() { }

    ngOnInit(): void {
      // En lugar de llamar a un servicio, cargamos los datos directamente
      this.loadAbout();

      // La lógica de login ya no es necesaria para mostrar datos
      // if(this.tokenService.getToken() != null){
      //   this.isLogged = true;
      // } else {
      //   this.isLogged = false;
      // }
    }

    loadAbout(): void {
      // CREAMOS EL OBJETO CON TUS DATOS DIRECTAMENTE
      this.about = new About(
        'Leilen',
        'Kalbermatter',
        'leilenkalbermatter@gmail.com', // Reemplaza con tu email
        'Desarrolladore Full Stack con especialización en Backend y arquitecturas serverless en Google Cloud Platform (GCP). Experiencia sólida en el diseño y la implementación de soluciones de punta a punta, desde la automatización de procesos de datos hasta la integración de sistemas a través de APIs.',
        'https://www.linkedin.com/in/leilen-kalbermatter/', // Reemplaza con tu URL de LinkedIn
        'https://github.com/LeilenKalbermatter' // Reemplaza con tu URL de GitHub
      );
    }

    // La función de borrar ya no tiene sentido
    /*
    delete(id?: number){
      // ...
    }
    */
}
