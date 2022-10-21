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
  imgProject: string = '';

  constructor(private projectService: ProjectService, 
    private router: Router,
    public imageService: ImageService) { }

  ngOnInit(): void {
  }

  onAdd(): void {
    const project = new Project(this.nameProject, this.descriptionProject, this.linkProject, this.imgProject);
    this.imgProject = this.imageService.url;

    this.projectService.create(project).subscribe(
      data => {
        alert('Project added successfully.');
        this.router.navigate(['']);
      },
      err => {
        alert('Error adding Project.');
        this.router.navigate(['']);
      }
    );
  }

  loadImage($event:any) {
    const subName = this.nameProject;
    const name = "project_" + subName;
    this.imageService.uploadImage($event, name)
  }

}
