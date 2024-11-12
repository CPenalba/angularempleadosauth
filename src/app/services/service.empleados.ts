import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { environment } from '../../environments/environment';

@Injectable()
export class ServiceEmpleados {
  constructor(private _http: HttpClient) {}

  login(login: Login): Observable<any> {
    let json = JSON.stringify(login);
    let header = new HttpHeaders().set('Content-type', 'application/json');
    let request = 'auth/login';
    let url = environment.urlApiEmpleados + request;
    return this._http.post(url, json, { headers: header });
  }
}
