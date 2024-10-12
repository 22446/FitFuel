import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { AuthService } from '../../core/services/auth.service';
import { Iuser } from '../../core/interfaces/iuser';
import { Subscription } from 'rxjs';
import { IUserInfoDiet } from '../../core/interfaces/iuser-info-diet';
import {  Idietplan } from '../../core/interfaces/idietplan'
import { RouterLink } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-userpersonaldata',
  standalone: true,
  imports: [NavbarComponent,RouterLink],
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
  displayORnot!:boolean
  myObj:IUserInfoDiet={}as IUserInfoDiet
  userdataa:any

  ngOnInit(): void {
    this.isReander=true
    this.getUserData()
  }

  getUserData(){
    this.userdataa=localStorage.getItem("socialToken")
    this.userdataa=jwtDecode(this.userdataa)
    console.log(this.userdataa.user)
    this.endsub=this._authServices.UserInfo().subscribe({
      next:(res)=>{
        this.userdata=res.user
      if(localStorage.getItem(`UserPlan${this.userdataa.user}`)!==null&&localStorage.getItem(`Userdieplan${this.userdataa.user}`)!==null){
        this.displayORnot=true
        this.myObj=JSON.parse(localStorage.getItem(`UserPlan${this.userdataa.user}`)!)
      this.dietplansave=JSON.parse(localStorage.getItem(`Userdieplan${this.userdataa.user}`)!)
      this.dietplansavee=JSON.parse(localStorage.getItem(`Userdieplan${this.userdataa.user}`)!)
      }else{
        this.displayORnot=false
      }

      }
    })
  }
  ngOnDestroy(): void {
   return this.endsub.unsubscribe()
  }
}
