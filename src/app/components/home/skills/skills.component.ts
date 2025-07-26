import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
// SE ELIMINAN LOS SERVICIOS
// import { SkillService } from 'src/app/services/skill.service';
// import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skill: Skill[] = [];
  isLogged = false;

  constructor() { }

  ngOnInit(): void {
    this.loadSkills();
  }

  loadSkills(): void {
    // CREAMOS EL ARRAY DE HABILIDADES CON TUS DATOS
    this.skill = [
      // --- CATEGORÍA FRONTEND ---
      new Skill('HTML5', 'Avanzado', 'Frontend', 'Básicas'),
      new Skill('CSS3', 'Avanzado', 'Frontend', 'Básicas'),
      new Skill('JavaScript', 'Avanzado', 'Frontend', 'Básicas'),
      new Skill('TypeScript', 'Intermedio', 'Frontend', 'Básicas'),
      new Skill('Angular', 'Intermedio', 'Frontend', 'Frameworks'),

      // --- CATEGORÍA BACKEND ---
      new Skill('Python', 'Avanzado', 'Backend', 'Tecnología'),
      new Skill('Google Cloud Platform (GCP)', 'Intermedio', 'Backend', 'Tecnología'),
      new Skill('API REST', 'Avanzado', 'Backend', 'Tecnología'),

      // --- CATEGORÍA BASE DE DATOS ---
      new Skill('PostgreSQL', 'Intermedio', 'Base de datos', 'RDBMS'),
      new Skill('MySQL', 'Intermedio', 'Base de datos', 'RDBMS'),
      new Skill('AppSheet DB', 'Avanzado', 'Base de datos', 'NoSQL'),

      // --- CATEGORÍA OTRAS ---
      new Skill('Git', 'Avanzado', 'Otras', 'Herramientas'),
      new Skill('Docker', 'Básico', 'Otras', 'Herramientas'),
      new Skill('Linux', 'Intermedio', 'Otras', 'Sistemas operativos'),
      new Skill('Inglés', 'Profesional', 'Otras', 'Idiomas'),
    ];
  }

  // La función de borrado ya no es necesaria y se elimina
  /*
  delete(id?: number) {
    if (id != undefined) {
      // ...código anterior...
    }
  }
  */

  // Las funciones de filtrado siguen funcionando perfectamente
  findCategoryFrontend(skill: any[]): any[] { return skill.filter(skill => skill.categorySkill == "Frontend"); }
  findSubCategoryFrontend1(skill: any[]): any[] { return skill.filter(skill => skill.subCategorySkill == "Básicas"); }
  findSubCategoryFrontend2(skill: any[]): any[] { return skill.filter(skill => skill.subCategorySkill == "Frameworks"); }
  findSubCategoryFrontend3(skill: any[]): any[] { return skill.filter(skill => skill.subCategorySkill == "Estilos"); }
  findCategoryBackend(skill: any[]): any[] { return skill.filter(skill => skill.categorySkill == "Backend"); }
  findSubCategoryBackend1(skill: any[]): any[] { return skill.filter(skill => skill.subCategorySkill == "Tecnología"); }
  findCategoryDataBase(skill: any[]): any[] { return skill.filter(skill => skill.categorySkill == "Base de datos"); }
  findSubCategoryDataBase1(skill: any[]): any[] { return skill.filter(skill => skill.subCategorySkill == "RDBMS"); }
  findCategoryOthers(skill: any[]): any[] { return skill.filter(skill => skill.categorySkill == "Otras"); }
  findSubCategoryOthers1(skill: any[]): any[] { return skill.filter(skill => skill.subCategorySkill == "Herramientas"); }
  findSubCategoryOthers2(skill: any[]): any[] { return skill.filter(skill => skill.subCategorySkill == "Sistemas operativos"); }
  findSubCategoryOthers3(skill: any[]): any[] { return skill.filter(skill => skill.subCategorySkill == "Idiomas"); }
}
