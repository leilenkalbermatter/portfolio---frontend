import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/services/education.service';
import { ImageService } from 'src/app/services/image.service';
import { getStorage, ref, deleteObject } from "firebase/storage";


@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit {
  education: Education = null;

  constructor(private educationService: EducationService,
    private activatedRoute: ActivatedRoute,
    private router: Router, private imageService: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educationService.detail(id).subscribe(
      data => {
        this.education = data;
      }, err => {
        alert('Error al mofiicar la educación');
        this.router.navigate(['']);
      }
    );
  }

  onEdit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educationService.update(id, this.education).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert('No se ha podido editar la educación');
        this.router.navigate(['']);
      }
    );
  }

  public loading: boolean = false;

  image: any[] = [];


  public reader2 = new FileReader();


  loadImage(event: any) {


    let files = event.target.files;

    let reader = new FileReader();


    reader.readAsDataURL(files[0]);
    reader.onloadend = () => {
      this.education.urlImageEducation.toString();

      console.log(reader.result);

      this.reader2 = reader;
      this.image.push(this.reader2.result);
      console.log(this.education.pathImageEducation.toString());

    }
  }

  public deletefirebase(pathImageEducation?: string) {
    const storage = getStorage();

    // Create a reference to the file to delete
    const desertRef = ref(storage, "education/" + pathImageEducation);
    console.log(desertRef)
    // Delete the file
    deleteObject(desertRef).then(() => {
      console.log("deleted");
    }).catch((error) => {
      console.log(error);
    });
  }

  load() {

    this.loading = true;

    this.deletefirebase(this.education.pathImageEducation);

    this.imageService.uploadImage(this.education.pathImageEducation = "education" + "_" + Date.now(), this.reader2.result).then(urlImage => {

      this.education.urlImageEducation = "";

      console.log(this.education.urlImageEducation += urlImage);

      setTimeout(() =>

        this.onEdit(),

        2000);

    })
      .catch(error => console.error()
      );
  }
}


