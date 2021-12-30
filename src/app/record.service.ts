import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError, retry} from 'rxjs/operators'
import { IRecord } from './record'

@Injectable({
  providedIn: 'root'
})
export class RecordService {  
  catalogUrl = 'localhost'
  
  constructor(private http: HttpClient) {

  }

  preprocessRecord(record: IRecord) : Observable<IRecord> {
    return this.http.post<IRecord>(this.catalogUrl, record)
  }

  createRecord() : Observable<IRecord> {
    let data = {}
    return this.http.post<IRecord>(this.catalogUrl, data)
  }  
}
