import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  _SignUpServices=inject(AuthService)
  _Toaastr=inject(ToastrService)
  _FormBuilder=inject(FormBuilder)
  _Router=inject(Router)
   RegisterGroup:FormGroup=this._FormBuilder.group({
   name:[null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
   email : [null,[Validators.required,Validators.email]],
   password : [null,[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]],
   rePassword:[null,[Validators.required]],
   dateOfBirth:[null,[Validators.required]],
   gender:[null,[Validators.required]]
 },{validators:this.passwordMatchValidator})

  passwordMatchValidator(g: AbstractControl)
   {
   if(g.get('password')?.value === g.get('rePassword')?.value){
     return null
   }else
      return  {mismatch : true};
   }
 @ViewChild('change') myElement!:ElementRef

changeType(){
 this.myElement.nativeElement.setAttribute('type','date')
}

   SubmitRegister(){
     if(this.RegisterGroup.valid){
     this._SignUpServices.signUpServfunc(this.RegisterGroup.value).subscribe(
     {

       next:(res)=>{
        this._Toaastr.success('account created successfully','FitFuel')
         this._Router.navigate(['/login'])

       }

     })
   }
 }
}
