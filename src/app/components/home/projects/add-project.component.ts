import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/services/project.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  nameProject: string = '';
  descriptionProject: string = '';
  linkProject: string = '';
  pathImageProject: string = '';
  urlImageProject: string = '';

  public loading: boolean = true;

  constructor(private projectService: ProjectService, 
    private router: Router, private imageService: ImageService) { }

  ngOnInit(): void {
  }

  onAdd(): void {
    const project = new Project(this.nameProject, this.descriptionProject, this.linkProject, this.pathImageProject, this.urlImageProject);
    this.projectService.create(project).subscribe(
      data => {
        alert('Project added successfully.');
        this.router.navigate(['']);
      },
      err => {
        alert('Error adding project.');
        this.router.navigate(['']);
      }
    );
  }

  image: any[] = [];

  public reader2= new FileReader();

  loadImage(event: any) {
    let files = event.target.files;
    let reader = new FileReader();

    reader.readAsDataURL(files[0]);
    reader.onloadend = () => {
      this.urlImageProject.toString();

      console.log(reader.result);

      this.reader2=reader;
      this.image.push(this.reader2.result);
    }
}

input1='';
input2='';

getValue1(value:string){
  console.warn(value);
  this.input1=value;
  if (this.input1!='' && this.input2!='') {
    this.loading=false;
  }
  else{
    this.loading=true;
  }
}

getValue2(value:string){
  console.warn(value);
  this.input2=value;
  if (this.input1!='' && this.input2!='') {
    this.loading=false;
  }
  else{
    this.loading=true;
  }
}

load() {
  this.loading = true;
  this.imageService.uploadImage(this.pathImageProject="project"+"_"+Date.now(), this.reader2.result)
  .then(urlImage => {
    this.urlImageProject = "";
    console.log(this.urlImageProject+=urlImage);

    setTimeout(() =>
      this.onAdd(), 
      1000);
    })
    .catch(error => console.error()
    );

  }
}


