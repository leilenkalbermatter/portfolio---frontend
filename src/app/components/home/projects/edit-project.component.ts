import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/services/project.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  project : Project = null;

  constructor(private projectService: ProjectService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    public imageService: ImageService) { }

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
    this.project.imgProject = this.imageService.url;
    this.projectService.update(id, this.project).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert('No se ha podido editar el proyecto');
        this.router.navigate(['']);
      }
    );
  }
  uploadImage($event:any) {
    const name = "project_" + this.project.nameProject;
    this.imageService.uploadImage($event, name)
  }
}
