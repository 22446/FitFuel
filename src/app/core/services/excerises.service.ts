import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ExcerisesService {

  private  _httpclient=inject(HttpClient)
  GetAllExcerises():Observable<any>{
    return this._httpclient.get(`${environment.baseUrl}?limit=10&offset=0`)
    }
}
