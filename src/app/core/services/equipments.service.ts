import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class EquipmentsService {
  private _httpclient=inject(HttpClient)
  getAllEquipments():Observable<any>{
    return this._httpclient.get(`${environment.baseUrl}/equipmentList`)
  }
  getByqEquepmentName(name:string|null):Observable<any>{
    return this._httpclient.get(`${environment.baseUrl}/equipment/${name}?limit=12&offset=0`)
  }
}
