import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Idietplan } from '../../core/interfaces/idietplan';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  _LoginServices=inject(AuthService)
  _FormBuilder=inject(FormBuilder)
  _router=inject(Router)
  LoginGroup:FormGroup=this._FormBuilder.group({
   email : [null,[Validators.required,Validators.email]],
   password : [null,[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]],
 })

  
 userdata!:any
 dietplansave:Idietplan={}as Idietplan

   SubmitLogin(){
     if(this.LoginGroup.valid){
     this._LoginServices.signInServfunc(this.LoginGroup.value).subscribe(
     {

       next:(res)=>{
         localStorage.setItem("socialToken",res.token)
         if(localStorage.getItem("socialToken")!==null){
           this.userdata=localStorage.getItem("socialToken")
           this.userdata=jwtDecode(this.userdata)
           console.log(this.userdata.user)
           }
         const userDietPlan = localStorage.getItem(`Userdieplan${this.userdata.user}`)
         if(userDietPlan){
          this.dietplansave = JSON.parse(userDietPlan);
         }else{
          this.dietplansave={}as Idietplan
         }
         
         this._router.navigate(['/home'])
       },error:(err)=>{
        console.log(err)
       }

     })
   }
 }
}
