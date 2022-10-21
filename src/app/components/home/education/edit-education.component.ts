import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/services/education.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit {
  education : Education = null;

  constructor(private educationService: EducationService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    public imageService: ImageService) { }

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
    this.education.imgEducation = this.imageService.url;
    this.educationService.update(id, this.education).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert('No se ha podido editar la educación');
        this.router.navigate(['']);
      }
    );
  }

  uploadImage($event:any) {
    const name = "education_" + this.education.nameEducation;
    this.imageService.uploadImage($event, name)
  }
}
