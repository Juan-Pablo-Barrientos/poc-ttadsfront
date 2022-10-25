import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}


  getNpc(): Observable<Response> {
    return this.http.get<Response>(this.baseUrl + 'npc');
  }

  getQuests(): Observable<Response> {
    return this.http.get<Response>(this.baseUrl + 'quest');
  }

  getMaps(): Observable<Response> {
    return this.http.get<Response>(this.baseUrl + 'map');
  }
  getSqlEquipment(): Observable<Response> {
    return this.http.get<Response>(this.baseUrl + 'equipment');
  }
  getMongoEquipment(): Observable<Response> {
    return this.http.get<Response>(this.baseUrl + 'api/equipo');
  }
  insertSqlEquipment(): Observable<Response> {
    return this.http.post<Response>(this.baseUrl + 'equipment',{});
  }
  insertMongoEquipment(): Observable<Response> {
    return this.http.post<Response>(this.baseUrl + 'api/equipo',{});
  }



}
