import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError, retry} from 'rxjs/operators'
import { IRecord } from './record'

@Injectable({
  providedIn: 'root'
})
export class RecordService {  
  catalogUrl = 'http://localhost:8000/record'
  
  constructor(private http: HttpClient) {

  }

  preprocessRecord(record: IRecord) : Observable<IRecord> {
    return this.http.post<IRecord>(this.catalogUrl, record)
  }

  createRecord(name: string, fileData: string) : Observable<IRecord> {
//      mimetype: fileData.split(',')[0].split(':')[1].split(';')[0],
    
    let data = {
      name: name,
      data: fileData.split(',')[1],
      extension: 'pdf',
      pagecount: 3
    }      

    return this.http.post<IRecord>(this.catalogUrl, data);
  }
}
