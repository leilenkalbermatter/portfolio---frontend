import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/services/project.service';
import { TokenService } from 'src/app/services/token.service';
import { getStorage, ref, deleteObject } from "firebase/storage";


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  project: Project[] = [];

  constructor(private projectService: ProjectService,
    private tokenService: TokenService) {
  }

  isLogged = false;

  ngOnInit(): void {
    this.loadProjects();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  loadProjects() {
    this.projectService.list().subscribe(
      data => {
        this.project = data;
      },
      err => {
        alert("Error al cargar los datos");
      }
    )
  }

  public deleteFirebase(pathImgProject?: string) {
    const storage = getStorage();

    const desertRef = ref(storage, "project/" + pathImgProject);
    console.log(desertRef)
    // Delete the file
    deleteObject(desertRef).then(() => {
      console.log("File deleted successfully")
    }).catch((error) => {
      console.log(error)
    });
  }


  async delete(id?: number, pathImgProject?: string) {
    if (id != undefined) {

      //await this.storage.deletefirebase(pathImgProject);
      await this.deleteFirebase(pathImgProject);


      setTimeout(() =>

        this.projectService.delete(id).subscribe(
          data => {
            this.loadProjects();

          }, err => {
            alert("Error al eliminar");
          }
        ), 1000);

    }

  }

}