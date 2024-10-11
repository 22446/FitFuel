import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class BodypartsService {
  private _httpClient=inject(HttpClient)
  getAllBodyPartList():Observable<any>{
    return this._httpClient.get(`${environment.baseUrl}/bodyPartList`)
  }
  getExcByNameOFequepment(name:string|null):Observable<any>{
    return this._httpClient.get(`${environment.baseUrl}/bodyPart/${name}?limit=10&offset=0`)
  }

}
