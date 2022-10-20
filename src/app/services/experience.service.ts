import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experience } from '../model/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  URL = environment.URL + 'experience';
  constructor(private HttpClient: HttpClient) { }

  public list() : Observable<Experience[]>{
    return this.HttpClient.get<Experience[]>(this.URL + '/list');
  }

  public detail(id: number) : Observable<Experience>{
    return this.HttpClient.get<Experience>(this.URL + `/detail/${id}`);
  }

  public create(experience: Experience) : Observable<any>{
    return this.HttpClient.post<any>(this.URL + '/create', experience);
  }

  public update(id: number, experience: Experience) : Observable<any>{
    return this.HttpClient.put<any>(this.URL + `/update/${id}`, experience);
  }

  public delete(id: number) : Observable<any>{
    return this.HttpClient.delete<any>(this.URL + `/delete/${id}`);
  }
}
