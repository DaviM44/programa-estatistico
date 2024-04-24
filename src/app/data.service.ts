import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  url = "http://localhost:3000/data";

  constructor(private http: HttpClient) { }

  save(data: Data) : Observable<Data> {
    return this.http.post<Data>(this.url, data)
  }
  
  getCurso(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

}