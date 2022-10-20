import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/services/education.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education: Education[] = []

  constructor(private educationService : EducationService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.loadEducations();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  loadEducations(){
    this.educationService.list().subscribe(
      data => {
        this.education = data;
      },
      err => {
        alert("Error al cargar los datos");
      }
    )
  }

  delete(id?: number){
    if(id != undefined){
      this.educationService.delete(id).subscribe(
        data => {
          this.loadEducations();
        },
        err => {
          alert("Error al eliminar los datos");
        }
      )
    }
  }
}
