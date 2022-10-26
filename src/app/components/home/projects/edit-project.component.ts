import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/services/project.service';
import { ImageService } from 'src/app/services/image.service';
import { getStorage, ref, deleteObject } from "firebase/storage";


@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  project: Project = null;

  constructor(private projectService: ProjectService,
    private activatedRoute: ActivatedRoute,
    private router: Router, private imageService: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.projectService.detail(id).subscribe(
      data => {
        this.project = data;
      }, err => {
        alert('Error al mofiicar el proyecto');
        this.router.navigate(['']);
      }
    );
  }

  onEdit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.projectService.update(id, this.project).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert('No se ha podido editar el proyecto');
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
      this.project.urlImageProject.toString();

      console.log(reader.result);

      this.reader2 = reader;
      this.image.push(this.reader2.result);
      console.log(this.project.pathImageProject.toString());

    }
  }

  public deletefirebase(pathImageProject?: string) {
    const storage = getStorage();

    // Create a reference to the file to delete
    const desertRef = ref(storage, "project/" + pathImageProject);
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

    this.deletefirebase(this.project.pathImageProject);

    this.imageService.uploadImage(this.project.pathImageProject = "project" + "_" + Date.now(), this.reader2.result).then(urlImage => {

      this.project.urlImageProject = "";

      console.log(this.project.urlImageProject += urlImage);

      setTimeout(() =>

        this.onEdit(),

        2000);

    })
      .catch(error => console.error()
      );
  }
}


