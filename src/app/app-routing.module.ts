import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EducationComponent } from './components/home/education/education.component';
import { ExperienceComponent } from './components/home/experience/experience.component';
import { ProjectsComponent } from './components/home/projects/projects.component';
import { SkillsComponent } from './components/home/skills/skills.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { AddExperienceComponent } from './components/home/experience/add-experience.component';
import { EditExperienceComponent } from './components/home/experience/edit-experience.component';
import { AddEducationComponent } from './components/home/education/add-education.component';
import { EditEducationComponent } from './components/home/education/edit-education.component';
import { AddProjectComponent } from './components/home/projects/add-project.component';
import { EditProjectComponent } from './components/home/projects/edit-project.component';
import { AddSkillComponent } from './components/home/skills/add-skill.component';
import { EditSkillComponent } from './components/home/skills/edit-skill.component';
import { AboutMeComponent } from './components/home/about-me/about-me.component';
import { EditAboutComponent } from './components/home/about-me/edit-about.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'editarPerfil/:id', component: EditAboutComponent },
  { path: 'education', component: EducationComponent },
  { path: 'añadirEducación', component: AddEducationComponent},
  { path: 'editarEducación/:id', component: EditEducationComponent},
  { path: 'experience', component: ExperienceComponent },
  { path: 'añadirExperiencia', component: AddExperienceComponent},
  { path: 'editarExperiencia/:id', component: EditExperienceComponent},
  { path: 'projects', component: ProjectsComponent },
  { path: 'añadirProyecto', component: AddProjectComponent},
  { path: 'editarProyecto/:id', component: EditProjectComponent},
  { path: 'skills', component: SkillsComponent },
  { path: 'añadirSkill', component: AddSkillComponent},
  { path: 'editarSkill/:id', component: EditSkillComponent},
  { path: '**', component: Pagina404Component },
];

const routerOptions: ExtraOptions = { 
  useHash: false, anchorScrolling: 'enabled', onSameUrlNavigation: 'reload', scrollPositionRestoration: 'enabled', scrollOffset: [0, 90] };

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
