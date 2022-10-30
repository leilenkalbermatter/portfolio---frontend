import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/model/about';
import { AboutService } from 'src/app/services/about.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})

export class AboutMeComponent implements OnInit {
    about: About = null;
    loadingBack: boolean;
  
    constructor(private aboutService : AboutService, private tokenService: TokenService) {
      this.loadingBack = true;

      this.aboutService.detail(1).subscribe(
        data => {
          this.about = data;
          this.loadingBack = false;
        },
        err => {
          this.loadingBack = false;
          console.log(err);
        }
      )
    }
  
    isLogged = false;
  
    ngOnInit(): void {
      this.loadAbouts();
      if(this.tokenService.getToken() != null){
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
    }
  
    loadAbouts(){
      this.aboutService.detail(1).subscribe(
        data => {
          this.about = data;
        },
        err => {
          alert("Error al cargar los datos");
        }
      )
    }
  
    delete(id?: number){
      if(id != undefined){
        this.aboutService.delete(id).subscribe(
          data => {
            this.loadAbouts();
          },
          err => {
            alert("Error al eliminar los datos");
          }
        )
      }
    }
  }
  