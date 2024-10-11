import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class TargetService {

  private _httpClient=inject(HttpClient)
  getAlltargetList():Observable<any>{
    return this._httpClient.get(`${environment.baseUrl}/targetList`)
  }
  getExcByNameOFTarget(name:string|null):Observable<any>{
    return this._httpClient.get(`${environment.baseUrl}/target/${name}?limit=10&offset=0`)
  }

}
