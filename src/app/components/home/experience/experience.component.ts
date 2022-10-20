import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/services/experience.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experience: Experience[] = []

  constructor(private experienceService : ExperienceService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.loadExperiences();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  loadExperiences(){
    this.experienceService.list().subscribe(
      data => {
        this.experience = data;
      },
      err => {
        alert("Error al cargar los datos");
      }
    )
  }

  delete(id?: number){
    if(id != undefined){
      this.experienceService.delete(id).subscribe(
        data => {
          this.loadExperiences();
        },
        err => {
          alert("Error al eliminar los datos");
        }
      )
    }
  }
}

