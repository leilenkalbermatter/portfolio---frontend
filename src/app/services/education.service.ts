import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Education } from '../model/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  eduURL = 'https://localhost:8080' + '/education';

  constructor(private HttpClient: HttpClient) { }

  public list() : Observable<Education[]>{
    return this.HttpClient.get<Education[]>(this.eduURL + '/list');
  }

  public detail(id: number) : Observable<Education>{
    return this.HttpClient.get<Education>(this.eduURL + `/detail/${id}`);
  }

  public create(education: Education) : Observable<any>{
    return this.HttpClient.post<any>(this.eduURL + '/create', education);
  }

  public update(id: number, education: Education) : Observable<any>{
    return this.HttpClient.put<any>(this.eduURL + `/update/${id}`, education);
  }

  public delete(id: number) : Observable<any>{
    return this.HttpClient.delete<any>(this.eduURL + `/delete/${id}`);
  }
}
