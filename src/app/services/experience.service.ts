import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experience } from '../model/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  expURL = 'https://localhost:8080' + '/experience';
  constructor(private HttpClient: HttpClient) { }

  public list() : Observable<Experience[]>{
    return this.HttpClient.get<Experience[]>(this.expURL + '/list');
  }

  public detail(id: number) : Observable<Experience>{
    return this.HttpClient.get<Experience>(this.expURL + `/detail/${id}`);
  }

  public create(experience: Experience) : Observable<any>{
    return this.HttpClient.post<any>(this.expURL + '/create', experience);
  }

  public update(id: number, experience: Experience) : Observable<any>{
    return this.HttpClient.put<any>(this.expURL + `/update/${id}`, experience);
  }

  public delete(id: number) : Observable<any>{
    return this.HttpClient.delete<any>(this.expURL + `/delete/${id}`);
  }
}
