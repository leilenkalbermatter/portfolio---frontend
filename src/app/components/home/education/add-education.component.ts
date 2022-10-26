import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/services/education.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent implements OnInit {

  nameEducation: string = '';
  descriptionEducation: string = '';
  dateEducation: string = '';
  pathImageEducation: string = '';
  urlImageEducation: string = '';

  public loading: boolean = true;

  constructor(private educationService: EducationService, 
    private router: Router, private imageService: ImageService) { }

  ngOnInit(): void {
  }

  onAdd(): void {
    const education = new Education(this.nameEducation, this.descriptionEducation, this.dateEducation, this.pathImageEducation, this.urlImageEducation);
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

  image: any[] = [];

  public reader2= new FileReader();

  loadImage(event: any) {
    let files = event.target.files;
    let reader = new FileReader();

    reader.readAsDataURL(files[0]);
    reader.onloadend = () => {
      this.urlImageEducation.toString();

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
  this.imageService.uploadImage(this.pathImageEducation="education"+"_"+Date.now(), this.reader2.result)
  .then(urlImage => {
    this.urlImageEducation = "";
    console.log(this.urlImageEducation+=urlImage);

    setTimeout(() =>
      this.onAdd(), 
      1000);
    })
    .catch(error => console.error()
    );

  }
}


