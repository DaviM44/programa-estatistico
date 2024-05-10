import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cond } from './cond';

@Injectable({
  providedIn: 'root'
})
export class CondService {

  url = "http://localhost:3001/cond";

  constructor(private http: HttpClient) { }

  save(cond: Cond) : Observable<Cond> {
    return this.http.post<Cond>(this.url, cond)
  }
  
  getCurso(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

}