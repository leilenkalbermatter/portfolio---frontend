import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/services/education.service';
import { TokenService } from 'src/app/services/token.service';
import { getStorage, ref, deleteObject } from "firebase/storage";


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education: Education[] = [];

  constructor(private educationService: EducationService,
    private activatedRoute: ActivatedRoute,
    private tokenService: TokenService) {
  }

  isLogged = false;

  ngOnInit(): void {
    this.loadEducations();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  loadEducations() {
    this.educationService.list().subscribe(
      data => {
        this.education = data;
      },
      err => {
        alert("Error al cargar los datos");
      }
    )
  }

  public deleteFirebase(pathImgEducation?: string) {
    const storage = getStorage();

    // Create a reference to the file to delete
    const desertRef = ref(storage, "education/" + pathImgEducation);
    console.log(desertRef)
    // Delete the file
    deleteObject(desertRef).then(() => {
      console.log("Eliminado")
    }).catch((error) => {
      console.log(error)
    });
  }


  async delete(id?: number, pathImgEducation?: string) {
    if (id != undefined) {

      //await this.storage.deletefirebase(pathImgEducation);
      await this.deleteFirebase(pathImgEducation);


      setTimeout(() =>

        this.educationService.delete(id).subscribe(
          data => {
            this.loadEducations();

          }, err => {
            alert("Error al eliminar");
          }
        ), 2000);

    }

  }

}