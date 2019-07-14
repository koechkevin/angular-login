import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  register(data: any): Observable<any> {
    return this.http.post<any>('/api/auth/register', data);
  }

  login(data: any): Observable<any> {
    return this.http.post<any>('/api/auth/login', data);
  }
}
