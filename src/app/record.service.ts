import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRecord } from './record';

@Injectable({
  providedIn: 'root'
})
export class RecordService {  
  catalogUrl = 'http://stacks/collection'
  
  constructor(private http: HttpClient) {

  }

  preprocessRecord(record: IRecord) : Observable<IRecord> {
    return this.http.post<IRecord>(this.catalogUrl, record)
  }

  createRecord(data: FormGroup) {
    let formData = new FormData();

    formData.append('title', data.controls['title'].value);
    formData.append('file', data.controls['file'].value);

    return this.http.post<IRecord>(this.catalogUrl, formData);
  }

  getRecord(recordId : number) : Observable<IRecord> {
    return this.http.get<IRecord>(this.catalogUrl + "/" + recordId);
  }

}

