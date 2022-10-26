import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/services/experience.service';
import { TokenService } from 'src/app/services/token.service';
import { getStorage, ref, deleteObject } from "firebase/storage";


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experience: Experience[] = [];

  constructor(private experienceService: ExperienceService,
    private tokenService: TokenService) {
  }

  isLogged = false;

  ngOnInit(): void {
    this.loadExperiences();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  loadExperiences() {
    this.experienceService.list().subscribe(
      data => {
        this.experience = data;
      },
      err => {
        alert("Error al cargar los datos");
      }
    )
  }

  public deleteFirebase(pathImgExperience?: string) {
    const storage = getStorage();

    const desertRef = ref(storage, "experience/" + pathImgExperience);
    console.log(desertRef)
    // Delete the file
    deleteObject(desertRef).then(() => {
      console.log("File deleted successfully")
    }).catch((error) => {
      console.log(error)
    });
  }


  async delete(id?: number, pathImgExperience?: string) {
    if (id != undefined) {

      //await this.storage.deletefirebase(pathImgExperience);
      await this.deleteFirebase(pathImgExperience);


      setTimeout(() =>

        this.experienceService.delete(id).subscribe(
          data => {
            this.loadExperiences();

          }, err => {
            alert("Error al eliminar");
          }
        ), 1000);

    }

  }

}