import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class BmicalcService {
  private _httpclient=inject(HttpClient)
  confirmTogetBmi(weight:number,height:number):Observable<any>{
    return this._httpclient.get(`${environment.baseUrlBmi}/metric?weight=${weight}&height=${height}`)
  }
  WeightCategory(bmi:number):Observable<any>{
    return this._httpclient.get(`${environment.baseUrlBmi}/weight-category?bmi=${bmi}`)
  }
}
