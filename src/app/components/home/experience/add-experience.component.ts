import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  pathImageExperience: string = '';
  urlImageExperience: string = '';

  public loading: boolean = true;

  constructor(private experienceService: ExperienceService, 
    private router: Router, private imageService: ImageService) { }

  ngOnInit(): void {
  }

  onAdd(): void {
    const experience = new Experience(this.nameExperience, this.descriptionExperience, this.dateExperience, this.pathImageExperience, this.urlImageExperience);
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

  image: any[] = [];

  public reader2= new FileReader();

  loadImage(event: any) {
    let files = event.target.files;
    let reader = new FileReader();

    reader.readAsDataURL(files[0]);
    reader.onloadend = () => {
      this.urlImageExperience.toString();

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
  this.imageService.uploadImage(this.pathImageExperience="experience"+"_"+Date.now(), this.reader2.result)
  .then(urlImage => {
    this.urlImageExperience = "";
    console.log(this.urlImageExperience+=urlImage);

    setTimeout(() =>
      this.onAdd(), 
      1000);
    })
    .catch(error => console.error()
    );

  }
}


