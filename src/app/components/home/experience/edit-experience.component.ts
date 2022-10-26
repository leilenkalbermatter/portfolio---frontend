import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/services/experience.service';
import { ImageService } from 'src/app/services/image.service';
import { getStorage, ref, deleteObject } from "firebase/storage";


@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit {
  experience: Experience = null;

  constructor(private experienceService: ExperienceService,
    private activatedRoute: ActivatedRoute,
    private router: Router, private imageService: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienceService.detail(id).subscribe(
      data => {
        this.experience = data;
      }, err => {
        alert('Error al mofiicar la educación');
        this.router.navigate(['']);
      }
    );
  }

  onEdit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienceService.update(id, this.experience).subscribe(
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
      this.experience.urlImageExperience.toString();

      console.log(reader.result);

      this.reader2 = reader;
      this.image.push(this.reader2.result);
      console.log(this.experience.pathImageExperience.toString());

    }
  }

  public deletefirebase(pathImageExperience?: string) {
    const storage = getStorage();

    // Create a reference to the file to delete
    const desertRef = ref(storage, "experience/" + pathImageExperience);
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

    this.deletefirebase(this.experience.pathImageExperience);

    this.imageService.uploadImage(this.experience.pathImageExperience = "experience" + "_" + Date.now(), this.reader2.result).then(urlImage => {

      this.experience.urlImageExperience = "";

      console.log(this.experience.urlImageExperience += urlImage);

      setTimeout(() =>

        this.onEdit(),

        2000);

    })
      .catch(error => console.error()
      );
  }
}


