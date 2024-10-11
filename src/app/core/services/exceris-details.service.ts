import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ExcerisDetailsService {
  private _httpclient=inject(HttpClient)
  getExcerDetails(id:string|null):Observable<any>{
    return this._httpclient.get( `${environment.baseUrl}/exercise/${id}`)
  }
}
