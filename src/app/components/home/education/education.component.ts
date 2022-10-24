import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/services/education.service';
import { ImageService } from 'src/app/services/image.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education: Education[] = null;

  constructor(private educationService : EducationService,
    private activatedRoute: ActivatedRoute, 
   private tokenService: TokenService, 
   private router: Router,
   public imageService: ImageService) { }

  isLogged = false;

  ngOnInit(): void {
    this.loadEducations();
    const id = this.activatedRoute.snapshot.params['id'];
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
