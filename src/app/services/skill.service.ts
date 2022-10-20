import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  skillURL = 'https://localhost:8080' + '/skill';

  constructor(private HttpClient: HttpClient) { }

  public list() : Observable<Skill[]>{
    return this.HttpClient.get<Skill[]>(this.skillURL + '/list');
  }

  public detail(id: number) : Observable<Skill>{
    return this.HttpClient.get<Skill>(this.skillURL + `/detail/${id}`);
  }

  public create(skill: Skill) : Observable<any>{
    return this.HttpClient.post<any>(this.skillURL + '/create', skill);
  }

  public update(id: number, skill: Skill) : Observable<any>{
    return this.HttpClient.put<any>(this.skillURL + `/update/${id}`, skill);
  }

  public delete(id: number) : Observable<any>{
    return this.HttpClient.delete<any>(this.skillURL + `/delete/${id}`);
  }
}