import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/home/header/header.component';
import { AboutMeComponent } from './components/home/about-me/about-me.component';
import { EducationComponent } from './components/home/education/education.component';
import { SkillsComponent } from './components/home/skills/skills.component';
import { ProjectsComponent } from './components/home/projects/projects.component';
import { ExperienceComponent } from './components/home/experience/experience.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';
import { InterceptorProvider } from './services/interceptor-service';
import { AddExperienceComponent } from './components/home/experience/add-experience.component';
import { EditExperienceComponent } from './components/home/experience/edit-experience.component';
import { AddEducationComponent } from './components/home/education/add-education.component';
import { EditEducationComponent } from './components/home/education/edit-education.component';
import { AddProjectComponent } from './components/home/projects/add-project.component';
import { EditProjectComponent } from './components/home/projects/edit-project.component';
import { AddSkillComponent } from './components/home/skills/add-skill.component';
import { EditSkillComponent } from './components/home/skills/edit-skill.component';
import { EditAboutComponent } from './components/home/about-me/edit-about.component';
import { initializeApp } from "firebase/app";
import { provideStorage,getStorage } from '@angular/fire/storage';
import { FooterComponent } from './components/home/footer/footer.component';
import { provideFirebaseApp } from '@angular/fire/app';
import { LoadingComponent } from './components/home/loading/loading.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    HomeComponent,
    LoginComponent,
    Page404Component,
    AddExperienceComponent,
    EditExperienceComponent,
    AddEducationComponent,
    EditEducationComponent,
    AddProjectComponent,
    EditProjectComponent,
    AddSkillComponent,
    EditSkillComponent,
    EditAboutComponent,
    FooterComponent,
    LoadingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [
    InterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
