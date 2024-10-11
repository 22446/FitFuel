import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { AuthService } from '../../core/services/auth.service';
import { Iuser } from '../../core/interfaces/iuser';
import { Subscription } from 'rxjs';
import { IUserInfoDiet } from '../../core/interfaces/iuser-info-diet';
import {  Idietplan } from '../../core/interfaces/idietplan'

@Component({
  selector: 'app-userpersonaldata',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './userpersonaldata.component.html',
  styleUrl: './userpersonaldata.component.scss'
})
export class UserpersonaldataComponent implements OnInit,OnDestroy{
  _authServices=inject(AuthService)
  isReander:boolean=false
  endsub!:Subscription
  dietplansave?:Idietplan={}as Idietplan
  dietplansavee?:Idietplan={}as Idietplan
  userdata:Iuser={} as Iuser
  myObj:IUserInfoDiet={}as IUserInfoDiet

  ngOnInit(): void {
    this.isReander=true
    this.getUserData()
  }
  

  getUserData(){
    this.endsub=this._authServices.UserInfo().subscribe({
      next:(res)=>{
        this.userdata=res.user
      if(localStorage.getItem('UserPlan')!==null&&localStorage.getItem('Userdieplan')!==null){
        this.myObj=JSON.parse(localStorage.getItem('UserPlan')!)
      this.dietplansave=JSON.parse(localStorage.getItem('Userdieplan')!)
      this.dietplansavee=JSON.parse(localStorage.getItem('Userdieplan')!)
      }

      }
    })
  }
  ngOnDestroy(): void {
   return this.endsub.unsubscribe()
  }
}
