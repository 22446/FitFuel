import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  private _HtppClient=inject(HttpClient)
  private _Router=inject(Router)
  signUpServfunc(data:object):Observable<any>{
    return this._HtppClient.post(`${environment.baseUrluser}/users/signup`,data)
  }
  signInServfunc(data:object):Observable<any>{
    return this._HtppClient.post(`${environment.baseUrluser}/users/signin`,data)
  }
  
  logout(){
    if(localStorage.getItem('socialToken')!==null)
    {
      localStorage.removeItem('socialToken')
      this._Router.navigate(['/login'])
    }
  }
  UserInfo():Observable<any>{
    return this._HtppClient.get(`${environment.baseUrluser}/users/profile-data`)
  }
  UserChangePhoto(data:object):Observable<any>{
    return this._HtppClient.put(`${environment.baseUrluser}/users/upload-photo`,data)
  }
}
