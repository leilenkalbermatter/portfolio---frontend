import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/model/experience';
// SE ELIMINAN LOS SERVICIOS Y DEPENDENCIAS DE FIREBASE
// import { ExperienceService } from 'src/app/services/experience.service';
// import { TokenService } from 'src/app/services/token.service';
// import { getStorage, ref, deleteObject } from "firebase/storage";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experience: Experience[] = [];
  isLogged = false;

  // SE ELIMINA EL CONSTRUCTOR COMPLEJO
  constructor() { }

  ngOnInit(): void {
    // Llamamos a nuestra nueva función de carga estática
    this.loadExperiences();
    // this.isLogged se mantiene en false
  }

  loadExperiences(): void {
    // CREAMOS EL ARRAY DE EXPERIENCIA CON TUS DATOS
    this.experience = [
      new Experience(
        'Full Stack Developer & Cloud Architect',
        'Lidero el diseño y desarrollo de soluciones de software a medida para clientes, con especialización en la automatización de procesos de negocio, desarrollo backend y la integración de sistemas en la nube.',
        '2021 - Presente',
        '', // pathImageExperience (dejar vacío)
        'https://placehold.co/100x100/1E293B/FFFFFF?text=5DTech'  // urlImageExperience (puedes poner una URL a una imagen genérica de código o tu logo)
      )
    ];
  }

  // Las funciones de borrado ya no son necesarias y se eliminan
  /*
  public deleteFirebase(pathImgExperience?: string) { ... }
  async delete(id?: number, pathImgExperience?: string) { ... }
  */
}
