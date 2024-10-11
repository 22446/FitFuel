import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DietplannerService {
  private _httpclient=inject(HttpClient)
  GetDietPlann(data:object):Observable<any>{
    return this._httpclient.post("https://ai-diet-planner.p.rapidapi.com/api/generate",data)
  }
}
