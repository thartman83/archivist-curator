import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { IStatus } from './status'

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  _statusUrl = 'http://0.0.0.0:8000/status'
  
  constructor(private _http: HttpClient) { }

  getStatus(): Observable<IStatus> {
    return this._http.get<IStatus>(this._statusUrl);
  }
}
