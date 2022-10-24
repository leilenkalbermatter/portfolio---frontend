import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent implements OnInit {

  nameEducation: string = '';
  descriptionEducation: string = '';
  dateEducation: string = '';
  imgEducation: string = '';

  constructor(private educationService: EducationService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  onAdd(): void {
    const education = new Education(this.nameEducation, this.descriptionEducation, this.dateEducation, this.imgEducation);
    this.educationService.create(education).subscribe(
      data => {
        alert('Education added successfully.');
        this.router.navigate(['']);
      },
      err => {
        alert('Error adding education.');
        this.router.navigate(['']);
      }
    );
  }

/*   loadImage($event:any) {
    const subName = this.nameEducation;
    const name = "education_" + subName;
    this.imageService.uploadImage($event, name)
  } */


}

