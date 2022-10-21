import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/services/experience.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent implements OnInit {

  nameExperience: string = '';
  descriptionExperience: string = '';
  dateExperience: string = '';
  imgExperience: string = '';

  constructor(private experienceService: ExperienceService, private router: Router, private activatedRoute: ActivatedRoute, public imageService: ImageService) { }

  ngOnInit(): void {
  }

  onAdd(): void {
    const experience = new Experience(this.nameExperience, this.descriptionExperience, this.dateExperience, this.imgExperience);
    this.imgExperience = this.imageService.url;
    this.experienceService.create(experience).subscribe(
      data => {
        alert('Experience added successfully.');
        this.router.navigate(['']);
      },
      err => {
        alert('Error adding experience.');
        this.router.navigate(['']);
      }
    );
  }

  loadImage($event:any) {
    const subName = this.nameExperience;
    const name = "experience_" + subName;
    this.imageService.uploadImage($event, name)
  }

}
