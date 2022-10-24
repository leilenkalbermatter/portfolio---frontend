import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/services/education.service';
import { TokenService } from 'src/app/services/token.service';
import { ref, Storage, uploadBytes, listAll, getDownloadURL} from '@angular/fire/storage'

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education: Education[] = null;

  //IMAGENES
  images: string[];

  constructor(private educationService : EducationService,
    private activatedRoute: ActivatedRoute, 
   private tokenService: TokenService, 
   private storage: Storage) { 

    //IMAGENES
    this.images = [];
   }

  isLogged = false;

  ngOnInit(): void {
    this.loadEducations();
    const id = this.activatedRoute.snapshot.params['id'];
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    //IMAGENES
    this.getImages();
  }

  loadEducations(){
    this.educationService.list().subscribe(
      data => {
        this.education = data;
      },
      err => {
        alert("Error al cargar los datos");
      }
    )
  }

  delete(id?: number){
    if(id != undefined){
      this.educationService.delete(id).subscribe(
        data => {
          this.loadEducations();
        },
        err => {
          alert("Error al eliminar los datos");
        }
      )
    }
  }

  //IMAGENES

  uploadImage($event: any) {
    const file = $event.target.files[0];
    console.log(file);

    const imgRef = ref(this.storage, `images/education/${file.name}`);

    uploadBytes(imgRef, file)
      .then(response => {console.log(response); this.getImages();})
      .catch(error => console.log(error));
      
  }

  getImages() {
    const imgRef = ref(this.storage, `images/education/`);
    console.log(imgRef);

    listAll(imgRef)
      .then(async response => {
        console.log(response);

        this.images = [];
        for (let item of response.items) {
          const url = await getDownloadURL(item);
          this.images.push(url);
          
        }
      })
      .catch(error => console.log(error));
  }

}
