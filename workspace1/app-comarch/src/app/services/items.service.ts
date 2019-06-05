import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpServiceInterface } from '../utils/models';
import { Observable } from 'rxjs';
import { Api } from '../utils/api';

@Injectable({
  providedIn: 'root'
})
export class ItemsService implements HttpServiceInterface {

  constructor(private http: HttpClient) { }

  fetch(params?: any): Observable<any> {
    return this.http.get(Api.ITEMS_END_POINT, {params})
  }
  add(item: any): Observable<any> {
    return this.http.post(Api.ITEMS_END_POINT, item);
  }
  update(item: any): Observable<any> {
    return this.http.get(Api.UPLOAD_END_POINT, item)
  }
  remove(id: any): Observable<any> {
    return this.http.delete(Api.ITEMS_END_POINT + "/" + id)
  }

}
