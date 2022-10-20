import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  proURL = 'https://localhost:8080' + '/project';

  constructor(private HttpClient: HttpClient) { }

  public list() : Observable<Project[]>{
    return this.HttpClient.get<Project[]>(this.proURL + '/list');
  }

  public detail(id: number) : Observable<Project>{
    return this.HttpClient.get<Project>(this.proURL + `/detail/${id}`);
  }

  public create(project: Project) : Observable<any>{
    return this.HttpClient.post<any>(this.proURL + '/create', project);
  }

  public update(id: number, project: Project) : Observable<any>{
    return this.HttpClient.put<any>(this.proURL + `/update/${id}`, project);
  }

  public delete(id: number) : Observable<any>{
    return this.HttpClient.delete<any>(this.proURL + `/delete/${id}`);
  }
}
