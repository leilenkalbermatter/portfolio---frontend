import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/model/education';
// SE ELIMINAN LOS SERVICIOS Y DEPENDENCIAS
// import { EducationService } from 'src/app/services/education.service';
// import { TokenService } from 'src/app/services/token.service';
// import { getStorage, ref, deleteObject } from "firebase/storage";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education: Education[] = [];
  isLogged = false;

  constructor() { }

  ngOnInit(): void {
    this.loadEducations();
  }

  loadEducations(): void {
    // CREAMOS EL ARRAY DE EDUCACIÓN CON TUS DATOS
    this.education = [
      new Education(
        'Ingeniería Industrial',
        'Universidad Tecnológica Nacional (UTN). Formación orientada a la optimización de procesos y sistemas productivos. Próximo a finalizar.',
        '2012 - 2026 (previsto)',
        '', // pathImageEducation (dejar vacío)
        'https://placehold.co/100x100/CCCCCC/FFFFFF?text=UTN'  // urlImageEducation (URL a logo de UTN o placeholder)
      ),
      new Education(
        'Full Stack Developer',
        'Argentina Programa 4.0. Programa intensivo enfocado en el desarrollo de aplicaciones web de punta a punta.',
        '2022', // O el año que corresponda
        '', // pathImageEducation (dejar vacío)
        'https://placehold.co/100x100/333333/FFFFFF?text=AP'  // urlImageEducation (URL a logo de Arg. Programa o placeholder)
      )
    ];
  }

  // Las funciones de borrado ya no son necesarias y se eliminan
  /*
  public deleteFirebase(pathImgEducation?: string) { ... }
  async delete(id?: number, pathImgEducation?: string) { ... }
  */
}
