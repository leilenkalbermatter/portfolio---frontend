import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {

  nameSkill: string = '';
  levelSkill: string = '';
  categorySkill: string = '';
  subCategorySkill: string = '';

  constructor(private skillService: SkillService, private router: Router) { }

  ngOnInit(): void {
  }

  onAdd(): void {
    const skill = new Skill(this.nameSkill, this.levelSkill, this.categorySkill, this.subCategorySkill);
    this.skillService.create(skill).subscribe(
      data => {
        alert('skill added successfully.');
        this.router.navigate(['']);
      },
      err => {
        alert('Error adding skill.');
        this.router.navigate(['']);
      }
    );
  }

}
