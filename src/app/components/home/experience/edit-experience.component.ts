import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/services/experience.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit {
  experience : Experience = null;

  constructor(private experienceService: ExperienceService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    public imageService: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienceService.detail(id).subscribe(
      data => {
        this.experience = data;
      }, err => {
        alert('Error al mofiicar la experiencia');
        this.router.navigate(['']);
      }
    );
  }

  onEdit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experience.imgExperience = this.imageService.url;
    this.experienceService.update(id, this.experience).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert('No se ha podido editar la experiencia');
        this.router.navigate(['']);
      }
    );
  }

  uploadImage($event:any) {
    const name = "experience_" + this.experience.nameExperience;
    this.imageService.uploadImage($event, name)
  }
}
