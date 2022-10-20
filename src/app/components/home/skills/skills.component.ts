import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/services/skill.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skill: Skill[] = []

  constructor(private skillService: SkillService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.loadSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  loadSkills() {
    this.skillService.list().subscribe(
      data => {
        this.skill = data;
      },
      err => {
        alert("Error al cargar los datos");
      }
    )
  }

  delete(id?: number) {
    if (id != undefined) {
      this.skillService.delete(id).subscribe(
        data => {
          this.loadSkills();
        },
        err => {
          alert("Error al eliminar los datos");
        }
      )
    }
  }

  findCategoryFrontend(skill: any[]): any[] {
    return skill.filter(skill => skill.categorySkill == "Frontend");
  }

  findSubCategoryFrontend1(skill: any[]): any[] {
    return skill.filter(skill => skill.subCategorySkill == "Básicas");
  }

  findSubCategoryFrontend2(skill: any[]): any[] {
    return skill.filter(skill => skill.subCategorySkill == "Frameworks");
  }

  findSubCategoryFrontend3(skill: any[]): any[] {
    return skill.filter(skill => skill.subCategorySkill == "Estilos");
  }


  findCategoryBackend(skill: any[]): any[] {
    return skill.filter(skill => skill.categorySkill == "Backend");
  }

  findSubCategoryBackend1(skill: any[]): any[] {
    return skill.filter(skill => skill.subCategorySkill == "Tecnología");
  }

  findCategoryDataBase(skill: any[]): any[] {
    return skill.filter(skill => skill.categorySkill == "Base de datos");
  }

  findSubCategoryDataBase1(skill: any[]): any[] {
    return skill.filter(skill => skill.subCategorySkill == "RDBMS");
  }

  findCategoryOthers(skill: any[]): any[] {
    return skill.filter(skill => skill.categorySkill == "Otras");
  }

  findSubCategoryOthers1(skill: any[]): any[] {
    return skill.filter(skill => skill.subCategorySkill == "Herramientas");
  }

  findSubCategoryOthers2(skill: any[]): any[] {
    return skill.filter(skill => skill.subCategorySkill == "Sistemas operativos");
  }

  findSubCategoryOthers3(skill: any[]): any[] {
    return skill.filter(skill => skill.subCategorySkill == "Idiomas");
  }

}

