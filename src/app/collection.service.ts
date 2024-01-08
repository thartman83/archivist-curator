import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICollection } from './collection';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  catalogUrl = 'http://stacks/collection'

  constructor(private http: HttpClient) {
  }

  getCollection(collectionId: number): Observable<ICollection> {
    return this.http.get<ICollection>(this.catalogUrl + "/" + collectionId);
  }
}
