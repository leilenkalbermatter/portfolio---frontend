import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project';
// SE ELIMINAN LOS SERVICIOS Y DEPENDENCIAS
// import { ProjectService } from 'src/app/services/project.service';
// import { TokenService } from 'src/app/services/token.service';
// import { getStorage, ref, deleteObject } from "firebase/storage";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  project: Project[] = [];
  isLogged = false;

  constructor() { }

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    // CREAMOS EL ARRAY DE PROYECTOS CON TUS DATOS
    this.project = [
      new Project(
        'Sistema de Estandarización de Datos (Backend en GCP)',
        'Desarrollé un pipeline de datos serverless en Python que reduce el tiempo de procesamiento de archivos de horas a segundos, utilizando Cloud Run, Cloud Storage y Cloud SQL.',
        '#', // Puedes poner aquí el link a tu GitHub si subes el proyecto
        '', // pathImageProject (dejar vacío)
        'https://placehold.co/400x300/1A73E8/FFFFFF?text=GCP+Project'  // urlImageProject (placeholder)
      ),
      new Project(
        'Sistema de Gestión (Arquitectura de Integración)',
        'Diseñé un flujo de facturación desacoplado que conecta múltiples aplicaciones AppSheet y servicios externos vía API, mejorando la eficiencia operativa del cliente.',
        '#', // Puedes poner '#' si no hay un link público
        '', // pathImageProject (dejar vacío)
        'https://placehold.co/400x300/34A853/FFFFFF?text=AppSheet+Project'  // urlImageProject (placeholder)
      )
    ];
  }

  // Las funciones de borrado ya no son necesarias y se eliminan
  /*
  public deleteFirebase(pathImgProject?: string) { ... }
  async delete(id?: number, pathImgProject?: string) { ... }
  */
}
