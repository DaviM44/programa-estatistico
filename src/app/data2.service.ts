import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data2 } from './data2';

@Injectable({
  providedIn: 'root'
})
export class Data2Service {

  url = "http://localhost:4000/data2";

  constructor(private http: HttpClient) { }

  save(data2: Data2) : Observable<Data2> {
    return this.http.post<Data2>(this.url, data2)
  }
  
  getCurso(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

}