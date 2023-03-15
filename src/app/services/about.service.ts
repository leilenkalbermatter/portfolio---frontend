import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { About } from '../model/about';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  URL = environment.URL + '/about';

  constructor(private HttpClient: HttpClient) { }

  public list() : Observable<About[]>{
    return this.HttpClient.get<About[]>(this.URL + '/list');
  }

  public detail(id: number) : Observable<About>{
    return this.HttpClient.get<About>(this.URL + `/detail/${id}`);
  }

  public create(about: About) : Observable<any>{
    return this.HttpClient.post<any>(this.URL + '/create', about);
  }

  public update(id: number, about: About) : Observable<any>{
    return this.HttpClient.put<any>(this.URL + `/update/${id}`, about);
  }

  public delete(id: number) : Observable<any>{
    return this.HttpClient.delete<any>(this.URL + `/delete/${id}`);
  }
}
