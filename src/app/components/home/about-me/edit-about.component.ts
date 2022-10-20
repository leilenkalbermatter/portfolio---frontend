import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { About } from 'src/app/model/about';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {about : About = null;

  constructor(private aboutService: AboutService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.aboutService.detail(1).subscribe(
      data => {
        this.about = data;
      }, err => {
        alert('Error al mofiicar el perfil');
        this.router.navigate(['']);
      }
    );
  }

  onEdit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.aboutService.update(1, this.about).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert('No se ha podido editar el perfil');
        this.router.navigate(['']);
      }
    );
  }
}
